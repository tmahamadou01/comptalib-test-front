<template>
  <div>
    <PokemonDetail :pokemon="pokemon" />
  </div>
</template>

<script>
export default {
  name: 'DetailPage',
  data: () => ({
    pokemon: [],
  }),
  mounted() {
    this.fetchPokemonsDetail()
  },
  methods: {
    async fetchPokemonsDetail() {
      const pokemonId = this.$route.params.id
      this.pokemon = await this.$axios
        .$get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .catch((error) => error)
    },
  },
}
</script>