<script setup lang="ts">
import type { ProjectItem } from '@/type'
import PageContentLayout from '@/layouts/PageContentLayout.vue'

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
      <v-row>
        <v-col v-for="(item, index) in props.projectItems" :key="index" md="4" sm="6" xs="12">
          <div class="box-shadow rounded-lg h-100 min-w-270px">
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
      </v-row>
    </template>
  </page-content-layout>
</template>
<style scoped>
.border-accent-dark {
  border-color: rgb(var(--v-theme-accent-dark)) !important;
}
</style>
