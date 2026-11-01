import { defineConfig } from 'vitest/config'

// Reine Logik-Tests: Node-Umgebung, feste Zeitzone für deterministische Tageswechsel.
process.env.TZ = 'Europe/Berlin'

export default defineConfig({
  test: {
    environment: 'node',
    include: ['src/**/*.test.ts'],
  },
})
