<template>
  <v-app>
    <v-navigation-drawer app class="dark-theme-1">
      <!-- navigation goes here -->
    </v-navigation-drawer>

    <v-app-bar app class="dark-theme-2">
      <v-icon class="ml-5">mdi-magnify</v-icon>
      <!-- top bar goes here -->
    </v-app-bar>

    <v-main class="dark-theme-1">
      <v-row class="fab">
        <v-col>
          <v-expand-x-transition>
            <v-card
              flat
              v-show="expand"
              class="flex justify-between items-center mt-1/2 bg-transparent"
              width="200"
              height="75"
            >
              <!-- Expanded FAB Button 1 -->
              <v-btn 
                color="grey-lighten-3"
                class="ma-4 rounded-circle" 
                style="width: 56px; height: 56px;"
              >
                <v-img src="/assets/task-icon.png" width="25" height="25"></v-img>
              </v-btn>

              <!-- Expanded FAB Button 2 -->
              <v-btn 
                color="grey-lighten-3"
                class="ma-4 rounded-circle" 
                style="width: 56px; height: 56px;"
              >
                <v-img src="/assets/inbox-icon.png" width="25" height="25"></v-img>
              </v-btn>
            </v-card>
          </v-expand-x-transition>
        </v-col>
        <v-col>
          <v-btn 
            color="primary" 
            width="15" 
            class="ma-4 rounded-circle" 
            style="width: 56px; height: 56px;"
            @click="expand = !expand"
          >
            <v-img src="/assets/fab-icon.png" width="45" height="45"></v-img>
          </v-btn>
  
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
  export default{
    data() {
      return {
        expand: false,
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
  .fab-items{
    position: absolute;
    bottom: 0;
  }
</style>