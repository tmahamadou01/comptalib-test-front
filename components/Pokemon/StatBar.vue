<template>
  <div class="base-stat-bar">
    <h1 v-text="title"></h1>
    <div class="base-stat-bar__info">
      <div
        class="base-stat-bar__info--percent"
        :style="{ 'background-color': `${bgColor}`, width: `${size}px` }"
      >
        <strong>{{ size }}</strong>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokemonStatBar',
    props: {
        title: String,
        size: Number,
        bgColor: String,
    },
}
</script>

<style lang="scss" scoped>
.base-stat-bar {
    margin: 5px;
  h1 {
    font-size: 12px;
    font-weight: bold;
    margin-bottom: 2px;
    color: #4c4c4c;
  }
  .base-stat-bar__info {
    font-size: 12px;
    font-weight: 20;
 
    width: 25%;
    border-radius: 50px;
    background-color: #c3c3c3;
    display: flex;
    justify-content: flex-start;

    @media (max-width: 799px) {
      width: 100%;
    }

    .base-stat-bar__info--percent {
      max-width: 255px;

      border-radius: 50px;
      color: #fff;
      background-position: left;
    }
  }
}
</style>