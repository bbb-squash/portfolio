<template>
  <div class="about-me-contents mb-3">
    <v-profile></v-profile>
    <v-history></v-history>
  </div>
</template>

<script>
import Profile from '@/components/modules/Profile';
import History from '@/components/modules/History';

export default {
  name: 'AboutMe',
  components: {
    'v-profile': Profile,
    'v-history': History,
  },

  data: () => ({
  }),
  computed: {
  }
};
</script>