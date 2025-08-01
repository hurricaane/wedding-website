// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      htmlAttrs: {
        lang: "fr",
      },
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=Source+Sans+Pro:wght@300;400;500;600;700&family=Dancing+Script:wght@400;600;700&display=swap",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
        { name: "theme-color", content: "#d4af37" },
        { name: "msapplication-TileColor", content: "#d4af37" },
        { name: "author", content: "Yannick & Louise" },
        {
          name: "keywords",
          content:
            "mariage, wedding, Yannick, Louise, Dakar, Sénégal, RSVP, 20 décembre 2025",
        },
        { property: "og:type", content: "website" },
        { property: "og:locale", content: "fr_FR" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    },
  },

  runtimeConfig: {
    // Private server-side only
    resendApiKey: process.env.NUXT_RESEND_API_KEY,
    resendFromEmail: process.env.NUXT_RESEND_FROM_EMAIL,
    resendToEmail: process.env.NUXT_RESEND_TO_EMAIL,
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://yannick-louise.com",
      siteName: "Yannick & Louise - Mariage",
    },
  },

  // Modern SEO Configuration with @nuxtjs/seo
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || "https://yannick-louise.com",
    name: "Décembre 2025", // Empty site name to prevent title templating
    description:
      "Rejoignez-nous le 20 décembre 2025 à Dakar, Sénégal pour célébrer notre union. Site officiel du mariage de Yannick et Louise avec RSVP en ligne.",
    defaultLocale: "fr",
  },

  // Enhanced Sitemap Configuration
  sitemap: {
    sources: ["/", "/rsvp", "/question"],
    cacheMaxAgeSeconds: 86400, // 24 hours
    strictNuxtContentPaths: true,
  },

  // Enhanced Robots Configuration
  robots: {
    groups: [
      {
        userAgent: ["*"],
        allow: ["/"],
        disallow: [],
      },
    ],
    blockAiBots: true, // Block AI crawlers for privacy
  },

  // Schema.org structured data
  schemaOrg: {
    identity: {
      type: "Organization",
      name: "Yannick & Louise - Mariage",
      url: process.env.NUXT_PUBLIC_SITE_URL || "https://yannick-louise.com",
      logo:
        (process.env.NUXT_PUBLIC_SITE_URL || "https://yannick-louise.com") +
        "/logo.png",
    },
  },

  // SEO Utils Configuration
  seo: {
    fallbackTitle: false, // Disable automatic title templating
    titleSeparator: "", // Remove separator to prevent site name appending
    titleTemplate: "%s", // Only use the page title, no site name
  },

  // Open Graph Image Configuration
  ogImage: {
    enabled: true,
    defaults: {
      component: "Wedding",
      width: 1200,
      height: 630,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    "@nuxtjs/seo", // Must be first for proper SEO integration
    "shadcn-nuxt",
    "@nuxt/icon",
    "@nuxt/image",
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./app/components/ui"
     */
    componentDir: "./app/components/ui",
  },
});
