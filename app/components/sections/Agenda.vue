<template>
  <section class="py-16 px-6 bg-background">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
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

      <div class="space-y-6">
        <Card
          v-for="(event, index) in events"
          :key="index"
          class="p-6 bg-card elegant-shadow hover:shadow-lg transition-all duration-300 rounded-2xl border border-border"
        >
          <div class="flex items-start gap-4">
            <div
              class="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-champagne-300 to-gold-400 rounded-full flex items-center justify-center"
            >
              <Icon
                :name="event.icon"
                size="2em"
                class="w-10 h-10 text-foreground/80"
              />
            </div>

            <div class="flex-1">
              <div
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2"
              >
                <h3 class="text-xl font-semibold text-foreground">
                  {{ event.title }}
                </h3>
                <span class="text-lg font-medium text-gold-600">
                  {{ event.time }}
                </span>
              </div>

              <div class="flex items-center gap-2 text-foreground/70 mb-2">
                <Icon name="lucide:map-pin" class="w-5 h-5" />
                <span>{{ event.location }}</span>
              </div>

              <p class="text-foreground/75">
                {{ event.description }}
              </p>
            </div>
          </div>
        </Card>
      </div>

      <div class="mt-12 text-center">
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
    time: "15h30",
    title: "Accueil des invités",
    location: "Cathédrale du Souvenir Africain",
    description: "Accueil et installation des invités",
    icon: "lucide:users",
  },
  {
    time: "16h00",
    title: "Cérémonie religieuse",
    location: "Cathédrale du Souvenir Africain",
    description: "Échange des vœux et bénédiction",
    icon: "lucide:heart",
  },
  {
    time: "17h00",
    title: "Séance photos",
    location: "Parvis de la cathédrale",
    description: "Photos de famille et des mariés",
    icon: "lucide:camera",
  },
  {
    time: "18h30",
    title: "Cocktail de bienvenue",
    location: "Radisson Blu Sea Plaza",
    description: "Apéritif et amuse-bouches avec vue sur l'océan",
    icon: "lucide:glass-water",
  },
  {
    time: "20h00",
    title: "Dîner de gala",
    location: "Radisson Blu Sea Plaza",
    description: "Repas de fête et célébration",
    icon: "lucide:utensils",
  },
  {
    time: "22h30",
    title: "Soirée dansante",
    location: "Radisson Blu Sea Plaza",
    description: "Musique et danse jusqu'au bout de la nuit",
    icon: "lucide:music",
  },
];
</script>

