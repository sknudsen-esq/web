import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Steen Knudsen Esquerda",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    locale: "ca-ES",
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
        header: "Poppins", // Font sans-serif moderna i vibrant
        body: "Inter", // Font sans-serif ultra llegible
        code: "Fira Code", // Font mono amb personalitat
      },
      colors: {
        lightMode: {
          light: "#F8FAFC", // Blanc molt pur
          lightgray: "#E2E8F0", // Gris molt clar
          gray: "#94A3B8", // Gris mitjà
          darkgray: "#475569", // Gris fosc
          dark: "#1E293B", // Gairebé negre suau
          secondary: "#3B82F6", // Blau vibrant
          tertiary: "#2563EB", // Blau intens
          highlight: "rgba(59, 130, 246, 0.1)", // Resaltat blau suau
          textHighlight: "#BFDBFE", // Resaltat de text
        },
        darkMode: {
          light: "#0F172A", // Fons blau marí fosc
          lightgray: "#1E293B", // Gris blavós
          gray: "#64748B", // Gris blau
          darkgray: "#E2E8F0", // Gris clar
          dark: "#F8FAFC", // Blanc pur
          secondary: "#60A5FA", // Blau brillant
          tertiary: "#93C5FD", // Blau cel
          highlight: "rgba(96, 165, 250, 0.1)", // Resaltat blau suau
          textHighlight: "#1E40AF", // Resaltat de text
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