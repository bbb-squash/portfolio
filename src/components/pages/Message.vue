<template>
  <section id="contact">
    <v-row justify="center" class="mb-2">
      <h1 class="text-h3">Contact</h1>
    </v-row>
    <v-divider class="header-divider"></v-divider>
    <v-layout wrap class="contact-message">
      <v-flex xs12 sm12 md12 class="pr-2 pl-2">
        <div class="pt-3 text-center">
          <p class="contact-text">ここまで読んでいただき、誠にありがとうございました。</p>
          <p class="contact-text">もし私にご興味を持たれた方がいらっしゃいましたら、下のフォームからメッセージいただけると嬉しいです。</p>
          <p class="contact-text">まずは<strong>「bbb.worksquash@gmail.com」</strong>より、自動返信いたします。</p>
          <p class="contact-text">ちなみに、メールに気がつかないことがないよう、LINEボットに通知が飛ぶように設定しているようですヨ。</p>
        </div>
        <div class="text-center">
          <h2 class="text-h5">SNS</h2>
          <div class="sns-content justify-content mb-3">
            <template v-for="(logo, index) in sns_logos" >
              <div :key="index" :style="setSNSLogo(logo, index)"></div>
            </template>
          </div>
        </div>
      </v-flex>
      <v-flex xs12 sm12 md12>
        <v-card elevation="2" outlined class="contact-form">
          <v-form @submit.prevent>
            <v-container>
              <v-row>
                <v-card-title>お問合せフォーム</v-card-title>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-text-field label="お名前" required outlined></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field label="email" required outlined></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-textarea label="お問合せ内容" required outlined></v-textarea>
                </v-col>
              </v-row>
              <v-row class="justify-center">
                <v-col cols="2" class="justify-center">
                  <button class="form-submit-button" @click="submit"><span class="text-h6">送信</span></button>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
         </v-card>
      </v-flex>
    </v-layout>
  </section>
</template>
<script>
  export default {
    name: 'Message',
    data: () => ({
      sns_logos: ['qiita-logo.png', 'wantedly-logo.png']
    }),
    methods: {
      submit: async () => {

        // const line = require('@line/bot-sdk');
        // const fetch = require('node-fetch');
        const aws = require('aws-sdk');
        const core = require('aws-sdk/lib/core');

        const api_id     = process.env.VUE_APP_AWS_API_GATEWAY_ID;
        const access_key = process.env.VUE_APP_AWS_API_GATEWAY_ACCESS_KEY_ID;
        const secret_key = process.env.VUE_APP_AWS_API_GATEWAY_SECRET_ACCESS_KEY;

        console.log('process.env.CHANNEL_ACCESS_TOKEN:', process.env.VUE_APP_CHANNEL_ACCESS_TOKEN);
        console.log('process.env.USER_ID:', process.env.VUE_APP_USER_ID);
        console.log({api_id});
        console.log({access_key});
        console.log({secret_key});
        
        // let client = new line.Client({ channelAccessToken: process.env.VUE_APP_CHANNEL_ACCESS_TOKEN });
        let data = {
          type: 'text',
          text: 'Hello World!'
        };

        const credential = new aws.Credentials(access_key, secret_key);
        const service_name = "execute-api";
        const url = `https://${api_id}.execute-api.ap-northeast-1.amazonaws.com/line-bot-contact`;
        const options = { 
          url: url, 
          headers: { host: 'https:', 'Access-Control-Allow-Origin': '*' },
          pathname: () => '//2fuzug6ire.execute-api.ap-northeast-1.amazonaws.com/line-bot-contact',
          methodIndex: 'post',
          search: () => "",
          region: 'ap-northeast-1',
          method: 'POST',
          body: JSON.stringify(data)
        };

        const now = new Date();
        const signer = new core.Signers.V4(options, service_name);
        console.log({signer});
        signer.addAuthorization(credential, now);

        try {
          const response = await fetch(url, options);
          console.log(response);
        } catch (e) {
          console.log('ERROR');
          console.log(e);
        }

        return;

        // client.pushMessage(process.env.VUE_APP_USER_ID, data)
        // .then(() => {
        //   console.log('OK');
        // })
        // .catch((err) => {
        //   console.log('err', err);
        // });
          
      },
      setSNSLogo: function(logo, index) {
        let margin_left = ((index+1) % 2 == 0 )? '5%' : '0';
        return {
          backgroundImage: 'url(' + require(`@/assets/${logo}`) + ')',
          width: '50px',
          height: '50px',
          backgroundSize: 'contain',
          backgroundPosition: '50%',
          marginLeft: margin_left,
          display: 'inline-block'
        };
      },
    }
  }
</script>

<style>
  .contact-message {
    /* text-align: center; */
  }
  .contact-text {
    margin-bottom: 20px;
    font-size: 18px;
  }

  .sns-content {
    height: 50px;
    width: 30%;
    margin: 0 auto;
  }

  .mail-form-contents {
    width: 90%;
    margin: 0 auto;
  }

  .contact-form {
    padding: 10px;
    width: 90%;
    margin: 0 auto;
  }

  .form-submit-button {
    background-color: #044c64;
    color: white;
    width: 100%;
    padding: 5%;
    border-radius: 8px !important;
  }
</style>