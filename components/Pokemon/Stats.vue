<template>
    <div>
        <PokemonStatBar title="HP" :size="hp" bg-color="#FF5959" />
        <PokemonStatBar title="Attack" :size="attack" bg-color="#F6AC78" />
        <PokemonStatBar title="Defense" :size="defense" bg-color="#FAE078" />
        <PokemonStatBar title="Special Attack" :size="specialAttack" bg-color="#9DB7F5" />
        <PokemonStatBar title="Special Defense" :size="specialDefense" bg-color="#A8DB8D" />
        <PokemonStatBar title="Speed" :size="speed" bg-color="#FA92B2" />
    </div>
</template>

<script>
export default {
    name: "PokemonStats",
    props: ["hp", "attack", "defense", "specialAttack", "specialDefense", "speed"],
}
</script>