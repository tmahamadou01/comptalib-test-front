<template>
  <div>
    <v-app-bar app color="#DFE1EC">
      <v-app-bar-nav-icon> </v-app-bar-nav-icon>
      <nuxt-link to="/">
        <v-toolbar-title>Pokédex</v-toolbar-title>
      </nuxt-link>
      <v-spacer></v-spacer>
      <v-btn text @click="openTeamModal" v-if="team.length">
        <v-badge color="green" :content="team.length" class="mx-5">
          My Team
        </v-badge>
      </v-btn>
    </v-app-bar>

    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>My Team</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="dialog = false"> Close </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text class="mt-5">
          <p v-if="!team.length">Your team is empty, add pokemon</p>
          <v-row justify="center" align="center" v-else>
            <v-col
              cols="12"
              md="2"
              sm="3"
              v-for="(pokemon, i) in team"
              :key="i"
            >
              <PokemonCard
                :pokemon="pokemon"
                show-delete
                @delete="handleDeletePokemon(i)"
              />
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'NavBar',
  props: {
    team: Array,
  },
  data() {
    return {
      dialog: false,
    }
  },
  methods: {
    ...mapActions({
      deletePokemon: 'team/deletePokemon',
    }),
    openTeamModal() {
      this.dialog = true
    },
    handleDeletePokemon(index) {
      const result = confirm('Do you want to delete this Pokemon ?')
      if (result) {
        this.deletePokemon(index)
        alert('Deleted success')
      }
    },
  },
}
</script>