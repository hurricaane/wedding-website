
<template>
  <div class="min-h-screen">
    <SectionsHeroSection />
    <SectionsWelcomeMessage />
    <SectionsFAQ />
    <SectionsAgenda />
    <SectionsMapEmbed />
    <SectionsCallToAction />
  </div>
</template>

<script setup lang="ts">
// Enhanced SEO for Wedding Homepage
useSeoMeta({
  title: "Yannick & Louise - Mariage",
  description: "Rejoignez-nous le 20 décembre 2025 à Dakar, Sénégal pour célébrer notre union. Découvrez tous les détails de notre mariage et confirmez votre présence en ligne.",
  ogTitle: "Yannick & Louise - Mariage 20 décembre 2025",
  ogDescription: "Célébrez avec nous notre mariage le 20 décembre 2025 à Dakar, Sénégal. Site officiel avec RSVP en ligne.",
  ogImage: "/wedding-og-image.jpg",
  ogImageAlt: "Yannick et Louise - Mariage 20 décembre 2025 à Dakar",
  twitterTitle: "Yannick & Louise - Mariage 20 décembre 2025",
  twitterDescription: "Rejoignez notre célébration le 20 décembre 2025 à Dakar",
  twitterCard: "summary_large_image",
})

// Schema.org structured data for wedding event
useSchemaOrg([
  {
    "@type": "Event",
    "name": "Mariage de Yannick & Louise",
    "description": "Célébration du mariage de Yannick et Louise à Dakar, Sénégal",
    "startDate": "2025-12-20T14:00:00+00:00",
    "endDate": "2025-12-21T02:00:00+00:00",
    "eventStatus": "EventScheduled",
    "eventAttendanceMode": "OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Dakar, Sénégal",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dakar",
        "addressCountry": "SN"
      }
    },
    "organizer": [
      {
        "@type": "Person",
        "name": "Yannick"
      },
      {
        "@type": "Person", 
        "name": "Louise"
      }
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "XOF",
      "availability": "InStock",
      "url": useRuntimeConfig().public.siteUrl + "/rsvp"
    }
  }
])

// Breadcrumb structure
useBreadcrumbItems([
  {
    title: "Accueil",
    to: "/"
  }
])
</script>
