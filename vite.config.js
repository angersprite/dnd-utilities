import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: {
      key: './dev-certs/cert.key', 
      cert: './dev-certs/cert.crt',
    }
  },
  plugins: [react()],
})
