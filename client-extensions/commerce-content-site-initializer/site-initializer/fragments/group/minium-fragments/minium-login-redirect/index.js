if (!fragmentNamespace) {
	// If it is not set then we are in the fragment editor
	fragmentElement.querySelector('.alert').classList.remove('hide');

	return;
}

if (document.body.classList.contains('has-edit-mode-menu')) {
	// If present then we are in the content page editor
	fragmentElement.querySelector('.alert').classList.remove('hide');

	return;
}

if (themeDisplay.isSignedIn()) {
	if (configuration.redirectURL.length > 0) {
		window.location.replace(configuration.redirectURL);
	}
}
