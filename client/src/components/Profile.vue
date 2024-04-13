<script setup lang="ts">
import type { StrengthFinderItem, SnsItem } from '@/type'
import profileImg from '@/assets/png/profile.png'
import PageContentLayout from '@/layouts/PageContentLayout.vue'
import { useDisplay } from 'vuetify'

const props = defineProps<{
  strengthFinderItems: StrengthFinderItem[]
  snsItems: SnsItem[]
}>()

const { mdAndUp, smAndUp } = useDisplay()
</script>

<template>
  <page-content-layout title="Profile">
    <template v-slot:description>
      簡単な自己紹介と、2021年に実施したストレングスファインダーの結果のうち、上位3つの資質です。<br />
      いずれも「人間関係構築力」に分類されるものでした。
    </template>
    <template v-slot:content>
      <v-col cols="12">
        <div :class="[mdAndUp ? 'd-flex' : undefined, 'rounded-lg', 'box-shadow']">
          <div
            :class="[
              'bg-primary',
              'pa-5',
              'border-accent',
              'text-center',
              ...(mdAndUp
                ? ['rounded-s-lg', 'w-25', 'border-e-xl']
                : ['rounded-t-lg', 'w-100', 'border-b-xl'])
            ]"
          >
            <v-img
              class="border-md border-secondary rounded-circle mx-auto"
              :src="profileImg"
              max-width="200"
              max-height="200"
            />
            <p class="text-white font-weight-black my-5">BBB-SQUASH</p>
          </div>
          <div :class="['rounded-e-lg', 'pa-8', mdAndUp ? 'w-75' : 'w-100']">
            <p class="mb-8">
              都内でソフトウェアエンジニアをしています。メインはバックエンド /
              インフラ領域としており、言語ではPython,
              JavaScript、クラウドサービスではAWSを得意としています。<br />
              コンサル会社での経験を活かし、モノづくりだけではなく提案もできるような、一括りでは表せない人材を目指しています。
            </p>
            <div :class="mdAndUp ? 'd-flex' : undefined">
              <div
                :class="[
                  'text-center',
                  'font-weight-bold',
                  ...(mdAndUp ? ['w-60', 'mr-5'] : ['w-100', 'mb-5'])
                ]"
              >
                <p class="bg-primary rounded-xl text-caption font-weight-bold">
                  ストレングス・ファインダー
                </p>
                <div :class="[...(smAndUp ? ['d-flex', 'justify-space-between'] : []), 'mt-4']">
                  <div
                    v-for="(item, index) in props.strengthFinderItems"
                    :key="index"
                    class="d-flex align-center border-b-md border-secondary py-1 max-w-160px mx-auto"
                  >
                    <v-sheet
                      rounded
                      :color="item.color"
                      width="46"
                      class="text-body-2 font-weight-bold px-3 py-1 mr-1"
                    >
                      {{ index + 1 }}st
                    </v-sheet>
                    <span class="text-body-2 font-weight-bold">{{ item.text }}</span>
                  </div>
                </div>
              </div>
              <div :class="['text-center', ...(mdAndUp ? ['w-40', 'ml-5'] : ['w-100'])]">
                <p class="bg-primary rounded-xl text-caption font-weight-bold">SNS</p>
                <div class="d-flex justify-space-between mt-4">
                  <a
                    v-for="(item, index) in props.snsItems"
                    :key="index"
                    :href="item.link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <v-btn icon variant="text" class="bg-secondary pa-1">
                      <v-img :src="item.icon" width="36" height="36" />
                    </v-btn>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-col>
    </template>
  </page-content-layout>
</template>

<style scoped>
.border-accent {
  border-color: rgb(var(--v-theme-accent)) !important;
}

.border-secondary {
  border-color: rgb(var(--v-theme-secondary)) !important;
}
</style>
