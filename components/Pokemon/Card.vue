<template>
  <div class="pokemon-card">
    <nuxt-link :to="`/pokemon/${pokemon.id}`">
      <v-card class="mx-auto my-1" max-width="374">
        <v-img height="180" :src="imageUrl" />
        <v-card-title v-text="pokemon.name" />
        <v-btn class="ma-2" v-if="showDelete" outlined color="red" @click="$emit('delete')">Delete</v-btn>
      </v-card>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'PokemonCard',
  props: {
    pokemon: Object,
    showDelete: Boolean,
  },
  computed: {
    imageUrl() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${this.pokemon.id}.png`
    },
  },
}
</script>

<style lang="scss" scoped>
.pokemon-card {
  a {
    text-decoration: none;
    text-align: center;
  }
}
</style>