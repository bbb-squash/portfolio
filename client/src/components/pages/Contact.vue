<template>
  <section id="contact">
    <v-container>
      <v-row
        no-gutters
        class="justify-center mb-6"
      >
        <h1 class="page-title font-weight-bold text-center main--text">
          Contact
        </h1>
      </v-row>
      <v-divider />
      <v-row
        no-gutters
        max-width="1200"
      >
        <v-col 
          no-gutters
          cols="12"
          sm="12" 
          md="5"
          class="pa-8"
        >
          <div class="text-center mb-5">
            <h2 
              class="font-weight-medium text-left px-10 py-1 white--text text-h6 common_sub-header rounded"
              :style="{ background: $vuetify.theme.themes.light.main }"
            >
              Message
            </h2>
          </div>
          <p class="text-left pl-3">
            ここまで読んでいただき、誠にありがとうございました。<br>
            もし私にご興味を持たれた方がいらっしゃいましたら、フォームからメッセージいただけると嬉しいです。<br>
            後日、メールにてご連絡いたします。<br>
          </p>
          <p class="main--text font-weight-medium">
            <span class="message-baddie mr-3 font-weight-bold">メールアドレス</span>bbb.worksquash@gmail.com
          </p>
          <div 
            class="text-center"
            :class="{ 'mt-5': $vuetify.breakpoint.xs || $vuetify.breakpoint.sm, 'mt-10': $vuetify.breakpoint.lgAndUp }"
          >
            <h2 
              class="font-weight-medium text-left px-10 py-1 white--text text-h6 common_sub-header rounded mb-5"
              :style="{ background: $vuetify.theme.themes.light.main }"
            >
              SNS
            </h2>
            <p class="pl-3 text-left">
              SNSも少しだけやってますのでフォローいただけると嬉しいです。
            </p>
            <div class="contact-sns-area clearfix">
              <div class="d-flex justify-center">
                <div 
                  v-for="(sns, index) in snsLink"
                  :key="index"
                  class="sns-icon"
                >
                  <a
                    :href="sns.link"
                    target="_blank"
                  >
                    <component :is="sns.icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </v-col>
        <v-col 
          no-gutters
          cols="12"
          sm="12" 
          md="7"
        >
          <v-card 
            elevation="2" 
            outlined 
            :loading="card.isLoading"
            class="mx-2 my-5 px-5"
          >
            <v-form
              ref="form"
              fast-fail
              @submit.prevent
            >
              <v-container>
                <v-card-title class="font-weight-bold">
                  <span class="common_sub-header main--text">お問い合わせフォーム</span>
                </v-card-title>
                <p class="txt-light--text">
                  {{ card.message.html }}
                </p>
                <v-row
                  no-gutters
                  class="justify-center"
                >
                  <v-col
                    no-gutters
                    cols="12"
                  >
                    <v-text-field 
                      v-model="formInput.name.text" 
                      label="お名前" 
                      placeholder="TARO YAMADA"
                      required 
                      outlined 
                      :rules="formInput.name.rules"
                      :disabled="formDisabled"
                    />
                  </v-col>
                  <v-col
                    no-gutters
                    cols="12"
                  >
                    <v-text-field 
                      v-model="formInput.email.text" 
                      label="email" 
                      placeholder="contact@bbbsquash-cloud.com"
                      required 
                      outlined
                      :rules="formInput.email.rules" 
                      :disabled="formDisabled"
                    />
                  </v-col>
                  <v-col
                    no-gutters
                    cols="12"
                  >
                    <v-textarea 
                      v-model="formInput.content.text" 
                      label="お問合せ内容" 
                      required 
                      outlined
                      :rules="formInput.content.rules"
                      :disabled="formDisabled"
                    />
                  </v-col>
                  <v-col 
                    no-gutters 
                    class="d-flex justify-center align-center"
                    cols="6" 
                    sm="4"
                  >
                    <v-btn 
                      type="submit"
                      class="elevation-0 mx-auto white--text py-3 px-6"
                      color="font-accent"
                      @click="submit"
                    >
                      {{ card.button.text }}
                    </v-btn>
                  </v-col>
                  <v-col 
                    v-show="card.cancelButton.isShow"
                    no-gutters 
                    cols="6" 
                    sm="4"
                  >
                    <v-btn 
                      class="elevation-0 mx-auto white--text py-3 px-6"
                      color="font-accent"
                      @click="cancel"
                    >
                      キャンセル
                    </v-btn>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
