<template>
  <section class="py-16 px-6 bg-muted/30">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <Icon name="lucide:help-circle" size="2em" class="w-16 h-16 text-gold-500 mx-auto mb-4" />
        <h2 class="text-3xl md:text-4xl font-serif text-foreground mb-4">
          Questions fréquentes
        </h2>
        <p class="text-lg text-foreground/80">
          Vous trouverez ici les réponses aux questions les plus courantes
        </p>
      </div>

      <Accordion type="single" collapsible class="space-y-4">
        <AccordionItem v-for="(faq, index) in faqs" :key="index" :value="`item-${index}`"
          class="bg-card rounded-2xl border border-border elegant-shadow overflow-hidden">
          <AccordionTrigger class="px-6 py-4 text-left hover:bg-champagne-100 transition-colors cursor-pointer">
            <span class="font-semibold text-lg text-foreground">{{
              faq.question
            }}</span>
          </AccordionTrigger>
          <AccordionContent class="px-6 pb-4">
            <p class="text-base text-foreground/75 leading-relaxed" v-html="faq.answer"></p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "Quel est le thème du mariage ?",
    answer:
      "Le mariage sera célébré dans un esprit chic et élégant. Nous vous invitons à privilégier des tenues de ville habillées dans des tons marron/bronze ou vert sauge, afin d’harmoniser l’ensemble.",
  },
  {
    question: "Où se déroulera la cérémonie religieuse ?",
    answer:
      "La cérémonie aura lieu à l'Église Protestante du Sénégal, Paroisse de Dieuppeul, à Dakar. Elle débutera à 15h30 — merci d’arriver avec 30 minutes d’avance.",
  },
  {
    question: "Où se déroulera la réception ?",
    answer:
      "La réception aura lieu au <a href='https://www.kingfahdpalacehotels.com/' target='_blank' rel='noopener noreferrer' class='text-gold-600 hover:text-gold-700 underline'>King Fahd Palace</a>, situé dans le quartier des Almadies à Dakar. Elle débutera à 19h30.",
  },
  {
    question: "Comment se rendre au lieu de réception ?",
    answer:
      "Nous vous recommandons de vous organiser à l'avance, notamment via la location de voiture ou les services de taxis et VTC (via l'application <a href='https://yango.com/fr_sn/city/dakar/' target='_blank' rel='noopener noreferrer' class='text-gold-600 hover:text-gold-700 underline'>Yango</a>), disponible à Dakar.",
  },
  {
    question: "Y a-t-il des hébergements recommandés ?",
    answer:
      "Plusieurs hôtels sont disponibles à proximité. Vous pouvez également opter pour un logement Airbnb (ou Booking). Si vous souhaitez un accompagnement pour votre réservation, n’hésitez pas à nous contacter.",
  },
  {
    question:
      "Y aura-t-il des options pour les régimes alimentaires spécifiques ?",
    answer:
      "Si vous avez des restrictions ou préférences alimentaires (allergies, régimes spécifiques, etc.), merci de nous en informer au moment de confirmer votre présence via le formulaire. Cela nous permettra de faire le nécessaire pour que chacun profite pleinement du repas.",
  },
  {
    question: "Comment confirmer ma présence ?",
    answer:
      "Merci de confirmer votre présence avant le 15 octobre 2025 via notre formulaire en ligne. Cela nous aidera à organiser au mieux cette journée avec vous.",
  },
  {
    question: "Y aura-t-il un plan de table ?",
    answer:
      "Oui, un plan de table personnalisé sera affiché à l’entrée de la salle. Nous avons pris soin de favoriser des groupes harmonieux pour que chacun passe un moment agréable.",
  },
  {
    question: "Puis-je prendre des photos pendant la cérémonie ?",
    answer:
      "Oui, vous êtes libres de prendre des photos pendant la cérémonie si vous le souhaitez. Un QR code sera mis à disposition pour vous permettre de partager facilement vos plus beaux clichés avec nous pendant et après le mariage.",
  },
  {
    question: "Puis-je offrir un cadeau ?",
    answer:
      "Votre présence à nos côtés est déjà un merveilleux cadeau. Pour ceux qui le souhaitent, une <a href='https://www.onparticipe.fr/c/ix6aYHsp' target='_blank' rel='noopener noreferrer' class='text-gold-600 hover:text-gold-700 underline'>cagnotte en ligne</a> a été mise à disposition.",
  },
];
</script>
