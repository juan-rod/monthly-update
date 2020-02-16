<template>
  <div class="home-container">
    <featured-component />
    <main-component />
  </div>
</template>

<script>
// @ is an alias to /src
import FeaturedComponent from '@/components/FeaturedComponent.vue'
import MainComponent from '@/components/MainComponent.vue'

export default {
  name: 'Home',
  components: {
    MainComponent,
    FeaturedComponent,
  }
}
</script>
