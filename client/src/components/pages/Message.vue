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
          <p class="contact-text">後日、<strong>「bbb.worksquash@gmail.com」</strong>より、ご連絡いたします。</p>
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
                  <p  class="contact-text">ちなみに、メールに気がつかないことがないよう、LINEボットに通知が飛ぶように設定しているようですヨ。</p>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="form_name" label="お名前" required outlined></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field v-model="form_email" label="email" required outlined></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12">
                  <v-textarea v-model="form_content" label="お問合せ内容" required outlined></v-textarea>
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
    data: function() { 
      return {
        sns_logos: ['qiita-logo.png', 'wantedly-logo.png'],
        form_name: '',
        form_email: '',
        form_content: '',
      }
    },
    methods: {
      submit: async function(){
        const body = {
          name: this.form_name, 
          email: this.form_email, 
          content: this.form_content, 
        };
        const options = {
          method: 'POST',
          headers: { Authorization: `Bearer ${process.env.VUE_APP_API_BEARER_TOKEN}` },
          body: JSON.stringify(body)
        };
        // const response = await fetch(process.env.VUE_APP_API_ENDPOINT, options);
        const response = { status: 200, options: options };
        // const response = { status: 400 };
        if (response.status == 200) {
          // TODO: サクセスメッセージを表示
        } else {
          // TODO: エラーメッセージを表示
        }
        this.form_name = '';
        this.form_email = '';
        this.form_content = '';
        return;
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