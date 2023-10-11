<template>
  <section id="skill">
    <v-container>
      <v-row
        no-gutters
        class="justify-center mb-6"
      >
        <h1 class="page-title font-weight-bold text-center main--text">
          Work
        </h1>
      </v-row>
      <v-divider />
      <v-skills :skills="skills" />
      <v-projects :projects="projects" />
    </v-container>
  </section>
</template>

<script>
import Skills from '@/components/modules/Skills/Skills'
import Projects from '@/components/modules/Projects/Projects'
import WorkFrontend from '@/assets/svg/frontend.svg';
import WorkBackend from '@/assets/svg/backend.svg';
import WorkInfrastructure from '@/assets/svg/infrastructure.svg';

export default {
  name: 'Work',
  components: {
    'v-skills': Skills,
    'v-projects': Projects,
    WorkFrontend,
    WorkBackend,
    WorkInfrastructure
  },
  data: function() { 
    return {
      skills: [
        {
          title: 'Frontend',
          icon: WorkFrontend,
          text: '会員サイトのサポートサイトや、ポートフォリオサイト、アプリの課金サイトなど静的Webを作成してきました。その他、WixにてWebページの作成/運用経験があります。',
          capabilities: ['HTML', 'CSS', 'Javascript', 'jQuery', 'React', 'Vuejs', 'Bootstrap', 'Vuetify']
        },
        {
          title: 'Backend',
          icon: WorkBackend,
          text: 'APIサーバ開発、対話型チャットボット/自動ツイートボットにてビジネスロジックの作成、パフォーマンスを意識したDB設計などを行ってまいりました。',
          capabilities: ['Django', 'Nodejs', 'Scala', 'MySQL', 'Stripe']
        },
        {
          title: 'Infrastructure',
          icon: WorkInfrastructure,
          text: '主にAWS環境でWebサーバ、メールサーバ、MQTTブローカーの作成や、ドメイン管理を行っております。その他、OSSをインストールして社内システムの作成/引用経験があります。',
          capabilities: ['AWS', 'Azure', 'Xserver', 'Heroku', 'Nginx', 'Apache', 'EMQX', 'Grafana']
        }
      ],
      projects: [
        {
          'title': '広告運用システム',
          'text': '広告大規模データを使用し、媒体に直接自動入稿するシステム。Vuejs,Scalaで開発。',
          'tools': ['Vuejs', 'Scala', 'AWS'],
          'image': require('@/assets/png/projects/ad_operation.png'), 
          'date': '2023/05',
          'isShow': true
        },
        {
          'title': 'ポートフォリオサイト',
          'text': 'Vuejsを使用して静的Webページを作成したいと思い実装。デザインは極力Vuetifyを使用し、マテリアルデザインを意識して作成。',
          'tools': ['Vuejs', 'AWS', 'Amplify', 'Lambda'],
          'image': require('@/assets/png/projects/web_front.png'), 
          'date': '2023/04',
          'isShow': true
        },
        {
          'title': '自治体向け健康管理アプリ',
          'text': '利用者の日々の健康に関するデータを入力・閲覧するモバイルアプリのサーバ・インフラを担当。アプリ認証や外部APIとの連携を含めた全ての機能を実装。',
          'tools': ['Django', 'AWS', 'EC2', 'Nginx'],
          'image': require('@/assets/png/projects/health_app.png'), 
          'date': '2022/09~2022/12',
          'isShow': true
        },
        {
          'title': '勤怠管理アプリPoC',
          'text': 'ビーコンとモバイル端末を使用し勤怠管理を行うことで、業務効率化ができるかを検証するPoC開発。APIサーバの開発を担当。',
          'tools': ['Django', 'AWS', 'EC2'],
          'image': require('@/assets/png/projects/chatbot.png'), 
          'date': '2022/05~2022/08',
          'isShow': true
        },
        {
          'title': 'ライブ配信アプリ',
          'text': 'サーバ、インフラを担当。APIサーバ、配信サーバの構築、Stripeでの課金処理などを担当。その他、OSSを使用してwikiやチャットなどの社内システム立ち上げも行なった。',
          'tools': ['Nodejs', 'Cloudfront', 'EC2', 'Lambda'],
          'image': require('@/assets/png/projects/live_app.png'), 
          'date': '2022/02~',
          'isShow': true
        },
        {
          'title': '業務効率化ボット',
          'text': '建設業向けに定型業務のステータスを管理するボットを作成。都度次の手順を確認したり、オペレーションミスを無くすことができるよう仕様の検討から参加。',
          'tools': ['Nodejs', 'EC2', 'daab'],
          'image': require('@/assets/png/projects/chatbot.png'), 
          'date': '2021/12~2022/03',
          'isShow': false
        },
        {
          'title': '広報ツイートボット',
          'text': '定期的にwebサイトの情報を取得し未ツイート事項があればツイートするボット。Nodejsでスクレイピングし、データはMySQLで管理。',
          'tools': ['Nodejs', 'LightSail', 'Twitter Developer'],
          'image': require('@/assets/png/projects/tweetbot.png'), 
          'date': '2021/06',
          'isShow': true
        }
      ],
      dialog: false
    }
  }
};
</script>
