import { defineConfig , loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
},
({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
      define: {
          'process.env.FIREBASE_API_KEY': JSON.stringify(env.FIREBASE_API_KEY),
          'process.env.YOUR_BOOLEAN_VARIABLE': env.YOUR_BOOLEAN_VARIABLE,
          // If you want to exposes all env variables, which is not recommended
          // 'process.env': env
      },
  };
}


)
