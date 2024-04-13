<script setup lang="ts">
type Props = {
  title: string
}

const props: Props = defineProps<Props>()
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <p class="text-h5 text-primary font-weight-black mb-4 d-flex justify-center align-center">
          <v-icon icon="mdi-square" size="x-small" color="accent" class="mr-2" />
          {{ props.title }}
        </p>
        <p class="text-subtitle-2 text-grey-darken-1">
          <slot name="description" />
        </p>
      </v-col>
      <slot name="content" />
    </v-row>
  </v-container>
</template>
