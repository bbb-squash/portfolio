<template>
  <section id="skill">
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
      <h2 class="page-sub-title">
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
                src="@/assets/profile.png"
                alt="Logo"
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
              <div class="profile-strengthFinder-area clearfix">
                <h4>ストレングス・ファインダー</h4>
                <div
                  class="justify-center"
                  :class="{ 'd-flex': !$vuetify.breakpoint.xs }"
                >
                  <p><span class="strengthFinder-rank rank-top">1st</span>ポジティブ</p>
                  <p><span class="strengthFinder-rank">2nd</span>調和性</p>
                  <p><span class="strengthFinder-rank">3rd</span>包含</p>
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
      <h2 class="page-sub-title">
        History
      </h2>
      <p class="page-sub-introduction">
        小学生の頃からパソコンは使用し始め、Youtubeやニコニコ動画を見ていました。<br>
        その後、大学生の時からプログラムを勉強し始め、コンサル会社・広告事業会社のほか、学生時代のインターン / 業務委託を含めると4社で勤務した経験があります。
      </p>
    </v-container>
  </section>
</template>
  
<script>
import LogoZenn from '@/assets/img/svg/zenn.svg';
import LogoWantedly from '@/assets/img/svg/wantedly.svg';
import LogoTwitter from '@/assets/img/svg/twitter.svg';
import LogoGitHub from '@/assets/img/svg/github.svg';

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
  },
  computed: {}
}
</script>
