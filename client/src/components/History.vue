<script setup lang="ts">
import type { HistoryItem } from '@/type'
import PageContentLayout from '@/layouts/PageContentLayout.vue'
import { useDisplay } from 'vuetify'

const props = defineProps<{
  historyItems: HistoryItem[]
}>()

const { smAndDown } = useDisplay()
</script>

<template>
  <page-content-layout title="History">
    <template v-slot:description>
      小学生の頃からパソコンは使用し始め、Youtubeやニコニコ動画を見ていました。<br />
      その後、大学生の時からプログラムを勉強し始め、コンサル会社・広告事業会社のほか、学生時代のインターン
      / 業務委託を含めると4社で勤務した経験があります。
    </template>
    <template v-slot:content>
      <v-col>
        <v-timeline :density="smAndDown ? 'compact' : 'default'">
          <v-timeline-item
            v-for="(item, index) in props.historyItems"
            :key="index"
            :dot-color="item.dotColor"
          >
            <template v-slot:opposite>
              <div class="text-h6 font-weight-bold text-primary">
                {{ item.year }}
              </div>
            </template>
            <div class="box-shadow rounded-lg px-3 py-5 text-left">
              <p class="text-primary text-h6 mb-3">
                <strong>{{ item.title }}</strong>
                <span
                  v-if="item.remarks"
                  class="bg-accent-dark text-subtitle-2 py-1 px-2 ml-2 rounded-lg d-inline-block"
                  ><strong>{{ item.remarks }}</strong></span
                >
              </p>
              <p>{{ item.text }}</p>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </template>
  </page-content-layout>
</template>
<style scoped>
.white-space-nowrap {
  white-space: nowrap;
}
</style>
