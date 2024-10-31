import { reactRouter } from "@react-router/dev/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";
import {env} from "node:process";
import {vercelServerlessPreset} from "@resolid/remix-plugins/vercel-serverless";

export default defineConfig({
  plugins: [reactRouter({
    ...(env.VERCEL_ENV && { presets: [vercelServerlessPreset({ regions: "hnd1" })] })}), tsconfigPaths(), ],
});
