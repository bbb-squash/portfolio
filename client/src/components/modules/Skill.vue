<template>
  <section id="skill">
    <v-container>
      <v-row no-gutters class="justify-center mb-6">
        <h1 class="page-title font-weight-bold text-center main--text">Work</h1>
      </v-row>
      <v-divider></v-divider>
      <v-row no-gutters  class="justify-center">
        <v-btn 
          v-for="(content, index) in contents"
          :key="index" 
          @click="content.dialog = true"
          class="rounded-lg elevation-0 common_w-30"
          :class="{'mr-6': (index+1) % 3 != 0 }">
          <!-- <div :style="setBackgroundImageStyle(content.img)"></div> -->
          <img :src="contentimg_require">
          <p class="text-body-1">{{ content.title }}</p>
        </v-btn>
      </v-row>
      <!-- <v-btn 
        v-for="(content, index) in contents"
        :key="index" 
        @click="content.dialog = true"
        class="content-button rounded-lg elevation-0">
        <div :style="setBackgroundImageStyle(index)"></div>
        <p class="content-title text-body-1">{{ content.title }}</p>
      </v-btn> -->
      <v-row no-gutters max-width="1200" justify="center">
        <v-col 
          v-for="(content, index) in contents"
          :key="index" 
          cols="3" 
          class="mr-5 mb-5 text-center skill-content rounded-lg elevation-0">
          <v-btn 
            @click="content.dialog = true"
            class="content-button rounded-lg elevation-0">
            <div :style="setBackgroundImageStyle(content.img)"></div>
            <p class="content-title text-body-1">{{ content.title }}</p>
          </v-btn>
          <!-- クリック時に表示するコンテンツ -->
          <v-dialog :key="content.title" width="700" height: v-model="content.dialog">
            <v-container class="dialog-message text-center">
              <v-layout wrap class="dialog-header">
                <v-flex xs12 sm12 md12>
                  <h1>{{ content.title }}</h1>
                </v-flex>
              </v-layout>
              <v-layout wrap :style="setDialogImageStyle(content.img)"></v-layout>
              <v-divider></v-divider>
              <v-layout wrap class="dialog-content align-center">
                <v-flex xs12 sm2 md2>
                  <h2 style="padding-bottom: 15%;">概要</h2>
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
                  <div
                    v-for="(logo, index) in content.tec" 
                    :key="index" :style="setDialogLogo(content.tec, index)" 
                  />
                </v-flex>
              </v-layout>
              <v-divider></v-divider>
            </v-container>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
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

  /* .v-btn:not(.v-btn--round).v-size--default {
    height: 100%;
    padding: 0;
  } */

  .v-btn {
    display: block;
  }

  /* .v-btn__content {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 8px 8px 0 0 !important;
  } */

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
        introduction: ['よく見る自己紹介サイトを作ってみようというモチベーションで作成開始。', 'モダンなフロント言語を使用した開発を行っていなかったため、トレーニングの意味も込めてVue.jsを採用。', '調べながら、合間に時間に作成して何だかんだ1ヶ月くらいかかりました。'], 
        img: 'portfolio_screen.png', 
        img_require: require('@/assets/portfolio_screen.png'),
        tec: ['vue-logo.png', 'express-logo.png', 'lightsail-logo.png'], 
        dialog: false 
      },
      { 
        title: '介護業界向けwebサービス', 
        introduction: ['介護業界向けSNSサービス。', '従業員の方のBPRの他に、介護業界に知人がいる友人が耳にした、実際の介護現場の課題を解決できるような機能を構築中。', 'モバイルアプリと連携できるようになるまで作り込みたい。'], 
        img: 'preparing.png', 
        img_require: require('@/assets/preparing.png'),
        tec: ['vue-logo.png', 'rails-logo.png', 'mysql-logo.png', 'rds-logo.png', 'lightsail-logo.png'], 
        dialog: false 
      },
      { 
        title: 'ツイートボット', 
        introduction: ['Twitterで情報の更新があった場合にツイートするシステム。', 'Twitterアカウントのコンテンツ拡充、情報発信のため作成。', 'そのため、webスクレイピングをし得られた情報をツイートできるよう、サーバで定期処理するように実装。'], 
        img: 'tweetbot.png', 
        img_require: require('@/assets/tweetbot.png'),
        tec: ['nodejs-logo.png', 'mysql-logo.png', 'tweet-api-logo.png', 'lightsail-logo.png'], 
        dialog: false 
      },
      { 
        title: 'アセスメントツール', 
        introduction: ['アンケートフォームから回答した結果を集計し、採点・レポート作成を行うシステムを構築。', 'Google API + AWSで実装。'], 
        img: 'radar_chart.png', 
        img_require: require('@/assets/radar_chart.png'),
        tec: ['lambda-logo.png', 's3-logo.png', 'ses-logo.png', 'google-api-logo.png'], 
        dialog: false 
      },
      { 
        title: 'メール配信サービス', 
        introduction: ['リアルタイム情報を分析し、条件にマッチした対象者へメールを配信するシステム。', '分析処理が専門的な技術かつCPUを大量に消費するため、サーバサイズの検討がいつも以上に必要になる案件であった。', ], 
        img: 'mail_service.png', 
        img_require: require('@/assets/mail_service.png'),
        tec: ['azure-vm-logo.png', 'blob-logo.png', 'sendgrid-logo.png', 'pandas-logo.png'], 
        dialog: false 
      },
      { 
        title: '業務効率化チャットボット', 
        introduction: ['日常業務の定型処理を効率化するチャットボット。', 'アジャイル開発で何度もサイクルを回し改修を重ねた。', '基本設計から実装・テスト・インフラ構築まで全て担当。', ], 
        img: 'chatbot.png', 
        img_require: require('@/assets/chatbot.png'),
        tec: ['nodejs-logo.png', 's3-logo.png', 'ec2-logo.png'], 
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
    setBackgroundImageStyle: function(img) {
      console.log('img: ', img);
      return {
        backgroundImage: 'url(' + require(`@/assets/${img}`) + ')',
        width: '100%',
        height: '85%',
        backgroundSize: 'contain',
        backgroundPosition: '50%',
        borderRadius: '8px 8px 0 0 !important'
      };
    },
    setDialogImageStyle: function(img) {
      return {
        backgroundImage: 'url(' + require(`@/assets/${img}`) + ')',
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