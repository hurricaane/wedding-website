<template>
  <section class="py-16 px-6 bg-muted/30">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <Icon name="lucide:help-circle" class="w-12 h-12 text-gold-500 mx-auto mb-4" />
        <h2 class="text-3xl md:text-4xl font-serif text-primary mb-4">
          Questions fréquentes
        </h2>
        <p class="text-lg text-muted-foreground">
          Vous trouverez ici les réponses aux questions les plus courantes
        </p>
      </div>

      <Accordion type="single" collapsible class="space-y-4">
        <AccordionItem 
          v-for="(faq, index) in faqs" 
          :key="index" 
          :value="`item-${index}`"
          class="bg-card rounded-2xl border border-border elegant-shadow overflow-hidden"
        >
          <AccordionTrigger class="px-6 py-4 text-left hover:bg-champagne-100 transition-colors">
            <span class="font-medium text-primary">{{ faq.question }}</span>
          </AccordionTrigger>
          <AccordionContent class="px-6 pb-4">
            <p class="text-muted-foreground leading-relaxed">
              {{ faq.answer }}
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

interface FAQ {
  question: string
  answer: string
}

const faqs: FAQ[] = [
  {
    question: "Quel est le thème du mariage ?",
    answer: "Nous avons opté pour un thème élégant et romantique aux couleurs ivoire et champagne, dans un style à la fois moderne et intemporel. La tenue de ville est recommandée."
  },
  {
    question: "Où aura lieu la cérémonie religieuse ?",
    answer: "La cérémonie religieuse se déroulera à la Cathédrale du Souvenir Africain de Dakar, située au Plateau. Elle commencera à 16h00 précises."
  },
  {
    question: "Où se déroulera la réception ?",
    answer: "La réception aura lieu au Radisson Blu Hotel Sea Plaza de Dakar, avec vue sur l'océan Atlantique. Un cocktail sera servi dès 18h30, suivi du dîner à 20h00."
  },
  {
    question: "Y a-t-il des recommandations vestimentaires ?",
    answer: "Nous recommandons une tenue de ville élégante. Les couleurs claires et pastels sont les bienvenues, en évitant le blanc réservé à la mariée."
  },
  {
    question: "Comment se rendre au lieu de réception ?",
    answer: "Le Radisson Blu Sea Plaza est facilement accessible en taxi ou VTC depuis le centre de Dakar. Un service de navette sera également organisé depuis la cathédrale."
  },
  {
    question: "Y a-t-il des hébergements recommandés ?",
    answer: "Nous recommandons le Radisson Blu Sea Plaza (lieu de réception) ou l'Hôtel Terrou-Bi pour leur proximité. Des tarifs préférentiels ont été négociés pour nos invités."
  }
]
</script>