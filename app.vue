<template>
  <v-app>
    <v-navigation-drawer app class="dark-theme-1">
      <!-- navigation goes here -->
    </v-navigation-drawer>

    <v-app-bar app class="dark-theme-2">
      <v-icon class="ml-5">mdi-magnify</v-icon>
      <!-- top bar goes here -->
    </v-app-bar>

    <v-main class="dark-theme-1 h-screen">
      
      <v-btn color="primary" width="15" class="ma-4 rounded-circle fab" style="width: 56px; height: 56px;">
        <v-img src="/assets/fab-icon.png" width="45" height="45"></v-img>
      </v-btn>

    </v-main>
  </v-app>
</template>

<script>
  export default{
    data() {
      return {
        drawer: false
      }
    },
    head() {
      return {
        title: 'Simpul Tech | Challenge',
      }
    }
  }
</script>

<style scoped>
  .dark-theme-1{
    background-color: #333;
    color: #ffffff;
  }
  .dark-theme-2{
    background-color: #4F4F4F;
    color: #ffffff
  }
  .fab{
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>