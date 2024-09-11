import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import prismjs from 'vite-plugin-prismjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prismjs({languages: ['ts', 'tsx', 'js'], plugins: ['line-numbers', 'show-language'], theme: 'okaidia', css: true}),
  ],
})
