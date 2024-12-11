import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePluginFonts } from "vite-plugin-fonts";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePluginFonts({
			google: {
				families: ["Noto Sans Mono"],
			},
		}),
	],
	server: {
		port: 5173,
		open: true,
	},
	build: {
		outDir: "dist",
		sourcemap: true,
	},
});
