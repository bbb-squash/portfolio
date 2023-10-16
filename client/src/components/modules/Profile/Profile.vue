<template>
  <section id="profile">
    <v-container>
      <v-row
        no-gutters
        class="justify-center mb-6"
      >
        <h1 class="page-title font-weight-bold text-center main--text">
          About Me
        </h1>
      </v-row>
      <v-divider />
      <h2 class="page-sub-title d-flex align-center justify-center">
        <v-icon
          color="accent"
          class="mr-3"
        >
          mdi-square
        </v-icon>
        Profile
      </h2>
      <p class="page-sub-introduction">
        簡単な自己紹介と、2021年に実施したストレングスファインダーの結果のうち、上位3つの資質です。<br>
        いずれも「人間関係構築力」に分類されるものでした。
      </p>
      <v-row
        no-gutters
        class="pa-4"
      >
        <div class="profile-container clearfix ma-2">
          <div class="profile-left-contents">
            <div class="profile-icon-box">
              <img
                src="@/assets/png/profile.png"
                alt="profile"
              >
            </div>
            <h3>BBB-SQUASH</h3>
            <p>Born in 1998's</p>
            <p>Software Engineer</p>
          </div>
          <div class="profile-right-contents pa-8">
            <p>
              都内でソフトウェアエンジニアをしています。メインはバックエンド / インフラ領域としており、言語ではPython, JavaScript、クラウドサービスではAWSを得意としています。<br>
              コンサル会社での経験を活かし、モノづくりだけではなく提案もできるような、一括りでは表せない人材を目指しています。
            </p>
            <div class="profile-context-box clearfix">
              <div class="profile-strength-finder-area clearfix">
                <h4>ストレングス・ファインダー</h4>
                <div
                  class="justify-center"
                  :class="{ 'd-flex': !$vuetify.breakpoint.xs }"
                >
                  <p><span class="strength-finder-rank rank-top">1st</span>ポジティブ</p>
                  <p><span class="strength-finder-rank">2nd</span>調和性</p>
                  <p><span class="strength-finder-rank">3rd</span>包含</p>
                </div>
              </div>
              <div class="profile-sns-area clearfix">
                <h4>SNS</h4>
                <div class="d-flex justify-center">
                  <div 
                    v-for="(sns, index) in snsLinks"
                    :key="index"
                    class="sns-icon"
                  >
                    <a
                      :href="sns.link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <component :is="sns.icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-row>
    </v-container>
  </section>
</template>
  
<script>
import LogoZenn from '@/assets/svg/zenn.svg';
import LogoWantedly from '@/assets/svg/wantedly.svg';
import LogoTwitter from '@/assets/svg/twitter.svg';
import LogoGitHub from '@/assets/svg/github.svg';

export default {
  name: 'Profile',
  components: {
    LogoGitHub: LogoGitHub,
    LogoTwitter: LogoTwitter,
    LogoWantedly: LogoWantedly,
    LogoZenn: LogoZenn
  },
  data: function() { 
    return { snsLinks: [
      {
        link: 'https://github.com/Mitsuya-bbb',
        icon: LogoGitHub
      },
      {
        link: 'https://twitter.com/bbb__squash',
        icon: LogoTwitter
      },
      {
        link: 'https://twitter.com/bbb__squash',
        icon: LogoWantedly
      },
      {
        link: 'https://zenn.dev/bbb_squash',
        icon: LogoZenn
      }] }
  }
}
</script>
<style src="./style.css" scoped></style>
