<template>
  <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-ivory-100 to-champagne-200 relative overflow-hidden">
    <!-- Décoration florale -->
    <div class="absolute top-10 left-10 opacity-20">
      <Icon name="lucide:heart" class="w-16 h-16 text-gold-500 animate-pulse" />
    </div>
    <div class="absolute bottom-10 right-10 opacity-20">
      <Icon name="lucide:heart" class="w-12 h-12 text-gold-500 animate-pulse" />
    </div>
    
    <div class="text-center px-6 max-w-4xl mx-auto elegant-animation">
      <div class="mb-8 space-y-2">
        <h1 class="text-5xl md:text-7xl font-serif text-primary mb-4">
          Yannick & Louise
        </h1>
        <div class="flex items-center justify-center gap-4 mb-6">
          <div class="h-px bg-gold-500 w-16"></div>
          <Icon name="lucide:heart" class="w-6 h-6 text-gold-500" />
          <div class="h-px bg-gold-500 w-16"></div>
        </div>
        <p class="text-xl md:text-2xl text-muted-foreground mb-2">
          Nous nous marions !
        </p>
        <p class="text-lg md:text-xl text-muted-foreground mb-8">
          20 décembre 2025 • Dakar, Sénégal
        </p>
      </div>

      <div class="space-y-4">
        <p class="text-lg text-foreground max-w-2xl mx-auto leading-relaxed">
          Nous avons l'immense joie de vous inviter à célébrer notre union. 
          Votre présence rendrait ce jour encore plus spécial pour nous.
        </p>
        
        <button 
          @click="navigateToRSVP"
          class="inline-flex items-center gap-2 bg-gradient-to-r from-champagne-300 to-gold-400 hover:from-champagne-400 hover:to-gold-500 hover:scale-105 transition-all duration-300 elegant-shadow text-lg px-8 py-6 rounded-2xl text-primary font-medium"
        >
          <Icon name="lucide:heart" class="w-5 h-5" />
          Répondre à l'invitation
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Navigation function using Nuxt's navigateTo
const navigateToRSVP = () => {
  navigateTo('/rsvp')
}
</script>