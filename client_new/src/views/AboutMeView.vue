<script setup lang="ts">
import gitHibLogoImg from '@/assets/svg/github.svg'
import twitterLogoImg from '@/assets/svg/twitter.svg'
import wantedlyLogoImg from '@/assets/svg/wantedly.svg'
import zennLogoImg from '@/assets/svg/zenn.svg'
import type { StrengthFinderItem, SnsItem } from '@/components/Profile.vue'
import profile from '@/components/Profile.vue'

const strengthFinderItems: StrengthFinderItem[] = [
  {
    color: 'accent',
    text: 'ポジティブ'
  },
  {
    color: 'accent-dark',
    text: '調和性'
  },
  {
    color: 'accent-dark',
    text: '包含'
  }
]

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
        <h1 class="text-primary font-weight-bold mb-4">About Me</h1>
        <v-divider />
        <profile :strength-finder-items="strengthFinderItems" :sns-items="snsItems" />
      </v-col>
    </v-row>
  </v-container>
</template>
