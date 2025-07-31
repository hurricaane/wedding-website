<template>
  <section
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-ivory-100 to-champagne-200 relative overflow-hidden"
  >
    <!-- Décoration florale -->
    <div class="absolute top-10 left-10 opacity-20">
      <Icon
        name="lucide:heart"
        size="4em"
        class="w-20 h-20 text-gold-500 animate-pulse"
      />
    </div>
    <div class="absolute bottom-10 right-10 opacity-20">
      <Icon
        name="lucide:heart"
        size="4em"
        class="w-16 h-16 text-gold-500 animate-pulse"
      />
    </div>

    <div class="text-center px-6 max-w-4xl mx-auto elegant-animation">
      <div class="mb-8 space-y-2">
        <div class="mb-8 flex justify-center">
          <div class="relative">
            <img
              src="/photo_couple.jpeg"
              alt="Yannick et Louise"
              class="w-80 h-80 md:w-96 md:h-96 lg:w-112 lg:h-112 object-contain shadow-2xl elegant-animation"
            />
            <div
              class="absolute -bottom-2 -right-2 bg-gold-500 rounded-full p-3"
            >
              <Icon name="lucide:heart" class="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
        <h1
          class="text-5xl md:text-7xl font-serif text-foreground drop-shadow-sm mb-4"
        >
          Yannick & Louise
        </h1>
        <div class="flex items-center justify-center gap-4 mb-6">
          <div class="h-px bg-gold-500 w-16"></div>
          <Icon
            name="lucide:heart"
            size="1.5em"
            class="w-8 h-8 text-gold-600 fill-current"
          />
          <div class="h-px bg-gold-500 w-16"></div>
        </div>
        <p class="text-xl md:text-2xl text-foreground font-medium mb-2">
          Nous nous marions !
        </p>
        <p class="text-lg md:text-xl text-foreground/80 mb-8">
          20 décembre 2025 • Dakar, Sénégal
        </p>
      </div>

      <div class="space-y-6">
        <p
          class="text-lg text-foreground/90 max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Venez partager avec nous ce moment magique où deux cœurs ne feront
          plus qu'un.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            @click="navigateToRSVP"
            size="lg"
            class="bg-gradient-to-r from-champagne-300 to-gold-400 hover:from-champagne-400 hover:to-gold-500 hover:scale-105 transition-all duration-300 elegant-shadow text-lg px-8 py-4 h-auto rounded-2xl text-white font-semibold border-0 cursor-pointer"
          >
            <Icon name="lucide:heart" class="w-5 h-5 mr-2" />
            Répondre à l'invitation
          </Button>

          <Button
            @click="navigateToQuestion"
            size="lg"
            class="bg-gradient-to-r from-champagne-300 to-gold-400 hover:from-champagne-400 hover:to-gold-500 hover:scale-105 transition-all duration-300 elegant-shadow text-lg px-8 py-4 h-auto rounded-2xl text-white font-semibold border-0 cursor-pointer"
          >
            <Icon name="lucide:message-circle" class="w-5 h-5 mr-2" />
            Poser une question
          </Button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Button } from "@/components/ui/button";

// Navigation functions using Nuxt's navigateTo
const navigateToRSVP = () => {
  navigateTo("/rsvp");
};

const navigateToQuestion = () => {
  navigateTo("/question");
};
</script>
