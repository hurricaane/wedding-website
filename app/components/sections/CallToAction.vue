<template>
  <section class="py-20 px-6">
    <div class="max-w-4xl mx-auto text-center">
      <!-- Header Section -->
      <div class="mb-12">
        <Icon
          name="lucide:heart"
          size="2em"
          class="w-16 h-16 text-gold-500 mx-auto mb-6"
        />
        <h2 class="text-4xl md:text-5xl font-serif text-foreground mb-6">
          Réservez cette date
        </h2>
        <p
          class="text-xl text-foreground/80 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Votre présence rendrait ce jour encore plus spécial. Rejoignez-nous le
          20 décembre 2025 à Dakar pour célébrer notre amour et commencer ce
          nouveau chapitre ensemble.
        </p>
      </div>

      <!-- Key Information Cards -->
      <div class="grid md:grid-cols-3 gap-6 mb-12">
        <div
          class="bg-card rounded-2xl p-6 border border-border elegant-shadow"
        >
          <Icon
            name="lucide:calendar"
            size="1.4em"
            class="w-8 h-8 text-gold-600 mx-auto mb-3"
          />
          <h3 class="font-semibold text-foreground mb-2">Date limite</h3>
          <p class="text-foreground/75">15 novembre 2025</p>
        </div>

        <div
          class="bg-card rounded-2xl p-6 border border-border elegant-shadow"
        >
          <Icon
            name="lucide:map-pin"
            size="1.4em"
            class="w-8 h-8 text-gold-600 mx-auto mb-3"
          />
          <h3 class="font-semibold text-foreground mb-2">Lieu</h3>
          <p class="text-foreground/75">Dakar, Sénégal</p>
        </div>

        <div
          class="bg-card rounded-2xl p-6 border border-border elegant-shadow"
        >
          <Icon
            name="lucide:users"
            size="1.4em"
            class="w-8 h-8 text-gold-600 mx-auto mb-3"
          />
          <h3 class="font-semibold text-foreground mb-2">Invités</h3>
          <p class="text-foreground/75">Famille & amis</p>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="space-y-6">
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            @click="navigateToRSVP"
            size="lg"
            class="bg-gradient-to-r from-champagne-300 to-gold-400 hover:from-champagne-400 hover:to-gold-500 text-white font-semibold text-lg px-10 py-4 h-auto rounded-2xl elegant-shadow hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <Icon name="lucide:heart" class="w-5 h-5 mr-2" />
            Confirmer ma présence
          </Button>
          
          <Button
            @click="navigateToQuestion"
            size="lg"
            class="bg-gradient-to-r from-champagne-300 to-gold-400 hover:from-champagne-400 hover:to-gold-500 text-white font-semibold text-lg px-10 py-4 h-auto rounded-2xl elegant-shadow hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <Icon name="lucide:message-circle" class="w-5 h-5 mr-2" />
            Poser une question
          </Button>
        </div>

        <p class="text-sm text-foreground/60">
          Des questions ? Contactez-nous à
          <a
            href="mailto:contact@dossou.online"
            class="text-gold-600 hover:text-gold-700 underline"
          >
            contact@dossou.online
          </a>
        </p>
      </div>

      <!-- Decorative Element -->
      <div class="mt-16">
        <div class="flex items-center justify-center space-x-4 text-gold-500">
          <div class="w-12 h-px bg-gold-500"></div>
          <Icon name="lucide:heart" class="w-6 h-6" />
          <div class="w-12 h-px bg-gold-500"></div>
        </div>
        <p class="text-lg font-serif text-foreground/70 mt-4">
          Avec tout notre amour, Yannick & Louise
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Button } from "~/components/ui/button";

const navigateToRSVP = () => {
  navigateTo("/rsvp");
};

const navigateToQuestion = () => {
  navigateTo("/question");
};
</script>

