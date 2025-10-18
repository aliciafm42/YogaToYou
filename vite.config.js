import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Update the base path to your GitHub repo name
export default defineConfig({
  base: '/YogaToYou/',
  plugins: [react()],
})
