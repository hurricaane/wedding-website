<template>
  <div
    class="min-h-screen bg-gradient-to-br from-ivory-100 to-champagne-200 py-12 px-6"
  >
    <div class="max-w-2xl mx-auto">
      <div class="text-center mb-8">
        <Button
          variant="outline"
          @click="navigateHome"
          class="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-champagne-300 hover:bg-champagne-100 transition-colors"
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
          Merci de confirmer votre présence avant le 15 novembre 2025
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
            class="w-full bg-gradient-to-r from-champagne-300 to-gold-400 hover:from-champagne-400 hover:to-gold-500 text-white font-semibold text-lg py-6 h-auto rounded-2xl elegant-shadow hover:scale-105 transition-all duration-300"
          >
            <Icon v-if="!isLoading" name="lucide:send" class="w-5 h-5 mr-2" />
            {{ isLoading ? "Envoi en cours..." : "Envoyer ma réponse" }}
          </Button>
        </form>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Card } from "~/components/ui/card";
import { Textarea } from "~/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "~/components/ui/radio-group";

// Page metadata
useHead({
  title: "RSVP - Yannick & Louise",
  meta: [
    {
      name: "description",
      content:
        "Confirmez votre présence au mariage de Yannick et Louise le 20 décembre 2025",
    },
  ],
});

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
    alert("Veuillez remplir tous les champs obligatoires.");
    return;
  }

  isLoading.value = true;

  try {
    // Simulate API call (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Success simulation (90% success rate)
    if (Math.random() > 0.1) {
      console.log("RSVP soumis:", formData);
      // In a real app, you'd show a success toast
      alert(
        "Réponse envoyée ! Merci d'avoir confirmé votre présence. Nous avons hâte de célébrer avec vous !",
      );
      navigateTo("/");
    } else {
      throw new Error("Erreur de simulation");
    }
  } catch (error) {
    // In a real app, you'd show an error toast
    alert("Une erreur est survenue. Veuillez réessayer.");
  } finally {
    isLoading.value = false;
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
