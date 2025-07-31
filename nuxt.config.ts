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
          rel: "canonical",
          href: process.env.NUXT_PUBLIC_SITE_URL || "https://yannick-louise.com",
        },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "format-detection", content: "telephone=no" },
        { name: "theme-color", content: "#d4af37" },
        { name: "msapplication-TileColor", content: "#d4af37" },
        { name: "author", content: "Yannick & Louise" },
        { name: "robots", content: "index, follow" },
        { name: "googlebot", content: "index, follow" },
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

  // SEO Configuration
  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL || "https://yannick-louise.com",
    name: "Yannick & Louise - Mariage",
    description: "Rejoignez-nous le 20 décembre 2025 à Dakar, Sénégal pour célébrer notre union. Site officiel du mariage de Yannick et Louise.",
    defaultLocale: "fr",
  },

  // Sitemap Configuration
  sitemap: {
    hostname: process.env.NUXT_PUBLIC_SITE_URL || "https://yannick-louise.com",
    gzip: true,
    routes: [
      "/",
      "/rsvp",
      "/question",
    ],
  },

  // Robots Configuration
  robots: {
    UserAgent: "*",
    Allow: "/",
    Sitemap: (process.env.NUXT_PUBLIC_SITE_URL || "https://yannick-louise.com") + "/sitemap.xml",
  },

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["shadcn-nuxt", "@nuxt/icon", "@nuxtjs/sitemap", "@nuxtjs/robots"],
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
