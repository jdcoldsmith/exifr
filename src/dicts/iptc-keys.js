import {tagKeys, createDictionary} from '../tags.js'


// Slightly modified version of
// https://exiftool.org/TagNames/IPTC.html

createDictionary(tagKeys, 'iptc', [
	[0,   'ApplicationRecordVersion'],
	[3,   'ObjectTypeReference'],
	[4,   'ObjectAttributeReference'],
	[5,   'ObjectName'],
	[7,   'EditStatus'],
	[8,   'EditorialUpdate'],
	[10,  'Urgency'],
	[12,  'SubjectReference'],
	[15,  'Category'],
	[20,  'SupplementalCategories'],
	[22,  'FixtureIdentifier'],
	[25,  'Keywords'],
	[26,  'ContentLocationCode'],
	[27,  'ContentLocationName'],
	[30,  'ReleaseDate'],
	[35,  'ReleaseTime'],
	[37,  'ExpirationDate'],
	[38,  'ExpirationTime'],
	[40,  'SpecialInstructions'],
	[42,  'ActionAdvised'],
	[45,  'ReferenceService'],
	[47,  'ReferenceDate'],
	[50,  'ReferenceNumber'],
	[55,  'DateCreated'],
	[60,  'TimeCreated'],
	[62,  'DigitalCreationDate'],
	[63,  'DigitalCreationTime'],
	[65,  'OriginatingProgram'],
	[70,  'ProgramVersion'],
	[75,  'ObjectCycle'],
	[80,  'Byline'],
	[85,  'BylineTitle'],
	[90,  'City'],
	[92,  'Sublocation'],
	[95,  'State'], // Province-State
	[100, 'CountryCode'], // Country-PrimaryLocationCode
	[101, 'Country'], // 	Country-PrimaryLocationName
	[103, 'OriginalTransmissionReference'],
	[105, 'Headline'],
	[110, 'Credit'],
	[115, 'Source'],
	[116, 'CopyrightNotice'],
	[118, 'Contact'],
	[120, 'Caption'], // 	Caption-Abstract
	[121, 'LocalCaption'],
	[122, 'Writer'], // Writer-Editor
	[125, 'RasterizedCaption'],
	[130, 'ImageType'],
	[131, 'ImageOrientation'],
	[135, 'LanguageIdentifier'],
	[150, 'AudioType'],
	[151, 'AudioSamplingRate'],
	[152, 'AudioSamplingResolution'],
	[153, 'AudioDuration'],
	[154, 'AudioOutcue'],
	[184, 'JobID'],
	[185, 'MasterDocumentID'],
	[186, 'ShortDocumentID'],
	[187, 'UniqueDocumentID'],
	[188, 'OwnerID'],
	[200, 'ObjectPreviewFileFormat'],
	[201, 'ObjectPreviewFileVersion'],
	[202, 'ObjectPreviewData'],
	[221, 'Prefs'],
	[225, 'ClassifyState'],
	[228, 'SimilarityIndex'],
	[230, 'DocumentNotes'],
	[231, 'DocumentHistory'],
	[232, 'ExifCameraInfo'],
	[255, 'CatalogSets'],
])