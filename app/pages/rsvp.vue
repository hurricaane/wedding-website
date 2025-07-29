<template>
  <div class="min-h-screen bg-gradient-to-br from-ivory-100 to-champagne-200 py-12 px-6">
    <div class="max-w-2xl mx-auto">
      <div class="text-center mb-8">
        <button
          @click="navigateHome"
          class="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-champagne-300 hover:bg-champagne-100 transition-colors"
        >
          <Icon name="lucide:arrow-left" class="w-4 h-4" />
          Retour à l'accueil
        </button>
        
        <Icon name="lucide:heart" class="w-12 h-12 text-gold-500 mx-auto mb-4" />
        <h1 class="text-3xl md:text-4xl font-serif text-primary mb-4">
          Réponse à l'invitation
        </h1>
        <p class="text-lg text-muted-foreground">
          Merci de confirmer votre présence avant le 15 novembre 2025
        </p>
      </div>

      <div class="bg-card p-8 rounded-2xl border border-border elegant-shadow">
        <div class="text-center text-muted-foreground">
          RSVP Form component coming soon...
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Page metadata
useHead({
  title: 'RSVP - Yannick & Louise',
  meta: [
    {
      name: 'description',
      content: 'Confirmez votre présence au mariage de Yannick et Louise le 20 décembre 2025'
    }
  ]
})

const navigateHome = () => {
  navigateTo('/')
}
</script>