import * as exifr from '../src/bundle-full.js'

const isBrowser = typeof navigator === 'object'

// settings used to extract the depth map
const options = {
	// We don't need TIFF, nor thumbnail, so skip this segment (enabled by default).
	tiff: false,
	// Depth map is stored in an XMP Extended segment (not the main one).
	xmp: true,
	// We need to tell exifr not to stop at the first XMP segment, but to find them all.
	multiSegment: true,
	// There will be mutliple XMP namespaces (GDepth, GImage) with the same properties (Mime, Data).
	// We don't want them to overwrite each other.
	mergeOutput: false,
}

extractDepthMap('../test/fixtures/xmp depth map.jpg')

// Node.js only
async function saveToDisk(xmpNamespace, fileName) {
	let fs = await import('fs').then(fs => fs.promises)
	// The depth map is stored as base64 string
	let base64 = xmpNamespace.Data
	let fileExt = xmpNamespace.Mime.split('/').pop()
	let buffer = Buffer.from(base64, 'base64')
	fs.writeFile(fileName + '.' + fileExt, buffer)
}

// Browser only
async function displayInBrowser(xmpNamespace, fileName) {
	let base64 = xmpNamespace.Data
	let mime = xmpNamespace.Mime
	//console.log('base64', base64)
	let $img = document.querySelector('#' + fileName)
	$img.src = `data:${mime};base64,${base64}`
}

function handleFile(xmpNamespace, fileName) {
	if (isBrowser)
		displayInBrowser(xmpNamespace, fileName)
	else
		saveToDisk(xmpNamespace, fileName)
}

async function extractDepthMap(filePath) {
	// extract the data from file
	if (isBrowser) document.querySelector('#input-file').src = filePath
	let output = await exifr.parse(filePath, options)
	if (output && output.GDepth) {
		log('The file contains depth map')
		log('GDepth.Format', output.GDepth.Format)
		log('GDepth.Near', output.GDepth.Near)
		log('GDepth.Far', output.GDepth.Far)
		log('GDepth.Mime', output.GDepth.Mime)
		// store or display the depth map image
		handleFile(output.GDepth, 'depth-map')
	} else {
		log('the file has no depth map')
		return
	}
	// Besides depth map, there can be original image with no blurring applied.
	// NOTE: GImage can be also used for "the other eye" in VR photos
	if (output && output.GImage) {
		log('The file contains unmodified original photo')
		log('GImage.Mime', output.GImage.Mime)
		// store or display the source image
		handleFile(output.GImage, 'depth-source')
	} else {
		log(`the file doesn't contain unmodified image`)
	}
}

function log(...args) {
	if (isBrowser) {
		let $log = document.querySelector('#log')
		$log.innerHTML += args.join(' ') + '\n'
	} else {
		console.log(...args)
	}
}