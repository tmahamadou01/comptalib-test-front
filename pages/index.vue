<template>
  <v-row justify="center" align="center">
    <v-col cols="12" md="2" sm="3" v-for="(pokemon, i) in pokemons" :key="i">
      <PokemonCard :pokemon="pokemon" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    pokemons: [],
    index: 1,
    offset: 20,
  }),
  mounted() {
    this.fetchPokemons()
    this.loadMorePokemons()
  },
  methods: {
    fetchPokemons() {
      const pokemonPromises = []
      for (let i = this.index; i <= this.offset; i++) {
        pokemonPromises.push(
          fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then((response) =>
            response.json()
          )
        )
      }
      Promise.all(pokemonPromises).then((pokemon) => {
        this.pokemons = [...this.pokemons, ...pokemon]
      })

      this.index = this.offset + 1
      this.offset += 20
    },
    loadMorePokemons() {
      window.onscroll = () => {
        const bottom =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight
        if (bottom) {
          this.fetchPokemons()
        }
      }
    },
  },
}
</script>
