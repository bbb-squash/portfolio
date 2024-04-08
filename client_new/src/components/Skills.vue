<script setup lang="ts">
import PageContentLayout from '@/layouts/PageContentLayout.vue'

export type SkillItem = {
  title: string
  icon: string
  text: string
  capabilities: string[]
}

const props = defineProps<{
  skillItems: SkillItem[]
}>()
</script>

<template>
  <page-content-layout title="Skills">
    <template v-slot:description>
      バッグエンドはPython（Django）、Nodejs、Scalaをメインに使用しています。<br />
      インフラ環境はAWSでの構築経験が多く、基本的なサービスの多くは使用経験があります。
    </template>
    <template v-slot:content>
      <v-col>
        <v-row>
          <v-col v-for="(item, index) in props.skillItems" :key="index" sm="12" md="4">
            <div class="box-shadow rounded-lg border-t-xl border-secondary h-100 pa-3">
              <div class="d-flex align-center">
                <div
                  class="w-38px h-38px border-md rounded-circle border-accent d-flex justify-center align-center mr-2"
                >
                  <v-icon size="24" color="accent" :icon="item.icon" />
                </div>
                <h3 class="font-weight-black text-primary">{{ item.title }}</h3>
              </div>
              <p class="text-body-2 my-3 min-h-80px">{{ item.text }}</p>
              <span
                v-for="(capability, i) in item.capabilities"
                :key="i"
                class="text-accent-dark text-caption border-sm border-accent-dark rounded pa-1 mr-1 mb-1 d-inline-block"
              >
                <strong>{{ capability }}</strong>
              </span>
            </div>
          </v-col>
        </v-row>
      </v-col>
    </template></page-content-layout
  >
</template>
<style scoped>
.border-secondary {
  border-color: rgb(var(--v-theme-secondary)) !important;
}
.border-accent {
  border-color: rgb(var(--v-theme-accent)) !important;
}
.w-38px {
  width: 38px;
}
.h-38px {
  height: 38px;
}
.min-h-80px {
  min-height: 80px;
}
</style>
