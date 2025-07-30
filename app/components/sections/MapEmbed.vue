<template>
  <section class="py-16 px-6 bg-muted/30">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <Icon
          name="lucide:map-pin"
          size="2em"
          class="w-16 h-16 text-gold-500 mx-auto mb-4"
        />
        <h2 class="text-3xl md:text-4xl font-serif text-foreground mb-4">
          Lieux de célébration
        </h2>
        <p class="text-lg text-foreground/80">
          Découvrez les lieux qui accueilleront notre mariage à Dakar
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <!-- Cérémonie Religieuse -->
        <div
          class="bg-card rounded-2xl p-8 border border-border elegant-shadow"
        >
          <div class="flex items-center gap-3 mb-6">
            <Icon name="lucide:church" class="w-8 h-8 text-gold-600" />
            <h3 class="text-2xl font-serif text-foreground">
              Cérémonie religieuse
            </h3>
          </div>

          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-foreground mb-2">
                Cathédrale du Souvenir Africain
              </h4>
              <div class="space-y-2 text-foreground/75">
                <div class="flex items-center gap-2">
                  <Icon name="lucide:map-pin" class="w-4 h-4" />
                  <span>Avenue Pasteur, Plateau, Dakar</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:clock" class="w-4 h-4" />
                  <span>16h00 - 17h00</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:users" class="w-4 h-4" />
                  <span>Accueil dès 15h30</span>
                </div>
              </div>
            </div>

            <div
              class="bg-champagne-100 rounded-xl p-4 border border-champagne-300"
            >
              <p class="text-sm text-foreground/80">
                <Icon name="lucide:info" class="w-4 h-4 inline mr-2" />
                <strong>Tenue recommandée :</strong> Tenue de ville élégante
              </p>
            </div>

            <div class="mt-6">
              <div
                class="bg-gray-100 rounded-xl h-48 flex items-center justify-center relative overflow-hidden"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.8332603994454!2d-17.442413310973652!3d14.66540213895938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1724a2d36862b%3A0xc3258d7ad39a18c0!2sCath%C3%A9drale%20du%20Souvenir%20Africain!5e0!3m2!1sfr!2sfr!4v1753887974880!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style="border: 0"
                  :allowfullscreen="true"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  class="rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <!-- Réception -->
        <div
          class="bg-card rounded-2xl p-8 border border-border elegant-shadow space-y-4"
        >
          <div class="flex items-center gap-3 mb-6">
            <Icon name="lucide:utensils" class="w-8 h-8 text-gold-600" />
            <h3 class="text-2xl font-serif text-foreground">Réception</h3>
          </div>

          <div class="space-y-4">
            <div>
              <h4 class="font-semibold text-foreground mb-2">
                Radisson Blu Hotel Sea Plaza
              </h4>
              <div class="space-y-2 text-foreground/75">
                <div class="flex items-center gap-2">
                  <Icon name="lucide:map-pin" class="w-4 h-4" />
                  <span>Route de la Corniche Ouest, Dakar</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:clock" class="w-4 h-4" />
                  <span>18h30 - 01h00</span>
                </div>
                <div class="flex items-center gap-2">
                  <Icon name="lucide:wine" class="w-4 h-4" />
                  <span>Cocktail puis dîner</span>
                </div>
              </div>
            </div>

            <div
              class="bg-champagne-100 rounded-xl p-4 border border-champagne-300"
            >
              <p class="text-sm text-foreground/80">
                <Icon name="lucide:car" class="w-4 h-4 inline mr-2" />
                <strong>Transport :</strong> Navette depuis la cathédrale
                organisée
              </p>
            </div>

            <div class="mt-6">
              <div
                class="bg-gray-100 rounded-xl h-48 flex items-center justify-center relative overflow-hidden"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.3099471070645!2d-17.47851131238502!3d14.695056138163746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1729ca1bf2a41%3A0x7c056ce772b26119!2sNoom%20Dakar!5e0!3m2!1sfr!2sfr!4v1753910437700!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style="border: 0"
                  :allowfullscreen="true"
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  class="rounded-xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Informations pratiques -->
      <div
        class="bg-gradient-to-r from-champagne-100 to-gold-100 rounded-2xl p-8 border border-champagne-300"
      >
        <div class="text-center mb-6">
          <Icon
            name="lucide:info"
            size="2em"
            class="w-10 h-10 text-gold-600 mx-auto mb-3"
          />
          <h4 class="font-serif text-foreground mb-2">
            Informations pratiques
          </h4>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div class="text-center">
            <Icon
              name="lucide:plane"
              size="1.4em"
              class="w-8 h-8 text-gold-600 mx-auto mb-2"
            />
            <h5 class="font-semibold text-foreground mb-1">Aéroport</h5>
            <p class="text-base text-foreground/75">
              Aéroport international Blaise Diagne<br />
              45 minutes des lieux
            </p>
          </div>

          <div class="text-center">
            <Icon
              name="lucide:bed"
              size="1.4em"
              class="w-8 h-8 text-gold-600 mx-auto mb-2"
            />
            <h5 class="font-semibold text-foreground mb-1">Hébergement</h5>
            <p class="text-base text-foreground/75">
              Radisson Blu Sea Plaza<br />
              Tarifs préférentiels négociés
            </p>
          </div>

          <div class="text-center">
            <Icon
              name="lucide:car"
              size="1.4em"
              class="w-8 h-8 text-gold-600 mx-auto mb-2"
            />
            <h5 class="font-semibold text-foreground mb-1">Transport</h5>
            <p class="text-base text-foreground/75">
              Taxi, VTC disponibles<br />
              Navette organisée
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Location section with ceremony and reception venues in Dakar
</script>

