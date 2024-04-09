<script setup lang="ts">
import type { SnsItem } from '@/type'
import gitHibLogoImg from '@/assets/svg/github.svg'
import twitterLogoImg from '@/assets/svg/twitter.svg'
import wantedlyLogoImg from '@/assets/svg/wantedly.svg'
import zennLogoImg from '@/assets/svg/zenn.svg'
import Message from '@/components/Message.vue'

const snsItems: SnsItem[] = [
  {
    link: 'https://github.com/Mitsuya-bbb',
    icon: gitHibLogoImg
  },
  {
    link: 'https://twitter.com/bbb__squash',
    icon: twitterLogoImg
  },
  {
    link: 'https://www.wantedly.com/id/bbbworksquash',
    icon: wantedlyLogoImg
  },
  {
    link: 'https://zenn.dev/bbb_squash',
    icon: zennLogoImg
  }
]
</script>
<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <h1 class="text-primary font-weight-bold mb-4">Contact</h1>
        <v-divider />
      </v-col>
    </v-row>
    <message :sns-items="snsItems" />
  </v-container>
</template>
