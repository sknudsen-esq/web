import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Steen Knudsen Esquerda",
    pageTitleSuffix: "",
    enableSPA: true,
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
        header: "Poppins", // Font sans-serif moderna i vibrant
        body: "Inter", // Font sans-serif ultra llegible
        code: "Fira Code", // Font mono amb personalitat
      },
      colors: {
        lightMode: {
    light: "#bad6ff", // Fons blau molt clar amb toc càlid
    lightgray: "#E1E8F2", // Blau clar neutral
    gray: "#8A9CB2", // Gris-blau per text secundari
    darkgray: "#4A5C72", // Gris-blau fosc per text principal
    dark: "#2C3E50", // Blau fosc intens per encapçalaments
    secondary: "#1A73E8", // Blau principal (punt d'interès)
    tertiary: "#E6B17E", // Toc terros/taronja per a detalls (càlid)
    textHighlight: "#FFEED8", // Resaltat de text càlid
        },
        darkMode: {
          light: "#0F172A", // Fons blau marí fosc
          lightgray: "#1E293B", // Gris blavós
          gray: "#64748B", // Gris blau
          darkgray: "#E2E8F0", // Gris clar
          dark: "#F8FAFC", // Blanc pur
          secondary: "#60A5FA", // Blau brillant
          tertiary: "#93C5FD", // Blau cel
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