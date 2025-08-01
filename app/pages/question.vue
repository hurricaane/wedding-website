
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
          name="lucide:message-circle"
          class="w-12 h-12 text-gold-500 mx-auto mb-4"
        />
        <h1 class="text-3xl md:text-4xl font-serif text-foreground mb-4">
          Poser une question
        </h1>
        <p class="text-lg text-foreground/80">
          Vous avez une question ? N'hésitez pas à nous contacter
        </p>
      </div>

      <div class="bg-card p-8 rounded-2xl border border-border elegant-shadow">
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

          <div>
            <Label for="message" class="text-foreground font-medium">
              Votre question *
            </Label>
            <Textarea
              id="message"
              v-model="formData.message"
              class="mt-2 rounded-xl border-input focus:border-gold-500 min-h-[120px]"
              placeholder="Posez votre question ici... (logistique, hébergement, transport, etc.)"
              required
            />
          </div>

          <div
            class="bg-champagne-100/50 rounded-xl p-4 border border-champagne-300"
          >
            <p class="text-sm text-foreground/75">
              <strong>Types de questions courantes :</strong> hébergement,
              transport, tenue vestimentaire, programme détaillé, cadeaux,
              organisation pratique...
            </p>
          </div>

          <Button
            type="submit"
            :disabled="isLoading || !isFormValid"
            :class="[
              'w-full bg-gradient-to-r from-champagne-300 to-gold-400 hover:from-champagne-400 hover:to-gold-500 text-white font-semibold text-lg py-6 h-auto rounded-2xl elegant-shadow hover:scale-105 transition-all duration-300',
              isLoading || !isFormValid ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'
            ]"
          >
            <Icon v-if="!isLoading" name="lucide:send" class="w-5 h-5 mr-2" />
            {{ isLoading ? "Envoi en cours..." : "Envoyer ma question" }}
          </Button>
        </form>
      </div>
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
// Enhanced SEO for Question Page
useSeoMeta({
  title: "Posez vos questions | Yannick & Louise",
  description: "Vous avez des questions sur notre mariage le 20 décembre 2025 à Dakar ? N'hésitez pas à nous contacter via ce formulaire simple et rapide.",
  ogTitle: "Questions - Mariage Yannick & Louise",
  ogDescription: "Posez vos questions sur notre mariage le 20 décembre 2025 à Dakar, Sénégal",
  ogImage: "/wedding-contact-og.jpg",
  ogImageAlt: "Formulaire de contact pour le mariage de Yannick et Louise",
  twitterTitle: "Questions - Mariage Yannick & Louise",
  twitterDescription: "Posez vos questions sur notre célébration",
  robots: "index, follow"
})

// Breadcrumb structure
useBreadcrumbItems([
  {
    title: "Accueil",
    to: "/"
  },
  {
    title: "Poser une question",
    to: "/question"
  }
])

// Schema.org structured data for contact page
useSchemaOrg([
  {
    "@type": "ContactPage",
    "name": "Questions - Mariage Yannick & Louise",
    "description": "Formulaire de contact pour poser des questions sur le mariage de Yannick et Louise",
    "url": useRuntimeConfig().public.siteUrl + "/question",
    "mainEntity": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "availableLanguage": "French"
    }
  }
])

// Imports
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";
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
    !formData.message
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
      description: "Veuillez remplir tous les champs requis.",
      isSuccess: false,
    };
    showAlert.value = true;
    return;
  }

  isLoading.value = true;

  try {
    const response = await $fetch("/api/question", {
      method: "POST",
      body: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        message: formData.message,
      },
    });

    if (response.success) {
      console.log("Question soumise avec succès:", response);
      alertData.value = {
        title: "❓ Question envoyée !",
        description: "Merci pour votre question ! Nous vous répondrons dans les plus brefs délais. Vous recevrez un email de confirmation sous peu.",
        isSuccess: true,
      };
      showAlert.value = true;
    } else {
      throw new Error("Erreur lors de l'envoi");
    }
  } catch (error) {
    console.error("Erreur question:", error);
    alertData.value = {
      title: "Erreur d'envoi",
      description: "Une erreur est survenue lors de l'envoi de votre question. Veuillez réessayer ou nous contacter directement.",
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
</script>
