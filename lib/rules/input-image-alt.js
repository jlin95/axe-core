const inputImageAltMetadata = {
	id: 'input-image-alt',
	selector: 'input[type="image"]',
	tags: [
		'cat.text-alternatives',
		'wcag2a',
		'wcag111',
		'section508',
		'section508.22.a'
	],
	metadata: {
		description: 'Ensures <input type="image"> elements have alternate text',
		help: 'Image buttons must have alternate text'
	},
	all: [],
	any: ['non-empty-alt', 'aria-label', 'aria-labelledby', 'non-empty-title'],
	none: []
};

export default inputImageAltMetadata;