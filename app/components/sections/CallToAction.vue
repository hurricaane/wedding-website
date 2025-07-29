<template>
  <section class="py-16 px-6 bg-gradient-to-r from-champagne-100 to-gold-100">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-serif text-primary mb-6">
        Nous avons hâte de vous voir
      </h2>
      <p class="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
        N'oubliez pas de confirmer votre présence avant le 15 novembre 2025
      </p>
      <button 
        @click="navigateToRSVP"
        class="inline-flex items-center gap-2 bg-gradient-to-r from-champagne-300 to-gold-400 hover:from-champagne-400 hover:to-gold-500 hover:scale-105 transition-all duration-300 elegant-shadow text-lg px-8 py-6 rounded-2xl text-primary font-medium"
      >
        <Icon name="lucide:heart" class="w-5 h-5" />
        Confirmer ma présence
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
const navigateToRSVP = () => {
  navigateTo('/rsvp')
}
</script>