chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('bbb.html', {
    'outerBounds': {
      'width': 800,
      'height': 450
    }
  });
});
