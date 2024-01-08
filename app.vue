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
            <div v-if="isLoading">
              <v-img 
                src="/assets/loading.gif" 
                width="50" 
                height="50" 
                class="ml-4"
              />
              <h3 class="mt-2">Loading Data</h3>
            </div>
            <v-virtual-scroll
              :items="items"
              height="600"
              item-height="48"
              v-if="!isLoading && isInbox"
            >
              <template v-slot:default="{ item }">
                <v-list-item>
                  <template v-slot:prepend>
                    <div class="position-relative ml-5 mr-3">
                      <v-icon class="dark-avatar" size="44" style="position: absolute; top: 0; left: -20px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <path fill="#0000008A" fill-rule="evenodd" clip-rule="evenodd" d="M9 3C7.3425 3 6 4.3425 6 6C6 7.6575 7.3425 9 9 9C10.6575 9 12 7.6575 12 6C12 4.3425 10.6575 3 9 3ZM10.5 6C10.5 5.175 9.825 4.5 9 4.5C8.175 4.5 7.5 5.175 7.5 6C7.5 6.825 8.175 7.5 9 7.5C9.825 7.5 10.5 6.825 10.5 6ZM13.5 13.5C13.35 12.9675 11.025 12 9 12C6.9825 12 4.6725 12.96 4.5 13.5H13.5ZM3 13.5C3 11.505 6.9975 10.5 9 10.5C11.0025 10.5 15 11.505 15 13.5V15H3V13.5Z"/>
                        </svg>
                      </v-icon>
                      <v-icon class="light-avatar" size="44">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M9 3C7.3425 3 6 4.3425 6 6C6 7.6575 7.3425 9 9 9C10.6575 9 12 7.6575 12 6C12 4.3425 10.6575 3 9 3ZM10.5 6C10.5 5.175 9.825 4.5 9 4.5C8.175 4.5 7.5 5.175 7.5 6C7.5 6.825 8.175 7.5 9 7.5C9.825 7.5 10.5 6.825 10.5 6ZM13.5 13.5C13.35 12.9675 11.025 12 9 12C6.9825 12 4.6725 12.96 4.5 13.5H13.5ZM3 13.5C3 11.505 6.9975 10.5 9 10.5C11.0025 10.5 15 11.505 15 13.5V15H3V13.5Z" fill="white"/>
                        </svg>
                      </v-icon>
                    </div>
                  </template>

                  <v-list-item-title class="item-title">{{ item.title }}</v-list-item-title>
                  <div class="item-person">{{ item.person }}</div>
                  <div class="item-subject">{{ item.subject }}</div>

                  <template v-slot:append>
                    <div class="item-date">{{ item.date }}</div>
                  </template>
                </v-list-item>
              </template>
            </v-virtual-scroll>

          </div>

          
        </v-card>
      </transition>
      <v-row class="fab">
        <v-col
          class="fab-items"
          :class="{ 'move-expand': isMove }"
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
                :class="{ 'task_selected': selectedIdx === 1}"
                style="width: 56px; height: 56px;"
                @click="handleFab(1)"
              >
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                <path :fill="taskBtn.icon" fill-rule="evenodd" clip-rule="evenodd" d="M4.11114 4.66669H24.1111C25.3334 4.66669 26.3334 5.66669 26.3334 6.88891V21.3334C26.3334 22.5556 25.3334 23.5556 24.1111 23.5556H4.11114C2.88892 23.5556 1.88892 22.5556 1.88892 21.3334V6.88891C1.88892 5.66669 2.88892 4.66669 4.11114 4.66669ZM4.11114 6.88891V21.3334H13V6.88891H4.11114ZM24.1111 21.3334H15.2222V6.88891H24.1111V21.3334ZM23 10.7778H16.3334V12.4445H23V10.7778ZM16.3334 13.5556H23V15.2222H16.3334V13.5556ZM23 16.3334H16.3334V18H23V16.3334Z" fill="#F8B76B"/>
              </svg>
              </v-btn>

              <!-- Expanded FAB Button 2 -->
              <v-btn 
                :color="inboxBtn.bg"
                class="ma-4 rounded-circle" 
                :class="{ 'inbox-selected': selectedIdx === 2, 'inbox-switch': selectedIdx === 1 }"
                style="width: 56px; height: 56px;"
                @click="handleFab(2)"
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
        isMove: false,
        isInbox: false,
        isTask: false,
        selectedIdx: null,
        showCardList: false,
        isLoading: true,
        items: [
          {
            title:"109220-Naturalization",
            person: "Cameron Philips",
            subject: "Please check this out!",
            date: "01/01/2021 19:10"
          },
          {
            title:"Jeannette Moraima Guaman Chamba (Hutto I-589) [Hutto Follow Up -Brief Service]",
            person: "Ellen",
            subject: "Hey, please read.",
            date: "02/06/2021 10:45"
          },
          {
            title:"8405-Diana SALAZAR MUNGUIA",
            person: "Cameron Philips",
            subject: "I understand your initial concern and thats very valid, Elizabeth, But you",
            date: "01/06/2021 12:19"
          }
        ],
      }
    },
    methods: {
      handleFab(idx){
        if(this.selectedIdx === null){
          this.selectedIdx = idx
          this.isMove = true
          this.fabBtn = this.fabBtn === "primary" ? "#4F4F4F" : "primary"
          if(idx === 2){
            this.inboxBtn = {
              bg: "#8885FF",
              icon: 'white'
            }
          }
          if(idx === 1){
            this.taskBtn = {
              bg: "#F8B76B",
              icon: 'white'
            }
          }
        }else{
          if(this.selectedIdx === idx){
            this.fabBtn = this.fabBtn === "primary" ? "#4F4F4F" : "primary"
            this.isMove = false
            this.selectedIdx = null
            this.inboxBtn = {
              bg: "grey-lighten-3",
              icon: "#8885FF"
            },
            this.taskBtn = {
              bg: "grey-lighten-3",
              icon: "#F8B76B"
            }
          }else{
            this.selectedIdx = idx
            if(idx === 2){
              this.inboxBtn = {
                bg: "#8885FF",
                icon: 'white'
              }
            }
            if(idx === 1){
              this.taskBtn = {
                bg: "#F8B76B",
                icon: 'white'
              }
            }
          }
        }
      },
      moveItem(idx){
        if(this.selectedIdx === null && idx === 2){
          this.isMove = true
          this.inboxBtn = {
            bg: "#8885FF",
            icon: 'white'
          }
          this.fabBtn = this.fabBtn === "primary" ? "#4F4F4F" : "primary"
          this.selectedIdx = idx;
          this.showCardList = true
          this.isInbox = true
          setTimeout(() => {
            this.isLoading = false
          }, 2000)
        }else if(this.selectedIdx === null && idx === 1){
          this.isMove = true
          this.taskBtn = {
            bg: "#F8B76B",
            icon: 'white'
          }
          this.isTask = true
          this.fabBtn = this.fabBtn === "primary" ? "#4F4F4F" : "primary"
          this.selectedIdx = idx;
          setTimeout(() => {
            this.isLoading = false
          }, 2000)
        }else if(idx === 2){
          this.isMove = false
          this.fabBtn = this.fabBtn === "primary" ? "#4F4F4F" : "primary"
          this.selectedIdx = null;
          this.showCardList = false
          this.isInbox = false
          this.inboxBtn = {
            bg: "grey-lighten-3",
            icon: "#8885FF"
          }
        }else if(idx === 1){
          this.isMove = false
          this.fabBtn = this.fabBtn === "primary" ? "#4F4F4F" : "primary"
          this.selectedIdx = null;
          this.showCardList = false
          this.isTask = false
          this.taskBtn = {
            bg: "grey-lighten-3",
            icon: "#F8B76B"
          }
        }
      },
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
  .inbox-switch{
    transform: translateX(-75px);
  }
  .task_selected{
    transform: translateX(115px);
  }
  .inbox-container{
    position: fixed;
    bottom: 85px;
    right: 20px;
  }
  .light-avatar{
    background-color: #2F80ED;
    border-radius: 100%;
  }
  .dark-avatar{
    background-color: #E0E0E0;
    border-radius: 100%;
  }
  .item-title{
    color:#2F80ED;
    font-size: 16px;
    font-weight: bold;
  }
  .item-person{
    font-size: 14px;
    font-weight: bold;
  }
  .item-subject{
    font-size: 12px;
  }
  .item-date{
    font-size: 11px;
  }
</style>