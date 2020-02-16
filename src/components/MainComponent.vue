<template>
  <div class="main-component">
      <!-- <monthly-feed v-for="month in monthlyFeed" :key="month.id"></monthly-feed> -->
      <monthly-feed></monthly-feed>
  </div>
</template>

<script>
import MonthlyFeed from '@/components/feed/MonthlyFeedView'
export default {
  name: 'main-component',
  components: { MonthlyFeed }
}
</script>

<style>

</style>