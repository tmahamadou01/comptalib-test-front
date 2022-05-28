export const state = () => ({
    team: [],
})

export const getters = {
    team: (state) => state.team,
}

export const mutations = {
    SET_TEAM: (state, team) => {
        state.team = team
    },
}

export const actions = {

    setTeam({ commit }) {
        const team = JSON.parse(localStorage.getItem("team") || "[]");
        commit("SET_TEAM", team)
    },
    addPokemonTeam({ dispatch }, pokemon) {
        const team = JSON.parse(localStorage.getItem("team") || "[]");
        if (team.length > 0) {
            team.push(pokemon);
            localStorage.setItem("team", JSON.stringify(team));
            dispatch('setTeam')
        } else {
            localStorage.setItem("team", JSON.stringify([pokemon]));
            dispatch('setTeam')
        }
        alert('Added success')
    },
    deletePokemon({ state, dispatch }, index) {
        const nTeam = [...state.team].filter((_, i) => i !== index)
        localStorage.setItem("team", JSON.stringify(nTeam));
        dispatch('setTeam')

    },
}