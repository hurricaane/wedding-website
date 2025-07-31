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
// Page metadata
useHead({
  title: "Yannick & Louise - Mariage 20 décembre 2025",
  meta: [
    {
      name: "description",
      content:
        "Nous nous marions ! Rejoignez-nous le 20 décembre 2025 à Dakar, Sénégal pour célébrer notre union.",
    },
    {
      property: "og:title",
      content: "Yannick & Louise - Mariage 20 décembre 2025",
    },
    {
      property: "og:description",
      content:
        "Nous nous marions ! Rejoignez-nous le 20 décembre 2025 à Dakar, Sénégal pour célébrer notre union.",
    },
    {
      property: "og:type",
      content: "website",
    },
  ],
});
</script>
