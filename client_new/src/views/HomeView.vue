<script setup lang="ts">
import img from '@/assets/png/site_top.png'
import AboutMeView from './AboutMeView.vue'
import { useDisplay } from 'vuetify'
const { mdAndUp } = useDisplay()
</script>

<template>
  <div class="d-flex flex-wrap">
    <v-sheet
      :class="[
        'd-flex',
        'justify-center',
        'flex-fill',
        'bg-grey-lighten-5',
        mdAndUp ? 'w-50' : 'w-100'
      ]"
    >
      <div class="d-flex align-center w-75 h-100">
        <div class="w-100 py-7">
          <p class="text-h4 text-primary font-weight-black mb-3">BBB-<br />SQUASH</p>
          <p>
            都内でソフトウェアエンジニアをしています。 <br />
            バックエンドとインフラがメインです。<br />
            本読んだり、フットサルや散歩して体動かすことが好きです。<br />
            細々とですが、更新してたりします。
          </p>
        </div>
      </div>
    </v-sheet>
    <v-img
      :src="img"
      :class="mdAndUp ? 'w-50' : 'w-100'"
      :min-height="mdAndUp ? undefined : 200"
      :max-height="mdAndUp ? undefined : 300"
      cover
    />
  </div>
  <about-me-view />
</template>
