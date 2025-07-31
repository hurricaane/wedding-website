<template>
  <section class="py-16 px-6 bg-background">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-16">
        <Icon
          name="lucide:clock"
          size="2em"
          class="w-16 h-16 text-gold-500 mx-auto mb-4"
        />
        <h2 class="text-3xl md:text-4xl font-serif text-foreground mb-4">
          Programme de la journée
        </h2>
        <p class="text-lg text-foreground/80">
          Découvrez le déroulement de notre journée de mariage
        </p>
      </div>

      <!-- Timeline Container -->
      <div class="relative">
        <!-- Vertical Line - Mobile: left positioned, Desktop: centered -->
        <div
          class="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-champagne-300 via-gold-400 to-champagne-300 h-full"
        ></div>

        <!-- Timeline Events -->
        <div class="space-y-12">
          <div v-for="(event, index) in events" :key="index" class="relative">
            <!-- Timeline Circle - Mobile: left positioned, Desktop: centered -->
            <div
              class="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10"
            >
              <div
                class="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-champagne-300 to-gold-400 rounded-full flex items-center justify-center border-4 border-background elegant-shadow"
              >
                <Icon
                  :name="event.icon"
                  size="1.2em"
                  class="w-6 h-6 md:w-8 md:h-8 text-white"
                />
              </div>
            </div>

            <!-- Event Card Container -->
            <div
              class="flex"
              :class="index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'"
            >
              <div class="w-full md:w-1/2 md:max-w-md">
                <!-- Mobile: Left margin for circle space, Desktop: Conditional padding -->
                <div
                  class="ml-20 md:ml-0"
                  :class="index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'"
                >
                  <!-- Timeline Connector Line -->
                  <div
                    class="absolute top-6 left-14 md:top-8 w-6 md:w-12 h-1 bg-gradient-to-r from-champagne-300 to-gold-400"
                    :class="
                      index % 2 === 0 ? 'md:left-auto md:right-0' : 'md:left-0'
                    "
                  ></div>

                  <Card
                    class="p-4 md:p-6 bg-card elegant-shadow hover:shadow-lg transition-all duration-300 rounded-2xl border border-border"
                  >
                    <div class="space-y-3">
                      <div class="flex items-center justify-between">
                        <span
                          class="text-xl md:text-2xl font-bold text-gold-600"
                        >
                          {{ event.time }}
                        </span>
                        <div class="w-2 h-2 bg-gold-500 rounded-full"></div>
                      </div>

                      <h3
                        class="text-lg md:text-xl font-semibold text-foreground"
                      >
                        {{ event.title }}
                      </h3>

                      <div class="flex items-center gap-2 text-foreground/70">
                        <Icon name="lucide:map-pin" class="w-4 h-4" />
                        <span class="text-sm">{{ event.location }}</span>
                      </div>

                      <p class="text-foreground/75 text-sm leading-relaxed">
                        {{ event.description }}
                      </p>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 text-center">
        <div
          class="bg-champagne-100 rounded-2xl p-6 border border-champagne-300"
        >
          <p class="text-foreground/80">
            <strong>Note :</strong> Les horaires peuvent légèrement varier. Nous
            vous tiendrons informés de tout changement le jour J.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Card } from "@/components/ui/card";

interface Event {
  time: string;
  title: string;
  location: string;
  description: string;
  icon: string;
}

const events: Event[] = [
  {
    time: "13h30",
    title: "Accueil des invités",
    location: "Église Protestante du Sénégal, Paroisse Dieuppeul",
    description: "Accueil et installation des invités",
    icon: "lucide:users",
  },
  {
    time: "14h00",
    title: "Cérémonie religieuse",
    location: "Église Protestante du Sénégal, Paroisse Dieuppeul",
    description: "Échange des vœux et bénédiction nuptiale",
    icon: "lucide:heart",
  },
  {
    time: "16h00",
    title: "Séance photos",
    location: "Lieu à déterminer",
    description: "Photos des familles et des mariés",
    icon: "lucide:camera",
  },
  {
    time: "18h30",
    title: "Cocktail de bienvenue",
    location: "Lieu à déterminer",
    description: "Apéritif et amuse-bouches",
    icon: "lucide:glass-water",
  },
  {
    time: "20h00",
    title: "Dîner",
    location: "Lieu à déterminer",
    description: "Repas de fête et célébration",
    icon: "lucide:utensils",
  },
  {
    time: "22h30",
    title: "Soirée dansante",
    location: "Lieu à déterminer",
    description: "Musique et danse jusqu'au bout de la nuit",
    icon: "lucide:music",
  },
];
</script>
