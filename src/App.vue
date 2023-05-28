<script setup>
import Header from '@/layouts/Header.vue';
import Footer from '@/layouts/Footer.vue';

import Section from '@/components/Section.vue'

import ReturnTop from '@/items/ReturnTop.vue';
</script>

<template>
  <div ref="top"></div>
  <div class="wrapper">
    <Header />
    <main>
      <Section title="Base Template" />
    </main>
    <Footer />
  </div>
  <ReturnTop @click="top" />
</template>

<script>
export default {
  mounted() {
    document.body.scrollIntoView({ behavior: 'smooth' });
  },
  methods: {
    top() {
      const { top } = this.$refs;
      top.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  place-content: space-between;
  text-align: center;
}
</style>
