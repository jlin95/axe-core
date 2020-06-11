describe('forms.isAriaListbox', function() {
	'use strict';
	var isAriaListbox = axe.commons.forms.isAriaListbox;

	it('returns true for an element with role=listbox', function() {
		var node = document.createElement('div');
		node.setAttribute('role', 'listbox');
		axe.utils.getFlattenedTree(node);
		assert.isTrue(isAriaListbox(node));
	});

	it('returns false for elements without role', function() {
		var node = document.createElement('div');
		axe.utils.getFlattenedTree(node);
		assert.isFalse(isAriaListbox(node));
	});

	it('returns false for elements with incorrect role', function() {
		var node = document.createElement('div');
		node.setAttribute('role', 'main');
		axe.utils.getFlattenedTree(node);
		assert.isFalse(isAriaListbox(node));
	});

	it('returns false for native select', function() {
		var node = document.createElement('select');
		axe.utils.getFlattenedTree(node);
		assert.isFalse(isAriaListbox(node));
	});
});
