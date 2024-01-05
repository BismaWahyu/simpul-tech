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
      <transition name="scale-transition">
        <v-card
          v-if="showCardList"
          class="inbox-container"
          min-width="300"
          max-width="737"
          width="734"
          min-height="300"
          height="737"
        >
          <div class="mt-5 d-flex align-center justify-center">
            <div style="width: 666px;">
              <v-text-field label="Search" variant="outlined"  append-inner-icon="mdi-magnify"></v-text-field>
            </div>
          </div>
          <div class="d-flex align-center justify-center" style="height: 55vh;">
            <div v-show="isLoading">
              <v-img 
                src="/assets/loading.gif" 
                width="50" 
                height="50" 
                class="ml-4"
              />
              <h3 class="mt-2">Loading Data</h3>
            </div>
          </div>
        </v-card>
      </transition>
      <v-row class="fab">
        <v-col
          class="fab-items"
          :class="{ 'move-expand': isInbox }"
        >
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
                :color="taskBtn.bg"
                class="ma-4 rounded-circle" 
                style="width: 56px; height: 56px;"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                <path :fill="taskBtn.icon" fill-rule="evenodd" clip-rule="evenodd" d="M4.11114 4.66669H24.1111C25.3334 4.66669 26.3334 5.66669 26.3334 6.88891V21.3334C26.3334 22.5556 25.3334 23.5556 24.1111 23.5556H4.11114C2.88892 23.5556 1.88892 22.5556 1.88892 21.3334V6.88891C1.88892 5.66669 2.88892 4.66669 4.11114 4.66669ZM4.11114 6.88891V21.3334H13V6.88891H4.11114ZM24.1111 21.3334H15.2222V6.88891H24.1111V21.3334ZM23 10.7778H16.3334V12.4445H23V10.7778ZM16.3334 13.5556H23V15.2222H16.3334V13.5556ZM23 16.3334H16.3334V18H23V16.3334Z" fill="#F8B76B"/>
              </svg>
              </v-btn>

              <!-- Expanded FAB Button 2 -->
              <v-btn 
                :color="inboxBtn.bg"
                class="ma-4 rounded-circle" 
                :class="{ 'inbox-selected': selectedIdx === 2 }"
                style="width: 56px; height: 56px;"
                @click="moveItem(2)"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="31" viewBox="0 0 32 31">
                <path :fill="inboxBtn.icon" fill-rule="evenodd" clip-rule="evenodd" d="M21.0371 2.92615H4.66671C3.97411 2.92615 3.40745 3.49281 3.40745 4.18541V21.815L8.44448 16.778H21.0371C21.7297 16.778 22.2963 16.2113 22.2963 15.5187V4.18541C22.2963 3.49281 21.7297 2.92615 21.0371 2.92615ZM19.7778 5.44458V14.2594H7.39931L6.65635 15.0024L5.92598 15.7327V5.44458H19.7778ZM24.8149 7.96321H27.3334C28.026 7.96321 28.5926 8.52987 28.5926 9.22247V28.1114L23.5556 23.0743H9.70374C9.01115 23.0743 8.44448 22.5077 8.44448 21.8151V19.2965H24.8149V7.96321Z"/>
              </svg>
              </v-btn>
            </v-card>
          </v-expand-x-transition>
        </v-col>
        <v-col>
          <v-btn 
            :color="fabBtn" 
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
        fabBtn: "primary",
        inboxBtn: {
          bg: "grey-lighten-3",
          icon: "#8885FF"
        },
        taskBtn: {
          bg: "grey-lighten-3",
          icon: "#F8B76B"
        },
        isInbox: false,
        selectedIdx: null,
        showCardList: false,
        isLoading: false
      }
    },
    methods: {
      moveItem(idx){
        if(this.selectedIdx === null){
          this.inboxBtn = {
            bg: "#8885FF",
            icon: 'white'
          }
          this.fabBtn = this.fabBtn === "primary" ? "#4F4F4F" : "primary"
          this.isInbox = true;
          this.isLoading = true
          this.selectedIdx = idx;
          this.showCardList = true
        }else{
          this.fabBtn = this.fabBtn === "primary" ? "#4F4F4F" : "primary"
          this.selectedIdx = null;
          this.showCardList = false
          this.isInbox = false
          this.isInbox = false
          this.inboxBtn = {
            bg: "grey-lighten-3",
            icon: "#8885FF"
          }
        }
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
    z-index: 1;
    transition: transform 0.3s ease;
  }
  .move-expand{
    transform: translateX(120px);
  }
  .inbox-selected{
    transform: translateX(20px)
  }
  .inbox-container{
    position: fixed;
    bottom: 85px;
    right: 20px;
  }
</style>