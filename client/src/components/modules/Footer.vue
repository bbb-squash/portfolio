<template>
  <v-footer>
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="text-center mt-4 main--text"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>BBB-SQUASH</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>


<script>

export default { name: 'Footer' };
</script>
