import Alpine from 'alpinejs'
console.log('JS is working');

window.addEventListener('DOMContentLoaded', () => {
  window.Alpine = Alpine // Add Alpine to the Global Scope.
  Alpine.start() // Start Alpine — not strictly necessary. It starts automatically. 
})
