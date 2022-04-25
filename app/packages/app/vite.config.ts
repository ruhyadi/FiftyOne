import { UserConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import nodePolyfills from "rollup-plugin-polyfill-node";

export default {
  base: "",
  plugins: [
    reactRefresh({
      parserPlugins: ["classProperties", "classPrivateProperties"],
    }),
    nodePolyfills(),
  ],
} as UserConfig;
