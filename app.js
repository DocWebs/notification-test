let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the default mini-info bar from showing
  e.preventDefault();
  deferredPrompt = e;
});

document.querySelector('.app').addEventListener('click', () => {
  if (deferredPrompt) {
    deferredPrompt.prompt(); // Show the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        alert('App added to your home screen!');
      } else {
        alert('You dismissed the installation.');
      }
      deferredPrompt = null;
    });
  } else {
    alert('This feature is not available in your browser.');
  }
});