/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  // 移除 experimental.turbo 配置（不再使用 Turbopack）
  webpack(config) {
    config.module.rules.push({
      test: /\.txt$/,
      type: 'asset/source', // ← Webpack 5 原生支持，无需 raw-loader！
    });
    return config;
  },
};

export default config;