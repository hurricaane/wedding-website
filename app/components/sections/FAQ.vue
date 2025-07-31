<template>
  <section class="py-16 px-6 bg-muted/30">
    <div class="max-w-4xl mx-auto">
      <div class="text-center mb-12">
        <Icon
          name="lucide:help-circle"
          size="2em"
          class="w-16 h-16 text-gold-500 mx-auto mb-4"
        />
        <h2 class="text-3xl md:text-4xl font-serif text-foreground mb-4">
          Questions fréquentes
        </h2>
        <p class="text-lg text-foreground/80">
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
          <AccordionTrigger
            class="px-6 py-4 text-left hover:bg-champagne-100 transition-colors cursor-pointer"
          >
            <span class="font-semibold text-lg text-foreground">{{
              faq.question
            }}</span>
          </AccordionTrigger>
          <AccordionContent class="px-6 pb-4">
            <p
              class="text-base text-foreground/75 leading-relaxed"
              v-html="faq.answer"
            ></p>
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
    question: "Quel est le thème du mariage ? Y a-t-il un dress code ?",
    answer:
      "Le thème de notre mariage est chic, élégant et romantique, avec des tons ivoire, champagne, vert émeraude et vert sauge. Pour ne pas faire doublon avec les mariés et le cortège, nous vous invitons à éviter le blanc, l’ivoire, le champagne et les verts similaires. Une tenue de ville habillée est recommandée. Les couleurs sobres ou poudrées comme le bleu marine, le gris, le rose doux, ou des tons chauds comme le terracotta clair sont tout à fait appropriées.",
  },
  {
    question: "Où se déroulera la cérémonie religieuse ?",
    answer:
      "La cérémonie aura lieu à l'Église Protestante du Sénégal, Paroisse de Dieuppeul, à Dakar. Elle débutera à 14h00 — merci d’arriver avec 30 minutes d’avance.",
  },
  {
    question: "Où se déroulera la réception ?",
    answer:
      "Le lieu de réception est en cours de finalisation. Nous vous tiendrons informés dès qu’il sera confirmé, et toutes les informations pratiques seront mises à jour sur ce site.",
  },
  {
    question: "Comment se rendre au lieu de réception ?",
    answer:
      "Nous vous recommandons de vous organiser à l'avance, notamment via la location de voiture ou les services de taxis et VTC (via l'application <a href='https://yango.com/fr_sn/city/dakar/' target='_blank' rel='noopener noreferrer' class='text-gold-600 hover:text-gold-700 underline'>Yango</a>), disponible à Dakar.",
  },
  {
    question: "Y a-t-il des hébergements recommandés ?",
    answer:
      "Plusieurs hôtels sont disponibles à proximité. Si vous souhaitez un accompagnement pour votre réservation, n’hésitez pas à nous contacter.",
  },
  {
    question: "Puis-je venir avec des enfants ?",
    answer:
      "Vos petits anges sont les bienvenus, mais aucune garde n’est prévue. Merci de vous organiser en conséquence.",
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
      "Merci de confirmer votre présence avant le 1er octobre 2025 via notre formulaire en ligne. Cela nous aidera à organiser au mieux cette journée avec vous.",
  },
  {
    question: "Y aura-t-il un plan de table ?",
    answer:
      "Oui, un plan de table personnalisé sera affiché à l’entrée de la salle. Nous avons pris soin de favoriser des groupes harmonieux pour que chacun passe un moment agréable.",
  },
  {
    question: "Puis-je prendre des photos pendant la cérémonie ?",
    answer:
      "Oui, vous êtes libres de prendre des photos pendant la cérémonie si vous le souhaitez. N'hésitez pas à partager vos plus beaux clichés avec nous après le mariage.",
  },
  {
    question: "Puis-je offrir un cadeau ?",
    answer:
      "Votre présence à nos côtés est déjà un merveilleux cadeau. Pour ceux qui le souhaitent, une liste de mariage et une cagnotte seront mises à disposition. Une urne sera également disponible le jour du mariage.",
  },
];
</script>
