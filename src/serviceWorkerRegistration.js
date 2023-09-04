// serviceWorkerRegistration.js

export function register() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('Service Worker зарегистрирован:', registration);
        })
        .catch(registrationError => {
          console.log('Ошибка регистрации Service Worker:', registrationError);
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
        console.log('Ошибка при отмене регистрации Service Worker:', error);
      });
  }
}
