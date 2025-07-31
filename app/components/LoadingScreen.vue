<template>
  <Teleport to="body">
    <transition name="loading-fade" appear>
      <div v-if="isLoading" class="loading-screen">
        <!-- Background avec gradient wedding -->
        <div class="loading-background"></div>

        <!-- Contenu du loading -->
        <div class="loading-content">
          <!-- Cœurs animés en arrière-plan -->
          <div class="floating-hearts">
            <div class="heart heart-1">💕</div>
            <div class="heart heart-2">💖</div>
            <div class="heart heart-3">💝</div>
            <div class="heart heart-4">💗</div>
            <div class="heart heart-5">💓</div>
          </div>

          <!-- Logo/Titre du mariage -->
          <div class="loading-logo">
            <div class="couple-initials">Y & L</div>
            <h1 class="loading-title">Yannick & Louise</h1>
            <p class="wedding-date">20 décembre 2025</p>
          </div>

          <!-- Spinner élégant avec anneaux dorés -->
          <div class="loading-spinner">
            <div class="spinner-ring ring-1"></div>
            <div class="spinner-ring ring-2"></div>
            <div class="spinner-ring ring-3"></div>
          </div>

          <!-- Texte de chargement -->
          <p class="loading-text">Préparation de notre célébration...</p>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
interface Props {
  isLoading: boolean
}

withDefaults(defineProps<Props>(), {
  isLoading: true
})
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.loading-background {
  position: absolute;
  inset: 0;
  /* Couleurs wedding theme - champagne to ivory gradient */
  background: linear-gradient(135deg, #f7f3f0 0%, #f5f1eb 25%, #f9f6f2 50%, #f5f1eb 75%, #f7f3f0 100%);
  background-size: 400% 400%;
  animation: weddingGradientShift 6s ease-in-out infinite;
}

.loading-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.floating-hearts {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.heart {
  position: absolute;
  font-size: 1.5rem;
  opacity: 0.3;
  animation: floatUp 8s ease-in-out infinite;
}

.heart-1 {
  left: 10%;
  animation-delay: 0s;
}

.heart-2 {
  left: 20%;
  animation-delay: 1.5s;
}

.heart-3 {
  right: 20%;
  animation-delay: 3s;
}

.heart-4 {
  right: 10%;
  animation-delay: 4.5s;
}

.heart-5 {
  left: 50%;
  animation-delay: 6s;
}

.loading-logo {
  text-align: center;
  color: #8b5a3c;
}

.couple-initials {
  font-size: 4rem;
  font-weight: 300;
  font-family: 'Playfair Display', serif;
  background: linear-gradient(135deg, #d4af37, #b8860b, #daa520);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: transparent;
  margin-bottom: 0.5rem;
  animation: initialsGlow 3s ease-in-out infinite;
}

.loading-title {
  font-size: 2.5rem;
  font-weight: 400;
  font-family: 'Playfair Display', serif;
  color: #8b5a3c;
  margin-bottom: 0.5rem;
  animation: titlePulse 2s ease-in-out infinite;
}

.wedding-date {
  font-size: 1.2rem;
  font-weight: 300;
  color: #b8860b;
  font-style: italic;
  margin-bottom: 1rem;
}

.loading-spinner {
  position: relative;
  width: 80px;
  height: 80px;
}

.spinner-ring {
  position: absolute;
  border: 3px solid transparent;
  border-radius: 50%;
  animation: elegantSpin 2s linear infinite;
}

.ring-1 {
  inset: 0;
  border-top: 3px solid #d4af37;
  animation-duration: 2s;
}

.ring-2 {
  inset: 12px;
  border-top: 3px solid #b8860b;
  animation-duration: 3s;
  animation-direction: reverse;
}

.ring-3 {
  inset: 24px;
  border-top: 3px solid #daa520;
  animation-duration: 4s;
}

.loading-text {
  color: #8b5a3c;
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  animation: textFade 3s ease-in-out infinite alternate;
  text-align: center;
}

/* Animations */
@keyframes weddingGradientShift {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

@keyframes floatUp {
  0% {
    bottom: -10%;
    opacity: 0;
    transform: translateX(0) rotate(0deg);
  }
  10% {
    opacity: 0.3;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    bottom: 110%;
    opacity: 0;
    transform: translateX(20px) rotate(180deg);
  }
}

@keyframes initialsGlow {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
    text-shadow: 0 0 20px rgba(212, 175, 55, 0.3);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.05);
    text-shadow: 0 0 30px rgba(212, 175, 55, 0.5);
  }
}

@keyframes titlePulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.02);
  }
}

@keyframes elegantSpin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes textFade {
  0% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}

/* Transition du loading screen */
.loading-fade-enter-active {
  transition: opacity 0.5s ease;
}

.loading-fade-leave-active {
  transition: opacity 0.8s ease;
}

.loading-fade-enter-from,
.loading-fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .couple-initials {
    font-size: 3rem;
  }
  
  .loading-title {
    font-size: 2rem;
  }
  
  .wedding-date {
    font-size: 1rem;
  }
  
  .loading-spinner {
    width: 60px;
    height: 60px;
  }
  
  .ring-2 {
    inset: 8px;
  }
  
  .ring-3 {
    inset: 16px;
  }
}

@media (max-width: 480px) {
  .couple-initials {
    font-size: 2.5rem;
  }
  
  .loading-title {
    font-size: 1.5rem;
  }
  
  .heart {
    font-size: 1.2rem;
  }
}</style>