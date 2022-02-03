<template>
  <div>
    <v-skill></v-skill>
    <v-research></v-research>
  </div>
</template>

<script>
import Skill from '@/components/modules/Skill';
import Research from '@/components/modules/Research';

export default {
  name: 'AboutMe',
  components: {
    'v-skill': Skill,
    'v-research': Research,
  },

  data: () => ({
  }),
  computed: {
  }
};
</script>

<style>
</style>