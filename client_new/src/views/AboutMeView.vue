<script setup lang="ts">
import type { StrengthFinderItem, SnsItem } from '@/type'
import gitHibLogoImg from '@/assets/svg/github.svg'
import twitterLogoImg from '@/assets/svg/twitter.svg'
import wantedlyLogoImg from '@/assets/svg/wantedly.svg'
import zennLogoImg from '@/assets/svg/zenn.svg'
import profile from '@/components/Profile.vue'
import history from '@/components/History.vue'

const strengthFinderItems: StrengthFinderItem[] = [
  {
    color: 'accent',
    text: 'ポジティブ'
  },
  {
    color: 'accent-dark',
    text: '調和性'
  },
  {
    color: 'accent-dark',
    text: '包含'
  }
]

const snsItems: SnsItem[] = [
  {
    link: 'https://github.com/Mitsuya-bbb',
    icon: gitHibLogoImg
  },
  {
    link: 'https://twitter.com/bbb__squash',
    icon: twitterLogoImg
  },
  {
    link: 'https://www.wantedly.com/id/bbbworksquash',
    icon: wantedlyLogoImg
  },
  {
    link: 'https://zenn.dev/bbb_squash',
    icon: zennLogoImg
  }
]

const historyItems = [
  {
    year: 2023,
    title: '株式会社MAGLAB',
    text: 'センシングシステムや、toC向けのモバイルアプリケーション開発で、スクラッチのバックエンド開発を行っています。',
    remarks: '業務委託',
    dotColor: 'primary'
  },
  {
    year: 2023,
    title: '株式会社サイバーエージェント',
    text: '広告事業に関するシステムのビジネスロジックの作成、大規模アカウントのデータ管理や、データ量の大きいAPIの制御・効率化などを行っております。',
    dotColor: 'accent'
  },
  {
    year: 2022,
    title: 'スタートアップベンチャー企業',
    text: 'ライブ配信アプリの配信サーバの構築、アプリと連携するAPIサーバを担当しておりました。その他、社内システムの立ち上げやKPI可視化ツールの作成を担当しました。',
    remarks: '業務委託',
    dotColor: 'primary'
  },
  {
    year: 2021,
    title: '株式会社チェンジ',
    text: '保険業をメインとしたコンサル業務と、開発側として建設業 / 保険業向けのPoC開発のサーバ側を担当していました。',
    dotColor: 'primary'
  },
  {
    year: 2020,
    title: '株式会社インフラトップ',
    text: '大学在学中に参画し、未経験からエンジニア転職を目指す方に、Ruby on RailsでWebアプリケーションを作成するの学習サポートを行っておりました。',
    remarks: 'インターン',
    dotColor: 'primary'
  },
  {
    year: 2017,
    title: 'INIAD',
    text: '1期生として入学し、コンピュータ・サイエンスを勉強していました。WPT×遺伝的アルゴリズムをテーマに卒業論文を執筆し、学内でちょっとした表彰をしてもらいました。',
    dotColor: 'primary'
  }
]
</script>

<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <h1 class="text-primary font-weight-bold mb-4">About Me</h1>
        <v-divider />
      </v-col>
      <profile :strength-finder-items="strengthFinderItems" :sns-items="snsItems" />
      <history :history-items="historyItems" />
    </v-row>
  </v-container>
</template>
