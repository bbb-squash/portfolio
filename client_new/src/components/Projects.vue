<script setup lang="ts">
import PageContentLayout from '@/layouts/PageContentLayout.vue'

export type ProjectItem = {
  title: string
  text: string
  tools: string[]
  image: string
  date: string
}

const props = defineProps<{
  projectItems: ProjectItem[]
}>()
</script>

<template>
  <page-content-layout title="Projects">
    <template v-slot:description>
      これまでに開発してきたプロジェクトの一覧です。<br />
      小規模な受託開発がメインですが、スピード感を持って実装しています。
    </template>
    <template v-slot:content>
      <v-col v-for="(item, index) in props.projectItems" :key="index" xs="12" sm="12" md="4">
        <div class="box-shadow rounded-lg h-100">
          <v-img :src="item.image" class="rounded-t-lg" max-height="200" cover />
          <div class="pa-3">
            <h4 class="text-primary">{{ item.title }}</h4>
            <p class="text-grey-darken-1 text-body-2 min-h-80px">{{ item.text }}</p>
          </div>
          <div class="px-3 mb-3">
            <span
              v-for="(tool, i) in item.tools"
              :key="i"
              class="text-accent-dark text-caption border-sm border-accent-dark rounded pa-1 mr-1 mb-1 d-inline-block"
            >
              <strong>{{ tool }}</strong>
            </span>
          </div>
        </div>
      </v-col>
    </template>
  </page-content-layout>
</template>
<style scoped>
.border-accent-dark {
  border-color: rgb(var(--v-theme-accent-dark)) !important;
}
</style>
