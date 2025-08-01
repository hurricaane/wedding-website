
<template>
  <div
    class="min-h-screen bg-gradient-to-br from-ivory-100 to-champagne-200 py-12 px-6"
  >
    <div class="max-w-2xl mx-auto">
      <div class="text-center mb-8">
        <Button
          variant="outline"
          @click="navigateHome"
          class="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-champagne-300 hover:bg-champagne-100 transition-colors cursor-pointer"
        >
          <Icon name="lucide:arrow-left" class="w-4 h-4" />
          Retour à l'accueil
        </Button>

        <Icon
          name="lucide:heart"
          class="w-12 h-12 text-gold-500 mx-auto mb-4"
        />
        <h1 class="text-3xl md:text-4xl font-serif text-foreground mb-4">
          Réponse à l'invitation
        </h1>
        <p class="text-lg text-foreground/80">
          Merci de confirmer votre présence avant le 1er octobre 2025
        </p>
      </div>

      <Card class="p-8 bg-card elegant-shadow rounded-2xl border border-border">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Informations personnelles -->
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <Label for="firstName" class="text-foreground font-medium">
                Prénom *
              </Label>
              <Input
                id="firstName"
                v-model="formData.firstName"
                class="mt-2 rounded-xl border-input focus:border-gold-500"
                placeholder="Votre prénom"
                required
              />
            </div>
            <div>
              <Label for="lastName" class="text-foreground font-medium">
                Nom *
              </Label>
              <Input
                id="lastName"
                v-model="formData.lastName"
                class="mt-2 rounded-xl border-input focus:border-gold-500"
                placeholder="Votre nom"
                required
              />
            </div>
          </div>

          <div>
            <Label for="email" class="text-foreground font-medium">
              Email *
            </Label>
            <Input
              id="email"
              v-model="formData.email"
              type="email"
              class="mt-2 rounded-xl border-input focus:border-gold-500"
              placeholder="votre.email@exemple.com"
              required
            />
          </div>

          <!-- Présence -->
          <div>
            <Label class="text-foreground font-medium mb-4 block">
              Confirmez-vous votre présence ? *
            </Label>
            <RadioGroup
              v-model="formData.attendance"
              class="grid grid-cols-1 md:grid-cols-2 gap-4"
              required
            >
              <div
                class="flex items-center space-x-3 bg-champagne-100/50 p-4 rounded-xl border border-champagne-300 hover:bg-champagne-100 transition-colors"
              >
                <RadioGroupItem
                  value="yes"
                  id="yes"
                  class="border-gold-500 text-gold-500"
                />
                <Label
                  for="yes"
                  class="text-foreground font-medium cursor-pointer flex-1"
                >
                  Oui, je serai présent(e)
                </Label>
              </div>
              <div
                class="flex items-center space-x-3 bg-muted/30 p-4 rounded-xl border border-border hover:bg-muted/50 transition-colors"
              >
                <RadioGroupItem value="no" id="no" />
                <Label
                  for="no"
                  class="text-foreground font-medium cursor-pointer flex-1"
                >
                  Non, je ne pourrai pas venir
                </Label>
              </div>
            </RadioGroup>
          </div>

          <!-- Restrictions alimentaires (si présent) -->
          <Transition
            enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 transform -translate-y-4"
            enter-to-class="opacity-100 transform translate-y-0"
            leave-active-class="transition-all duration-200 ease-in"
            leave-from-class="opacity-100 transform translate-y-0"
            leave-to-class="opacity-0 transform -translate-y-4"
          >
            <div v-if="formData.attendance === 'yes'">
              <Label
                for="dietaryRestrictions"
                class="text-foreground font-medium"
              >
                Allergies ou régimes alimentaires particuliers
              </Label>
              <Input
                id="dietaryRestrictions"
                v-model="formData.dietaryRestrictions"
                class="mt-2 rounded-xl border-input focus:border-gold-500"
                placeholder="Végétarien, sans gluten, allergies..."
              />
            </div>
          </Transition>

          <!-- Message -->
          <div>
            <Label for="message" class="text-foreground font-medium">
              Message pour les mariés (optionnel)
            </Label>
            <Textarea
              id="message"
              v-model="formData.message"
              class="mt-2 rounded-xl border-input focus:border-gold-500 min-h-[100px]"
              placeholder="Vos félicitations, souhaits ou questions..."
            />
          </div>

          <!-- Submit Button -->
          <Button
            type="submit"
            :disabled="isLoading || !isFormValid"
            :class="[
              'w-full bg-gradient-to-r from-champagne-300 to-gold-400 hover:from-champagne-400 hover:to-gold-500 text-white font-semibold text-lg py-6 h-auto rounded-2xl elegant-shadow hover:scale-105 transition-all duration-300',
              isLoading || !isFormValid ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
            ]"
          >
            <Icon v-if="!isLoading" name="lucide:send" class="w-5 h-5 mr-2" />
            {{ isLoading ? "Envoi en cours..." : "Envoyer ma réponse" }}
          </Button>
        </form>
      </Card>
    </div>

    <!-- Alert Dialog -->
    <AlertDialog :open="showAlert" @update:open="showAlert = $event">
      <AlertDialogContent class="max-w-md mx-auto bg-card border border-border rounded-2xl elegant-shadow">
        <AlertDialogHeader>
          <AlertDialogTitle class="text-xl font-serif text-foreground text-center">
            {{ alertData.title }}
          </AlertDialogTitle>
          <AlertDialogDescription class="text-foreground/80 text-center leading-relaxed mt-4">
            {{ alertData.description }}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter class="flex justify-center mt-6">
          <AlertDialogAction
            @click="handleAlertClose"
            class="bg-gradient-to-r from-champagne-300 to-gold-400 hover:from-champagne-400 hover:to-gold-500 text-white font-semibold px-8 py-3 rounded-xl elegant-shadow hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            {{ alertData.isSuccess ? "Parfait !" : "Compris" }}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </div>
