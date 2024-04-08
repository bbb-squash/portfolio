<script setup lang="ts">
import Skills from '@/components/Skills.vue'
import Projects, { type ProjectItem } from '@/components/Projects.vue'
import ProjectAdOperation from '@/assets/png/projects/ad_operation.png'
import ProjectWebFront from '@/assets/png/projects/web_front.png'
import ProjectHealthApp from '@/assets/png/projects/health_app.png'
import ProjectChatBot from '@/assets/png/projects/chatbot.png'
import ProjectLiveApp from '@/assets/png/projects/live_app.png'
import ProjectTweetBot from '@/assets/png/projects/tweetbot.png'

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

const projectItems: ProjectItem[] = [
  {
    title: '広告運用システム',
    text: '広告大規模データを使用し、媒体に直接自動入稿するシステム。Vuejs,Scalaで開発。',
    tools: ['Vuejs', 'Scala', 'AWS'],
    image: ProjectAdOperation,
    date: '2023/05'
  },
  {
    title: 'ポートフォリオサイト',
    text: 'Vuejsを使用して静的Webページを作成したいと思い実装。デザインは極力Vuetifyを使用し、マテリアルデザインを意識して作成。',
    tools: ['Vuejs', 'TypeScript', 'AWS', 'Amplify', 'Lambda'],
    image: ProjectWebFront,
    date: '2023/04'
  },
  {
    title: '自治体向け健康管理アプリ',
    text: '利用者の日々の健康に関するデータを入力・閲覧するモバイルアプリのサーバ・インフラを担当。アプリ認証や外部APIとの連携を含めた全ての機能を実装。',
    tools: ['Django', 'AWS', 'EC2', 'Nginx'],
    image: ProjectHealthApp,
    date: '2022/09~2022/12'
  },
  {
    title: '勤怠管理アプリPoC',
    text: 'ビーコンとモバイル端末を使用し勤怠管理を行うことで、業務効率化ができるかを検証するPoC開発。APIサーバの開発を担当。',
    tools: ['Django', 'AWS', 'EC2'],
    image: ProjectChatBot,
    date: '2022/05~2022/08'
  },
  {
    title: 'ライブ配信アプリ',
    text: 'サーバ、インフラを担当。APIサーバ、配信サーバの構築、Stripeでの課金処理などを担当。その他、OSSを使用してwikiやチャットなどの社内システム立ち上げも行なった。',
    tools: ['Nodejs', 'Cloudfront', 'EC2', 'Lambda'],
    image: ProjectLiveApp,
    date: '2022/02~'
  },
  {
    title: '広報ツイートボット',
    text: '定期的にwebサイトの情報を取得し未ツイート事項があればツイートするボット。Nodejsでスクレイピングし、データはMySQLで管理。',
    tools: ['Nodejs', 'LightSail', 'Twitter Developer'],
    image: ProjectTweetBot,
    date: '2021/06'
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
    <projects :project-items="projectItems" />
  </v-container>
</template>
