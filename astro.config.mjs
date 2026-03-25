// @ts-check
import { defineConfig } from "astro/config";

// GitHub Pages (project site): set in CI — https://docs.astro.build/en/guides/deploy/github/
const site = process.env.SITE_URL;
const base = process.env.BASE_PATH ?? "/";

export default defineConfig({
	...(site ? { site } : {}),
	base,
});
