import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// Source - https://stackoverflow.com/a/78530656
// Posted by Chinenye
// Retrieved 2026-04-07, License - CC BY-SA 4.0

import tailwindcss from "tailwindcss";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
