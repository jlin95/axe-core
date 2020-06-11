describe('forms.isAriaRange', function() {
	'use strict';
	var isAriaRange = axe.commons.forms.isAriaRange;

	it('returns true for an element with range roles', function() {
		var rangeRoles = ['progressbar', 'scrollbar', 'slider', 'spinbutton'];
		rangeRoles.forEach(function(role) {
			var node = document.createElement('div');
			node.setAttribute('role', role);
			node.setAttribute('aria-valuenow', '0');
			axe.utils.getFlattenedTree(node);
			assert.isTrue(
				isAriaRange(node),
				'role="' + role + '" is not an aria range role'
			);
		});
	});

	it('returns false for elements without role', function() {
		var node = document.createElement('div');
		axe.utils.getFlattenedTree(node);
		assert.isFalse(isAriaRange(node));
	});

	it('returns false for elements with incorrect role', function() {
		var node = document.createElement('div');
		node.setAttribute('role', 'main');
		axe.utils.getFlattenedTree(node);
		assert.isFalse(isAriaRange(node));
	});

	it('returns false for native range elements', function() {
		var nativeRangeElements = [
			{
				nodeName: 'progress'
			},
			{
				nodeName: 'input',
				type: 'range'
			},
			{
				nodeName: 'input',
				type: 'number'
			}
		];
		nativeRangeElements.forEach(function(elm) {
			var node = document.createElement(elm.nodeName);
			if (elm.type) {
				node.setAttribute('type', elm.type);
			}
			axe.utils.getFlattenedTree(node);
			assert.isFalse(
				isAriaRange(node),
				node.outterHTML + ' is not an aria range element'
			);
		});
	});
});
