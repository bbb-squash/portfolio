<template>
  <section id="skill">
    <v-container>
      <v-row no-gutters class="justify-center mb-6">
        <h1 class="page-title font-weight-bold text-center main--text">Work</h1>
      </v-row>
      <v-divider></v-divider>
      <h2 class="page-sub-title">Skills</h2>
      <p class="page-sub-introduction">
        バッグエンドはPython（Django）、Nodejs、Scalaをメインに使用しています。<br />
        インフラ環境はAWSでの構築経験が多く、基本的なサービスの多くは使用経験があります。
      </p>
      <v-row no-gutters class="pa-4">
        <v-col v-for="(skill, index) in skills" :key="index" cols="12" sm="12"
          md="4" class="mb-3">
          <div class="skill-container ma-2 pa-2">
            <div class="container-header mb-2 clearfix">
              <div class="icon-box">
                <component :is="skill.icon" class="skill-container-title-icon"/>
              </div>
              <div class="title-box">
                <p>{{ skill.title }}</p>
              </div>
            </div>
            <p class="skill-text">{{ skill.text }}</p>
            <span v-for="(capability, index) in skill.capabilities" :key="index" class="skill-capability">{{ capability }}</span>
          </div>
        </v-col>
      </v-row>
      <h2 class="page-sub-title">Projects</h2>
      <p class="page-sub-introduction">
        これまでに開発してきたプロジェクトの一覧です。<br />
        小規模な受託開発がメインですが、スピード感を持って実装しています。
      </p>
      <v-row no-gutters class="pa-4">
        <template v-for="(project, index) in projects">
          <v-col v-if="project.isShow" :key="index" cols="12" sm="6" md="4" class="mb-2">
            <div class="project-container">
              <img :src="project.image">
              <div class="pa-2">
                <p class="project-title">{{ project.title }}</p>
                <span class="project-text">{{ project.text }}</span>
                <p class="project-date">{{ project.date }}</p>
                <span v-for="(tool, index) in project.tools" :key="index" class="skill-capability">{{ tool }}</span>
              </div>
            </div>
          </v-col>
          </template>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import WorkFrontend from '@/assets/img/work-frontend.svg';
import WorkBackend from '@/assets/img/work-backend.svg';
import WorkInfrastructure from '@/assets/img/work-infrastructure.svg';

export default {
  name: 'Work',
  components: {
    WorkFrontend: WorkFrontend,
    WorkBackend: WorkBackend,
    WorkInfrastructure: WorkInfrastructure
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
          'image': require('@/assets/ad_operation.png'), 
          'date': '2023/05',
          'isShow': true
        },
        {
          'title': 'ポートフォリオサイト',
          'text': 'Vuejsを使用して静的Webページを作成したいと思い実装。デザインは極力Vuetifyを使用し、マテリアルデザインを意識して作成。',
          'tools': ['Vuejs', 'AWS', 'Amplify', 'Lambda'],
          'image': require('@/assets/web_front.png'), 
          'date': '2023/04',
          'isShow': true
        },
        {
          'title': '自治体向け健康管理アプリ',
          'text': '利用者の日々の健康に関するデータを入力・閲覧するモバイルアプリのサーバ・インフラを担当。アプリ認証や外部APIとの連携を含めた全ての機能を実装。',
          'tools': ['Django', 'AWS', 'EC2', 'Nginx'],
          'image': require('@/assets/health_app.png'), 
          'date': '2022/09~2022/12',
          'isShow': true
        },
        {
          'title': '勤怠管理アプリPoC',
          'text': 'ビーコンとモバイル端末を使用し勤怠管理を行うことで、業務効率化ができるかを検証するPoC開発。APIサーバの開発を担当。',
          'tools': ['Django', 'AWS', 'EC2'],
          'image': require('@/assets/chatbot.png'), 
          'date': '2022/05~2022/08',
          'isShow': true
        },
        {
          'title': 'ライブ配信アプリ',
          'text': 'サーバ、インフラを担当。APIサーバ、配信サーバの構築、Stripeでの課金処理などを担当。その他、OSSを使用してwikiやチャットなどの社内システム立ち上げも行なった。',
          'tools': ['Nodejs', 'Cloudfront', 'EC2', 'Lambda'],
          'image': require('@/assets/live_app.png'), 
          'date': '2022/02~',
          'isShow': true
        },
        {
          'title': '業務効率化ボット',
          'text': '建設業向けに定型業務のステータスを管理するボットを作成。都度次の手順を確認したり、オペレーションミスを無くすことができるよう仕様の検討から参加。',
          'tools': ['Nodejs', 'EC2', 'daab'],
          'image': require('@/assets/chatbot.png'), 
          'date': '2021/12~2022/03',
          'isShow': false
        },
        {
          'title': '広報ツイートボット',
          'text': '定期的にwebサイトの情報を取得し未ツイート事項があればツイートするボット。Nodejsでスクレイピングし、データはMySQLで管理。',
          'tools': ['Nodejs', 'LightSail', 'Twitter Developer'],
          'image': require('@/assets/tweetbot.png'), 
          'date': '2021/06',
          'isShow': true
        }
      ],
      dialog: false
    }
  },
  computed: {}
};
</script>
