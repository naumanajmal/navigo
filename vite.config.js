import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/wp-api': {
        target: 'https://navigo.ae/navigoadmin/index.php/wp-json',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/wp-api/, ''),
        secure: false
      }
    }
  }
})
