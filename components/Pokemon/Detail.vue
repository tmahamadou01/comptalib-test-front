<template>
  <div class="pokemon-detail" align="center">
    <h1>#{{ pokemon.id }}</h1>
    <h1 v-text="pokemon.name" />
    <img
      class=""
      :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`"
      :alt="pokemon.name"
      loading="lazy"
      :width="$vuetify.breakpoint.xsAndDown ? '100%' : '400px'"
    />
    <div v-if="pokemon.types">
      <template v-for="(type, i) in pokemon.types">
        <v-chip
          :key="i"
          v-text="type.type.name"
          class="ma-2 white--text"
          :class="`type-${type.type.name}`"
        />
      </template>
    </div>
    <div>
      <h2>Infos</h2>
      <span class="font-weight-medium"
        >Height: {{ pokemon.height | formatString }} m
      </span>
      /
      <span class="font-weight-medium"
        >Weight: {{ pokemon.weight | formatString }} kg</span
      >
    </div>
    <div v-if="pokemon.stats">
      <h2>Stats</h2>
      <PokemonStats
        :hp="pokemon.stats[0].base_stat"
        :attack="pokemon.stats[1].base_stat"
        :defense="pokemon.stats[2].base_stat"
        :specialAttack="pokemon.stats[3].base_stat"
        :specialDefense="pokemon.stats[4].base_stat"
        :speed="pokemon.stats[5].base_stat"
      />
    </div>

    <div class="mt-5">
      <h2>Abilities</h2>
      <template v-if="pokemon.abilities">
        <template v-for="(ability, i) in pokemon.abilities">
          <v-chip :key="i" v-text="ability.ability.name" class="ma-2" />
        </template>
      </template>
    </div>

    <v-btn class="mt-5" color="primary" @click="AddPokemon">Add in team</v-btn>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'PokemonDetail',
  props: {
    pokemon: [Object, Array],
  },
  filters: {
    formatString: (str) => {
      str = String(str)
      return str.length === 1
        ? '0.' + str
        : str.substring(0, str.length - 1) + '.' + str[str.length - 1]
    },
  },
  methods: {
    ...mapActions({
      addPokemonTeam: 'team/addPokemonTeam',
    }),

    AddPokemon() {
      this.addPokemonTeam(this.pokemon)
    },
  },
}
</script>