<template>
  <div class="about-me-contents mb-3 mt-10">
    <v-profile></v-profile>
    <v-container>
      <v-row no-gutters class="justify-center mb-6">
        <v-timeline side="end" :dense="$vuetify.breakpoint.smAndDown">
          <v-timeline-item
            v-for="(history, index) in histories"
            :key="index"
            size="small"
            :color="history.dotColor"
            >
            <template v-slot:opposite>
              <div
              class="pt-1 pl-3 headline font-weight-bold main--text"
              v-text="history.year"/>
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
  </div>
</template>

<script>
// import Profile from '@/components/modules/Profile';
import Profile from '@/components/modules/Profile';
// import History from '@/components/modules/History';

export default {
  name: 'AboutMe',
  components: { 'v-profile': Profile },

  data: function () {
    return { histories: [
      {
        year: 2023,
        title: '株式会社サイバーエージェント',
        text: '広告事業に関するシステムのビジネスロジックの作成、大規模アカウントのデータ管理や、データ量の大きいAPIの制御・効率化などを行っております。',
        remarks: null,
        dotColor: 'accent'
      },
      {
        year: 2022,
        title: 'スタートアップベンチャー企業',
        text: 'ライブ配信アプリの配信サーバの構築、アプリと連携するAPIサーバを担当しておりました。その他、社内システムの立ち上げやKPI可視化ツールの作成を担当しました。',
        remarks: '業務委託',
        dotColor: 'main'
      },
      {
        year: 2021,
        title: '株式会社チェンジ',
        text: '保険業をメインとしたコンサル業務と、開発側として建設業 / 保険業向けのPoC開発のサーバ側を担当していました。',
        remarks: null,
        dotColor: 'main'
      },
      {
        year: 2020,
        title: '株式会社インフラトップ',
        text: '大学在学中に参画し、未経験からエンジニア転職を目指す方に、Ruby on RailsでWebアプリケーションを作成するの学習サポートを行っておりました。',
        remarks: 'インターン',
        dotColor: 'main'
      },
      {
        year: 2017,
        title: 'INIAD',
        text: '1期生として入学し、コンピュータ・サイエンスを勉強していました。WPT×遺伝的アルゴリズムをテーマに卒業論文を執筆し、学内で表彰 / 学会論文に参加しました。',
        remarks: null,
        dotColor: 'main'
      }
    ] }
  },
  computed: {}
};
</script>

<style scoped>
  .theme--light.v-timeline:before {
    background: var(--v-sub-base);
  }
</style>
