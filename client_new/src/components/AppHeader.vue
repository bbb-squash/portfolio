<script setup lang="ts">
import SiteLogImg from '@/assets/png/site_logo.png'
import { ref, type Ref } from 'vue'
import { useRouter } from 'vue-router'
import { useDisplay } from 'vuetify'

const router = useRouter()
const { mdAndUp } = useDisplay()
const isShowNavIcon: Ref<boolean> = ref(false)

const headerItems = [
  {
    title: 'Home',
    path: '/',
    icon: 'mdi-home'
  },
  {
    title: 'About Me',
    path: '/about_me',
    icon: 'mdi-account-tie'
  },
  {
    title: 'Work',
    path: '/work',
    icon: 'mdi-application-brackets'
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: 'mdi-tooltip-text-outline'
  }
]
</script>
<template>
  <v-app-bar flat density="compact" class="text-primary" scroll-behavior="hide">
    <v-app-bar-nav-icon
      v-if="!mdAndUp"
      variant="plain"
      @click.stop="isShowNavIcon = !isShowNavIcon"
    ></v-app-bar-nav-icon>
    <v-btn class="text-subtitle-1" @click="router.push('/')">
      <template v-slot:prepend>
        <v-img :src="SiteLogImg" width="30" height="30" />
      </template>
      <span class="font-weight-bold">BBB-SQUASH</span>
    </v-btn>
    <template v-if="mdAndUp">
      <v-spacer />
      <v-btn
        v-for="(item, index) in headerItems"
        :key="index"
        @click="router.push(item.path)"
        class="font-weight-bold text-capitalize text-body-2"
      >
        <v-icon class="mr-1" :icon="item.icon"></v-icon>
        {{ item.title }}
      </v-btn>
    </template>
  </v-app-bar>

  <v-navigation-drawer v-model="isShowNavIcon" location="left" temporary>
    <v-list nav>
      <v-list-item
        v-for="(item, index) in headerItems"
        :key="index"
        @click="router.push(item.path)"
      >
        <template v-slot:prepend>
          <v-icon :icon="item.icon" color="primary" />
        </template>
        <template v-slot:title>
          <span class="font-weight-medium text-black">{{ item.title }}</span>
        </template>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
