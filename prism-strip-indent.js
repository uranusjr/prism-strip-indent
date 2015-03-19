(function () {

if (!self.Prism) {
	return;
}

Prism.hooks.add('after-highlight', function (env) {
	var parent = env.element.parentNode;
	if (parent && parent.tagName.toUpperCase() === 'PRE') {
		parent.innerHTML = parent.innerHTML.trim();
	}
});

})();
