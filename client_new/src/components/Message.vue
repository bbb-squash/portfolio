<script setup lang="ts">
import type { SnsItem } from '@/type'
import PageContentLayout from '@/layouts/PageContentLayout.vue'
import { useDisplay } from 'vuetify'
const { mdAndUp } = useDisplay()

const props = defineProps<{
  snsItems: SnsItem[]
}>()
</script>

<template>
  <page-content-layout title="Message">
    <template v-slot:description>
      <p class="mb-5">
        ここまで読んでいただき、誠にありがとうございました。<br />
        もし私にご興味を持たれた方がいらっしゃいましたら、フォームからメッセージいただけると嬉しいです。<br />
        後日、メールにてご連絡いたします。
      </p>
      <div :class="mdAndUp ? ['d-flex', 'justify-center', 'align-center'] : []">
        <div :class="[...(mdAndUp ? ['mr-2'] : ['mb-2'])]">
          <span
            :class="[
              'font-weight-bold',
              'max-w-290px',
              'text-white',
              'px-3',
              'bg-secondary',
              'rounded-xl',
              'd-inline-block',
              ...(mdAndUp ? ['h-36px'] : ['h-60px'])
            ]"
          >
            <v-icon
              icon="mdi-email"
              color="white"
              size="36"
              :class="mdAndUp ? ['mr-2'] : ['d-block', 'mx-auto']"
            />
            bbb.worksquash@gmail.com
          </span>
        </div>
        <a
          v-for="(item, index) in props.snsItems"
          :key="index"
          :href="item.link"
          target="_blank"
          rel="noreferrer"
          class="mx-2"
        >
          <v-btn icon variant="text" class="bg-secondary">
            <v-img :src="item.icon" width="36" height="36" />
          </v-btn>
        </a>
      </div>

      <div class="box-shadow"></div> </template
  ></page-content-layout>
</template>

<style scoped>
.border-secondary {
  border-color: rgb(var(--v-theme-secondary)) !important;
}
</style>
