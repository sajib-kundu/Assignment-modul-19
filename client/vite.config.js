import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy all requests from '/api' to 'http://localhost:3001'
      // This means any request made to '/api' will be forwarded to 'http://localhost:3030'
      '/api': {
        target: 'http://localhost:3030', // The backend server URL

      },
    },
  },
})
