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
        <!-- Family Header - Now above the image -->
        <div class="mb-10 space-y-8">
          <div class="space-y-6">
            <p class="text-xl md:text-2xl font-serif text-foreground font-light mb-6 tracking-[0.2em] uppercase">
              Les Familles
            </p>

            <div class="flex items-start justify-center gap-8 md:gap-12 mb-8">
              <div class="text-center space-y-2">
                <div class="text-base md:text-lg font-serif text-foreground font-medium tracking-[0.15em] uppercase">
                  Dossou</div>
                <div class="text-base md:text-lg font-serif text-foreground font-medium tracking-[0.15em] uppercase">
                  Idohou</div>
              </div>

              <div class="flex items-center justify-center mt-2">
                <div class="text-3xl md:text-4xl text-gold-500 font-serif italic">&</div>
              </div>

              <div class="text-center space-y-2">
                <div class="text-base md:text-lg font-serif text-foreground font-medium tracking-[0.15em] uppercase">
                  Nkaye</div>
                <div class="text-base md:text-lg font-serif text-foreground font-medium tracking-[0.15em] uppercase">
                  Nzally</div>
              </div>
            </div>
          </div>

          <!-- Invitation Text -->
          <div class="relative">
            <div class="absolute inset-0 flex items-center justify-center opacity-10">
              <div class="w-64 h-px bg-gold-500"></div>
            </div>
            <p
              class="relative text-sm md:text-base font-serif text-foreground/80 font-light mb-8 tracking-[0.1em] uppercase bg-background px-6">
              Célèbrent l'union de leurs enfants
            </p>
          </div>
        </div>

        <!-- Smaller image positioned after family text -->
        <div class="mb-8 flex justify-center">
          <div class="relative">
            <img src="/photo_couple.jpeg" alt="Yannick et Louise"
              class="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain shadow-2xl elegant-animation" />
            <div class="absolute -bottom-2 -right-2 bg-gold-500 rounded-full p-2">
              <Icon name="lucide:heart" class="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        <!-- Names Section -->
        <div class="mb-10 space-y-6">
          <div class="relative">
            <h1 class="text-4xl md:text-6xl wedding-script text-foreground drop-shadow-lg font-normal tracking-wide"
              style="line-height: 1.2;">
              Louise
            </h1>
            <div class="absolute -top-2 -left-4 w-2 h-2 bg-gold-400 rounded-full opacity-60"></div>
            <div class="absolute -top-1 -right-6 w-1 h-1 bg-gold-300 rounded-full opacity-40"></div>
          </div>

          <div class="flex items-center justify-center gap-6 py-4">
            <div class="w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
            <div class="relative">
              <Icon name="lucide:heart" class="w-8 h-8 md:w-10 md:h-10 text-gold-500 fill-current drop-shadow-sm" />
              <div class="absolute inset-0 animate-pulse">
                <Icon name="lucide:heart" class="w-8 h-8 md:w-10 md:h-10 text-gold-300 fill-current opacity-50" />
              </div>
            </div>
            <div class="w-16 md:w-20 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent"></div>
          </div>

          <div class="relative">
            <h1 class="text-4xl md:text-6xl wedding-script text-foreground drop-shadow-lg font-normal tracking-wide"
              style="line-height: 1.2;">
              Yannick
            </h1>
            <div class="absolute -top-1 -right-4 w-2 h-2 bg-gold-400 rounded-full opacity-60"></div>
            <div class="absolute -top-3 -left-6 w-1 h-1 bg-gold-300 rounded-full opacity-40"></div>
          </div>
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
