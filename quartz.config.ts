import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 * Personalitzat per investigador predoctoral amb suport multilingüe
 * Veure: https://quartz.jzhao.xyz/configuration
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Steen Knudsen Esquerda",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    locale: "ca-ES",
    baseUrl: "nomcognom.github.io", // Canvia-ho pel teu domini personalitzat si en tens
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    analytics: {
      provider: "plausible",
    },
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
  colors: {
    lightMode: {
      light: "#F0F4F8",
      lightgray: "#A3B1C6",
      gray: "#617A9B",
      darkgray: "#3B506B",
      dark: "#1C2D48",
      secondary: "#7F9DB9",
      tertiary: "#5579A1",
      highlight: "rgba(85, 121, 161, 0.15)",
      textHighlight: "#D1E3FF88",
    },
    darkMode: {
      light: "#1C2D48",
      lightgray: "#5579A1",
      gray: "#7F9DB9",
      darkgray: "#A3B1C6",
      dark: "#F0F4F8",
      secondary: "#617A9B",
      tertiary: "#D1E3FF",
      highlight: "rgba(209, 227, 255, 0.15)",
      textHighlight: "#D1E3FF88",
    },
  },
},
    // Idiomes suportats
    langs: {
      ca: "Català",
      es: "Español",
      en: "English",
    },
    defaultLang: "ca",
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
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
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
