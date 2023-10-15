<template>
  <section
    id="about-me"
    class="mb-3 mt-10"
  >
    <v-profile />
    <v-history :histories="histories" />
  </section>
</template>

<script>
import Profile from '@/components/modules/Profile/Profile';
import History from '@/components/modules/History/History';

export default {
  name: 'AboutMe',
  components: {
    'v-profile': Profile, 
    'v-history': History 
  },

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
        text: '1期生として入学し、コンピュータ・サイエンスを勉強していました。WPT×遺伝的アルゴリズムをテーマに卒業論文を執筆し、学内でちょっとした表彰をしてもらいました。',
        remarks: null,
        dotColor: 'main'
      }
    ] }
  }
};
</script>
