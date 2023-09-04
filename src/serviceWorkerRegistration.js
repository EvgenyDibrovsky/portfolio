export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').catch(registrationError => {
        //   console.log('Ошибка регистрации Service Worker:', registrationError);
      });
    });
  }
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then(registration => {
        registration.unregister();
      })
      .catch(error => {
        //  console.log('Ошибка при отмене регистрации Service Worker:', error);
      });
  }
}
