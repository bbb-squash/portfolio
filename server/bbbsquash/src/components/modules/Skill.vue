<template>
  <section id="skill">
    <v-row justify="center" class="contents-header">
      <h1 class="text-h3">Skill</h1>
    </v-row>
    <v-row justify="center mt-4">
      <template v-for="(content, index) in contents">

        <v-col :key="index" cols="3" class="mr-5 mb-5 text-center skill-content rounded-lg elevation-6">
          <v-btn @click="openDialog(index)" class="content-button rounded-lg">
            <div :style="setBackgroundImageStyle(index)"></div>
            <p class="content-title text-body-1">{{ content.title }}</p>
          </v-btn>
        </v-col>
        
        <!-- クリック時に表示するコンテンツ -->
        <v-dialog :key="content.title" width="700" height: v-model="content.dialog">
          <v-container class="dialog-message text-center">
            <v-layout wrap class="dialog-header">
              <v-flex xs12 sm12 md12>
                <h1>{{ content.title }}</h1>
              </v-flex>
            </v-layout>
            <v-layout wrap :style="setDialogImageStyle(index)"></v-layout>
            <v-divider></v-divider>
            <v-layout wrap class="dialog-content align-center">
              <v-flex xs12 sm2 md2>
                <h2>概要</h2>
              </v-flex>
              <v-flex xs12 sm10 md10 class="text-left">
                <p>{{ convertArrayToText(index) }}</p>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
            <v-layout wrap class="dialog-content">
              <v-flex xs12 sm2 md2>
                <h2 style="padding: 30% 0;">使用技術</h2>
              </v-flex>
              <v-flex xs12 sm10 md10 class="clearfix">
                <template v-for="(logo, index) in content.tec" >
                  <div :key="index" :style="setDialogLogo(content.tec, index)"></div>
                </template>
              </v-flex>
            </v-layout>
            <v-divider></v-divider>
          </v-container>
        </v-dialog>

      </template>
    </v-row>
  </section>
</template>

<style>
  .clearfix:after {
    content: ""; 
    clear: both;
    display: block;
  }

  .skill-content {
    height: 200px; 
    padding: 0;
  }

  img.content-img {
    width: 100%;
    height: 85%;
  }

  p.content-title {
    position: absolute; /*自由に配置する指定*/
    bottom: 0; /*下寄せの指定*/
    left: 0;
    right: 0;
    margin: auto;
  }

  .content-button {
    width: 100%;
    position: relative;
  }

  .v-btn:not(.v-btn--round).v-size--default {
    height: 100%;
    padding: 0;
  }

  .v-btn {
    display: block;
  }

  .v-btn__content {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 8px 8px 0 0 !important;
  }

  .dialog-header {
    height: 10%;
  }

  .dialog-message {
    height: 600px;
    white-space: break-spaces;
    background-color: white;
  }

  .dialog-content {
    height: 18.5%;
    margin-top: 1.5%;

  }

</style>

<script>

export default {
  name: 'Skill',
  components: {
  },

  data: () => ({
    contents: [
      { 
        title: 'ポートフォリオサイト', 
        introduction: ['vue + 〇〇で実装。', 'モダンなフロント言語を使用した開発を行っていなかったため、トレーニングの意味も込めて作成。', '調べながら、合間に時間に作成して何だかんだ2週間くらいかかりました。'], 
        img: 'portfolio_screen.png', 
        tec: ['vue-logo.png', 'express-logo.png', 'lightsail-logo.png'], 
        dialog: false 
      },
      { 
        title: '介護業界向けwebサービス', 
        introduction: ['介護業界に知人がいる友人が耳にした、実際の介護現場の課題を解決できるようなWebサービスを製作中。', 'モバイルアプリと連携できるようになるまで作り込みたい。'], 
        img: 'preparing.png', 
        tec: ['vue-logo.png', 'rails-logo.png', 'mysql-logo.png', 'rds-logo.png', 'lightsail-logo.png'], 
        dialog: false 
      },
      { 
        title: 'ツイートボット', 
        introduction: ['Twitterのコンテンツ拡充、情報発信のため作成。', '定型文ではなく、webスクレイピングをして得られた情報をツイートできるよう、サーバで定期処理するように実装。'], 
        img: 'tweetbot.png', 
        tec: ['nodejs-logo.png', 'mysql-logo.png', 'tweet-api-logo.png', 'lightsail-logo.png'], 
        dialog: false 
      },
      { 
        title: 'アセスメントツール', 
        introduction: ['アンケートフォームから回答した結果を集計し、採点・レポート作成を行うシステムを構築。', 'google workspace + awsで実装。'], 
        img: 'radar_chart.png', 
        tec: ['lambda-logo.png', 's3-logo.png', 'ses-logo.png', 'google-api-logo.png'], 
        dialog: false 
      },
      { 
        title: 'メール配信サービス', 
        introduction: ['リアルタイム情報を分析し、条件にマッチした'], 
        img: 'mail_service.png', 
        tec: ['azure-vm-logo.png', 'blob-logo.png', 'sendgrid-logo.png', 'pandas-logo.png'], 
        dialog: false 
      },
      { 
        title: '業務効率化チャットボット', 
        introduction: [], 
        img: 'chatbot.png', 
        tec: ['nodejs-logo.png', 's3-logo.png', 'lightsail-logo.png'], 
        dialog: false 
      }
      
    ],
    dialog: false
  }),
  computed: {
  },
  methods: {
    openDialog: function(index) {
      this.contents[index].dialog = true;
    },
    setBackgroundImageStyle: function(index) {
      let file = this.contents[index].img;
      return {
        backgroundImage: 'url(' + require(`@/assets/${file}`) + ')',
        width: '100%',
        height: '85%',
        backgroundSize: 'contain',
        backgroundPosition: '50%',
        borderRadius: '8px 8px 0 0 !important'
      };
    },
    setDialogImageStyle: function(index) {
      let file = this.contents[index].img;
      return {
        backgroundImage: 'url(' + require(`@/assets/${file}`) + ')',
        width: '90%',
        height: '49.2%',
        backgroundSize: 'contain',
        backgroundPosition: '50%',
        margin: '0 auto 0.8% auto'
      };
    },
    setDialogLogo: function(logos, index) {
      return {
        backgroundImage: 'url(' + require(`@/assets/${logos[index]}`) + ')',
        width: '20%',
        height: '100%',
        backgroundSize: 'contain',
        backgroundPosition: '50%',
        margin: '0 auto 0.8% auto',
        float: 'left'
      };
    },
    convertArrayToText: function(index) {
      return this.contents[index].introduction.join('\n');
    }
  }
};
</script>