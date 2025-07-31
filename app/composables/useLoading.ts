export const useLoading = () => {
  // Initialize with false for SSR, true for client
  const isLoading = ref(false)
  const minLoadingTime = 2000 // Temps minimum d'affichage du loading (en ms) - un peu plus long pour un mariage
  const loadingStartTime = ref(0)

  // Fonction pour démarrer le loading
  const startLoading = (): void => {
    isLoading.value = true
    loadingStartTime.value = Date.now()
  }

  // Fonction pour arrêter le loading avec un délai minimum
  const stopLoading = async (): Promise<void> => {
    const elapsedTime = Date.now() - loadingStartTime.value
    const remainingTime = Math.max(0, minLoadingTime - elapsedTime)

    // Attendre le temps restant si nécessaire
    if (remainingTime > 0) {
      await new Promise(resolve => setTimeout(resolve, remainingTime))
    }

    isLoading.value = false
  }

  // Fonction pour arrêter le loading immédiatement (pour les cas d'urgence)
  const stopLoadingImmediate = (): void => {
    isLoading.value = false
  }

  // Initialisation automatique au montage côté client uniquement
  onMounted(() => {
    // Start loading immediately on client side
    isLoading.value = true
    startLoading()
  })

  return {
    isLoading: readonly(isLoading),
    startLoading,
    stopLoading,
    stopLoadingImmediate
  }
}