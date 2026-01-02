import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Steen Knudsen Esquerda",
    pageTitleSuffix: "",
    enableSPA: false,
    enablePopovers: true,
    locale: "en-US",
    baseUrl: "sknudsen-esq.github.io/web",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    analytics: {
      provider: "plausible",
    },
theme: {
  fontOrigin: "googleFonts",
  cdnCaching: true,
  typography: {
    header: "Merriweather",
    body: "Lora",
    code: "JetBrains Mono",
  },
  colors: {
    lightMode: {
  light: "#f8f1e7",            // Fons general beix clar
  lightgray: "#f0e6d6",        // Tons beix suaus
  gray: "#c9b8a7",             // Marró molt clar (per subtítols, etc.)
  darkgray: "#6e6259",         // Text principal, marró mitjà
  dark: "#3e352d",             // Títols, marró fosc
  secondary: "#a37c49",        // Enllaços (taronja/marró càlid)
  tertiary: "#d3b98c",         // Accent decoratiu (beix daurat)
  highlight: "rgba(163, 124, 73, 0.1)",  // Ressaltat de bloc
  textHighlight: "#ffe7b588",            // Ressaltat de text (groc suau translúcid)
},
    darkMode: {
      light: "#1f1f1f",
      lightgray: "#2c2c2c",
      gray: "#5a5a5a",
      darkgray: "#cccccc",
      dark: "#f0f0f0",
      secondary: "#d0b97f",
      tertiary: "#a49f8d",
      highlight: "rgba(255, 255, 255, 0.1)",
      textHighlight: "#f2c94c88",
    },
      },
      animation: {
        enable: true,
        transitionSpeed: "0.2s",
        hoverEffect: "scale(1.03)",
        clickEffect: "scale(0.97)",
      },
      layout: {
        pagePadding: "1.5rem",
        pageWidth: "85ch",
        lineHeight: 1.7,
        headerFontSize: "2.25rem",
        blockMargin: "1.25rem",
      },
    },
    langs: {
      en: "English",
    },
    defaultLang: "en",
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
        enableGraphView: false, // Graph View desactivada
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      Plugin.CustomOgImages(),
    ],
  },
}

export default config