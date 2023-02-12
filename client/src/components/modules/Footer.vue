<template>
  <v-footer>
    <v-row justify="center" no-gutters>
      <!-- <v-btn
        v-for="content in contents"
        :key="content"
        color="white"
        variant="text"
        class="mx-2"
        rounded="xl"
      >
        {{ content.path_name }}
      </v-btn> -->
      <v-col class="text-center mt-4 main--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>BBB-SQUASH</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>


<script>

export default {
  name: 'Footer',
  props: {
      contents: {
        type: Array,
      }
    },
};
</script>