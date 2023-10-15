<template>
  <section id="history">
    <v-container>
      <h2 class="page-sub-title">
        History
      </h2>
      <p class="page-sub-introduction">
        小学生の頃からパソコンは使用し始め、Youtubeやニコニコ動画を見ていました。<br>
        その後、大学生の時からプログラムを勉強し始め、コンサル会社・広告事業会社のほか、学生時代のインターン / 業務委託を含めると4社で勤務した経験があります。
      </p>
      <v-row
        no-gutters
        class="justify-center mb-6"
      >
        <v-timeline
          side="end"
          :dense="$vuetify.breakpoint.smAndDown"
        >
          <v-timeline-item
            v-for="(history, index) in histories"
            :key="index"
            size="small"
            :color="history.dotColor"
          >
            <template v-slot:opposite>
              <div
                class="pt-1 pl-3 headline font-weight-bold main--text"
                v-text="history.year"
              />
            </template>
            <div class="history-container">
              <h3>
                {{ history.title }}
                <span v-if="history.remarks">{{ history.remarks }}</span>
              </h3>
              <p>{{ history.text }}</p>
            </div>
          </v-timeline-item>
        </v-timeline>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'History',
  props: { histories: {
    type: Array,
    required: true
  } }
};
</script>
<style src="./style.css" scoped></style>
