<template>
  <div>
    <div class="search">
      <v-text-field v-model="search" label="search" outlined dense placeholder="simple search"></v-text-field>
    </div>
    <v-row justify="center" align="center">
      <v-col cols="12" md="2" sm="3" v-for="(pokemon, i) in filteredList" :key="i">
        <PokemonCard :pokemon="pokemon" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data: () => ({
    pokemons: [],
    index: 1,
    offset: 20,
    search: '',
  }),
  computed: {
    filteredList() {
      return this.pokemons.filter((pokemon) => {
        return this.search.toLowerCase().split('').every(v => pokemon.name.toLowerCase().includes(v))
      })
    }
  },
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
