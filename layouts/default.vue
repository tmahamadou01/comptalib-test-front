<template>
  <v-app>
    <Nav class="mb-12" :team="team" />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'DefaultLayout',
  computed: {
    ...mapGetters({
      team: 'team/team',
    }),
  },
  mounted() {
    this.setTeam()
  },
  methods: {
    ...mapActions({
      setTeam: 'team/setTeam',
    }),
  },
}
</script>

<style lang="scss">
@import '@/assets/_pokemonType.scss';
</style>
