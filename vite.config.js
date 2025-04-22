import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      visualizer({
        open: true,
      }),
    ],

    server: {
      hmr: true,
      port: 5173,
      // open: true,
      // fs: {
      //   allow: ["node_modules/@carbon"], // Allow access to node_modules folder
      // },
    },

    optimizeDeps: {
      include: ["react", "react-dom"],
      // exclude: [""],
    },

    build: {
      minify: "terser",
      terserOptions: {
        compress: {
          pure_funcs: ["console.log"],
          drop_debugger: true,
        },
      },
    },

    define: {
      __DEV__: mode === "development",
    },
  };
});
