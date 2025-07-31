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
            class="w-full bg-gradient-to-r from-champagne-300 to-gold-400 hover:from-champagne-400 hover:to-gold-500 text-white font-semibold text-lg py-6 h-auto rounded-2xl elegant-shadow hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <Icon v-if="!isLoading" name="lucide:send" class="w-5 h-5 mr-2" />
            {{ isLoading ? "Envoi en cours..." : "Envoyer ma question" }}
          </Button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { Textarea } from "~/components/ui/textarea";

// Page metadata
useHead({
  title: "Question - Yannick & Louise",
  meta: [
    {
      name: "description",
      content:
        "Posez vos questions concernant le mariage de Yannick et Louise le 20 décembre 2025",
    },
  ],
});

// Form state
const formData = reactive({
  firstName: "",
  lastName: "",
  email: "",
  message: "",
});

const isLoading = ref(false);

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
    alert("Veuillez remplir tous les champs.");
    return;
  }

  isLoading.value = true;

  try {
    // Simulate API call (replace with actual API call)
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // Success simulation (95% success rate)
    if (Math.random() > 0.05) {
      console.log("Question soumise:", formData);
      // In a real app, you'd show a success toast
      alert(
        "Question envoyée ! Nous vous répondrons dans les plus brefs délais.",
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
</script>
