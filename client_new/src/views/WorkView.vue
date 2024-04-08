<script setup lang="ts">
import Skills from '@/components/Skills.vue'

const skillItems = [
  {
    title: 'Frontend',
    icon: 'mdi-application-outline',
    text: '会員サイトのサポートサイトや、ポートフォリオサイト、アプリの課金サイトなど静的Webを作成してきました。その他、WixにてWebページの作成/運用経験があります。',
    capabilities: [
      'HTML',
      'CSS',
      'Javascript',
      'jQuery',
      'TypeScript',
      'React',
      'Vuejs',
      'Bootstrap',
      'Vuetify'
    ]
  },
  {
    title: 'Backend',
    icon: 'mdi-desktop-classic',
    text: 'APIサーバ開発、対話型チャットボット/自動ツイートボットにてビジネスロジックの作成、パフォーマンスを意識したDB設計などを行ってまいりました。',
    capabilities: ['Django', 'Nodejs', 'NestJS', 'Prisma', 'Scala', 'MySQL', 'Stripe']
  },
  {
    title: 'Infrastructure',
    icon: 'mdi-server-network',
    text: '主にAWS環境でWebサーバ、メールサーバ、MQTTブローカーの作成や、ドメイン管理を行っております。その他、OSSをインストールして社内システムの作成/引用経験があります。',
    capabilities: ['AWS', 'Azure', 'Xserver', 'Heroku', 'Nginx', 'Apache', 'EMQX', 'Grafana']
  }
]
</script>
<template>
  <v-container>
    <v-row>
      <v-col class="text-center">
        <h1 class="text-primary font-weight-bold mb-4">Work</h1>
        <v-divider />
      </v-col>
    </v-row>
    <skills :skill-items="skillItems" />
  </v-container>
</template>
