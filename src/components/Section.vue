<script setup>
import { path } from '@/assets/js/utils.js'

defineProps({
  title: String,
})
</script>

<template>
  <section>
    <h1>{{ title }}</h1>

    <img :src="avatar" class="logo vue" alt="Avatar logo" width="200" />

    <div class="card">
      <p>
        My basic template to start a <code>simple</code> project.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      avatar: path('img', 'avatar', 'svg')
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 2rem;
}

img {
  cursor: pointer;
  transition: filter .15s;

  &:hover {
    filter: drop-shadow(0 0 50px #da6220);
  }
}

code {
  color: #da6220;
}
</style>
