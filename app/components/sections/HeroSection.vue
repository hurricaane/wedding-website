<template>
  <section
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-ivory-100 to-champagne-200 relative overflow-hidden">
    <!-- Décoration florale -->
    <div class="absolute top-10 left-10 opacity-20">
      <Icon name="lucide:heart" size="4em" class="w-20 h-20 text-gold-500 animate-pulse" />
    </div>
    <div class="absolute bottom-10 right-10 opacity-20">
      <Icon name="lucide:heart" size="4em" class="w-16 h-16 text-gold-500 animate-pulse" />
    </div>

    <div class="text-center px-6 max-w-4xl mx-auto elegant-animation">
      <div class="mb-8 space-y-2">
        <!-- Large image positioned at top for visual impact -->
        <div class="mb-6 flex justify-center">
          <div class="relative">
            <img src="/photo_couple.jpeg" alt="Louise et Yannick"
              class="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain shadow-2xl elegant-animation" />
            <div class="absolute -bottom-2 -right-2 bg-gold-500 rounded-full p-3">
              <Icon name="lucide:heart" class="w-6 h-6 text-white" />
            </div>
          </div>
        </div>

        <!-- Elegant family introduction -->
        <div class="mb-6 space-y-4">
          <p class="text-xl md:text-2xl font-serif text-foreground font-light tracking-[0.2em] uppercase">
            Les Familles
          </p>

          <div class="flex items-start justify-center gap-8 md:gap-12 mb-4">
            <div class="text-center space-y-2">
              <div class="text-base md:text-lg font-serif text-foreground font-medium tracking-[0.15em] uppercase">
                Nkaye</div>
              <div class="text-base md:text-lg font-serif text-foreground font-medium tracking-[0.15em] uppercase">
                Nzally</div>
            </div>

            <div class="flex items-center justify-center mt-2">
              <div class="text-3xl md:text-4xl text-gold-500 font-serif italic">&</div>
            </div>

            <div class="text-center space-y-2">
              <div class="text-base md:text-lg font-serif text-foreground font-medium tracking-[0.15em] uppercase">
                Dossou</div>
              <div class="text-base md:text-lg font-serif text-foreground font-medium tracking-[0.15em] uppercase">
                Idohou</div>
            </div>
          </div>

          <div class="relative">
            <div class="absolute inset-0 flex items-center justify-center opacity-10">
              <div class="w-64 h-px bg-gold-500"></div>
            </div>
            <p class="text-base md:text-lg font-serif text-foreground/80 font-light tracking-[0.1em]">
              Célèbrent l'union de leurs enfants
            </p>
          </div>
        </div>
        <div class="flex items-center justify-center gap-4 mb-6">
          <div class="h-px bg-gold-500 w-16"></div>
          <Icon name="lucide:heart" size="1.5em" class="w-8 h-8 text-gold-600 fill-current" />
          <div class="h-px bg-gold-500 w-16"></div>
        </div>

        <!-- Names Section with elegant combined presentation -->
        <h1 class="text-5xl md:text-7xl font-serif text-foreground drop-shadow-sm mb-4">
          Louise & Yannick
        </h1>
        <div class="flex items-center justify-center gap-4 mb-6">
          <div class="h-px bg-gold-500 w-16"></div>
          <Icon name="lucide:heart" size="1.5em" class="w-8 h-8 text-gold-600 fill-current" />
          <div class="h-px bg-gold-500 w-16"></div>
        </div>

        <p class="text-lg md:text-xl text-foreground/80 mb-8">
          20 décembre 2025 • Dakar, Sénégal
        </p>
      </div>

      <div class="space-y-6">
        <p class="text-lg text-foreground/90 max-w-2xl mx-auto leading-relaxed font-medium">
          Venez partager avec nous ce moment magique où deux cœurs ne feront
          plus qu'un.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button @click="navigateToRSVP" size="lg"
            class="bg-gradient-to-r from-champagne-300 to-gold-400 hover:from-champagne-400 hover:to-gold-500 hover:scale-105 transition-all duration-300 elegant-shadow text-lg px-8 py-4 h-auto rounded-2xl text-white font-semibold border-0 cursor-pointer">
            <Icon name="lucide:heart" class="w-5 h-5 mr-2" />
            Répondre à l'invitation
          </Button>

          <Button @click="navigateToQuestion" size="lg"
            class="bg-gradient-to-r from-champagne-300 to-gold-400 hover:from-champagne-400 hover:to-gold-500 hover:scale-105 transition-all duration-300 elegant-shadow text-lg px-8 py-4 h-auto rounded-2xl text-white font-semibold border-0 cursor-pointer">
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
