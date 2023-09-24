import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "青岛 KUG",
  description: "青岛 Kotlin User Group",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
