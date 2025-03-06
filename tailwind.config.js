module.exports = {
  // ... resto de tu configuración
  variants: {
    extend: {
      scale: ['active', 'playing'],
      backgroundColor: ['active', 'playing'],
      ringWidth: ['playing'],
      ringColor: ['playing'],
      ringOpacity: ['playing'],
    },
  },
} 