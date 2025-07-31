<template>
  <div>
    <ClientOnly>
      <LoadingScreen :is-loading="isLoading" />
    </ClientOnly>

    <div v-show="!isLoading" class="app-content">
      <NuxtRouteAnnouncer />
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
const { isLoading, stopLoading } = useLoading();

const initializeApp = async () => {
  try {
    // Attendre le montage des composants
    await nextTick();

    // Simuler le chargement des données (images, etc.)
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Arrêter le loading avec le délai minimum
    await stopLoading();
  } catch (error) {
    console.error(
      "Erreur lors de l'initialisation du site de mariage : ",
      error,
    );
    // Forcer l'arrêt du loading après 3 secondes en cas d'erreur
    setTimeout(() => stopLoading(), 3000);
  }
};

onMounted(() => {
  initializeApp();
});

// Meta tags pour le thème wedding pendant le chargement
useHead({
  htmlAttrs: {
    class: "wedding-theme", // Classe wedding par défaut
  },
  bodyAttrs: {
    class: "bg-ivory-100", // Background wedding par défaut
  },
});
</script>

<style>
/* Styles globaux pour le thème wedding */
html {
  color-scheme: light;
  font-family: "Source Sans Pro", system-ui, sans-serif;
}

.app-content {
  /* Transition douce lors de l'apparition du contenu */
  animation: weddingContentFadeIn 0.8s ease-out;
}

@keyframes weddingContentFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Assurer que le body prend toute la hauteur */
html,
body,
#__nuxt {
  height: 100%;
}
</style>