import LogoZenn from '@/assets/svg/zenn.svg';
import LogoWantedly from '@/assets/svg/wantedly.svg';
import LogoTwitter from '@/assets/svg/twitter.svg';
import LogoGitHub from '@/assets/svg/github.svg';
import conf from '@/config/ContactForm';

export default {
  name: 'Contact',
  components: {
    LogoZenn: LogoZenn,
    LogoWantedly: LogoWantedly,
    LogoTwitter: LogoTwitter,
    LogoGitHub: LogoGitHub
  },
  data: function() { 
    return {
      valid: true,
      snsLogos: [
        {
          url: 'https://qiita.com/bbb-squash',
          img: 'qiita-logo.png'
        },
        {
          url: '',
          img: 'wantedly-logo.png'
        }
      ],
      formDisabled: false, 
      formInput: {
        name: {
          text: '',
          rules: [ value => { return value ? true : conf.validation.blank }]
        },
        email: {
          text: '',
          rules: [ 
            value => value ? true : conf.validation.blank,
            value => value && value.match(/.+@.+/) ? true : conf.validation.email
          ]
        },
        content: {
          text: '',
          rules: [ value => { return value ? true : conf.validation.blank }]
        }
      },
      card: {
        isLoading: false,
        message: { html: conf.message.init },
        button: {
          type: conf.type.init,
          text: conf.button.init
        },
        cancelButton: { isShow: false }
      },
      snsLink: [
        {
          link: 'https://github.com/Mitsuya-bbb',
          icon: LogoGitHub,
          isShow: true
        },
        {
          link: 'https://twitter.com/bbb__squash',
          icon: LogoTwitter,
          isShow: true
        },
        {
          link: 'https://www.wantedly.com/id',
          icon: LogoWantedly,
          isShow: true
        },
        {
          link: 'https://zenn.dev/bbb_squash',
          icon: LogoZenn,
          isShow: true
        }
      ]
    }
  },
  methods: {
    submit: async function() {
      if (this.card.button.type == conf.type.init) {
        const valid = await this.$refs.form.validate();
        if (!valid) return;
        this.card = {
          ...this.card,
          button: {
            type: conf.type.confirm,
            text: conf.button[this.card.button.type]
          },
          message: { html: conf.message[this.card.button.type] },
          cancelButton:{ isShow: true }
        };
        this.formDisabled = true;
      } else if (this.card.button.type == conf.type.confirm)  {
        this.card.isLoading = true;
        const body = {
          name: this.formInput.name.text, 
          email: this.formInput.email.text, 
          content: this.formInput.content.text 
        };
        const options = {
          method: 'POST',
          headers: { Authorization: `Bearer ${process.env.VUE_APP_API_BEARER_TOKEN}` },
          body: JSON.stringify(body)
        };
        const response = await fetch(process.env.VUE_APP_API_ENDPOINT, options);
        if (response.status == 200) {
          this.card.message.html = conf.message.complete;
          this.formDisabled = false;
          this.$refs.form.reset();
        } else {
          this.card.message.html = conf.message.error;
          this.formDisabled = false;
        }
        this.initField();
      } else {
        this.initField();
        this.formDisabled = false;
        this.$refs.form.reset();
      }
    },
    initField: function() {
      this.card = {
        ...this.card,
        isLoading: false,
        button: {
          type: conf.type.init,
          text: conf.button.init
        },
        cancelButton: { isShow: false }
      }
    },
    cancel: function() {
      this.initField();
      this.card.message.html = conf.message.init;
      this.formDisabled = false;
    },
    setSNSLogo: function(logo, index) {
      let marginLeft = ((index+1) % 2 == 0 )? '5%' : '0';
      return {
        backgroundImage: 'url(' + require(`@/assets/${logo}`) + ')',
        width: '50px',
        height: '50px',
        backgroundSize: 'contain',
        backgroundPosition: '50%',
        marginLeft: marginLeft,
        display: 'inline-block'
      };
    }
  }
}
</script>