</template>

<script setup lang="ts">
// Enhanced SEO for RSVP Page
useSeoMeta({
  title: "RSVP - Confirmez votre présence | Yannick & Louise",
  description: "Confirmez votre présence au mariage de Yannick et Louise le 20 décembre 2025 à Dakar. Formulaire RSVP en ligne simple et rapide.",
  ogTitle: "RSVP - Mariage Yannick & Louise",
  ogDescription: "Confirmez votre présence à notre mariage le 20 décembre 2025 à Dakar, Sénégal",
  ogImage: "/wedding-rsvp-og.jpg",
  ogImageAlt: "Formulaire RSVP pour le mariage de Yannick et Louise",
  twitterTitle: "RSVP - Mariage Yannick & Louise",
  twitterDescription: "Confirmez votre présence à notre célébration",
  robots: "index, follow"
})

// Breadcrumb structure
useBreadcrumbItems([
  {
    title: "Accueil",
    to: "/"
  },
  {
    title: "RSVP",
    to: "/rsvp"
  }
])

// Schema.org structured data for RSVP page
useSchemaOrg([
  {
    "@type": "WebPage",
    "name": "RSVP - Mariage Yannick & Louise",
    "description": "Formulaire de confirmation de présence pour le mariage de Yannick et Louise",
    "url": useRuntimeConfig().public.siteUrl + "/rsvp",
    "mainEntity": {
      "@type": "Event",
      "name": "Mariage de Yannick & Louise", 
      "startDate": "2025-12-20T14:00:00+00:00"
    }
  }
])

// Imports
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Card } from "~/components/ui/card";
import { Textarea } from "~/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog";

// Form state
const formData = reactive({
  firstName: "",
  lastName: "",
  email: "",
  attendance: "",
  dietaryRestrictions: "",
  message: "",
});

const isLoading = ref(false);
const showAlert = ref(false);
const alertData = ref({
  title: "",
  description: "",
  isSuccess: false,
});

// Form validation
const isFormValid = computed(() => {
  if (
    !formData.firstName ||
    !formData.lastName ||
    !formData.email ||
    !formData.attendance
  ) {
    return false;
  }
  return true;
});

// Navigation
const navigateHome = () => {
  navigateTo("/");
};

// Form submission
const handleSubmit = async () => {
  if (!isFormValid.value) {
    alertData.value = {
      title: "Champs manquants",
      description: "Veuillez remplir tous les champs obligatoires.",
      isSuccess: false,
    };
    showAlert.value = true;
    return;
  }

  isLoading.value = true;

  try {
    const response = await $fetch("/api/rsvp", {
      method: "POST",
      body: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        attendance: formData.attendance,
        dietaryRestrictions: formData.dietaryRestrictions,
        message: formData.message,
      },
    });

    if (response.success) {
      console.log("RSVP soumis avec succès:", response);
      
      // Set different messages based on attendance
      if (formData.attendance === "yes") {
        alertData.value = {
          title: "🎉 Formidable !",
          description: "Merci d'avoir confirmé votre présence ! Nous avons hâte de célébrer avec vous ce moment magique. Vous recevrez un email de confirmation avec tous les détails sous peu.",
          isSuccess: true,
        };
      } else {
        alertData.value = {
          title: "💕 Merci de nous avoir prévenus",
          description: "Nous comprenons que vous ne puissiez pas être présent(e) et vous remercions de nous l'avoir fait savoir. Vous serez dans nos pensées ce jour-là !",
          isSuccess: true,
        };
      }
      
      showAlert.value = true;
    } else {
      throw new Error("Erreur lors de l'envoi");
    }
  } catch (error) {
    console.error("Erreur RSVP:", error);
    alertData.value = {
      title: "Erreur d'envoi",
      description: "Une erreur est survenue lors de l'envoi de votre réponse. Veuillez réessayer ou nous contacter directement.",
      isSuccess: false,
    };
    showAlert.value = true;
  } finally {
    isLoading.value = false;
  }
};

// Handle alert dialog close
const handleAlertClose = () => {
  showAlert.value = false;
  if (alertData.value.isSuccess) {
    navigateTo("/");
  }
};

// Reset dietary restrictions when attendance changes to no
watch(
  () => formData.attendance,
  (newValue) => {
    if (newValue === "no") {
      formData.dietaryRestrictions = "";
    }
  },
);
</script>
