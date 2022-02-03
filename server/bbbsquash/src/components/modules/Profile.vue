<template>
  <section id="profile">
    <v-row justify="center" class="contents-header text-center">
      <h1 class="text-h3">Profile</h1>
    </v-row>
    <v-container class="lighten-5 rounded-lg pa-5 mb-5">
      <div v-if="$vuetify.breakpoint.xs || $vuetify.breakpoint.sm">
        <v-row>
          <img src="@/assets/profile.png" alt="Logo" class="profile_image">
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card elevation="2" outlined>
              <v-card-title :class="introduction.title_color" class="font-weight-bold">{{ introduction.name }}</v-card-title>
              <template v-for="(text, index) in introduction.texts">
                <p :key="index" class="v-card-text text-body-1">{{ text }}</p>
              </template>
            </v-card>
          </v-col>
        </v-row>
        <v-row style="display: block">
          <template v-for="job in jobs">
            <v-col cols="12" :key="job.name">
              <v-card elevation="2" outlined>
                <v-card-title :class="job.title_color" class="font-weight-bold">{{ job.name }}</v-card-title>
                <template v-for="(text, index) in job.introduction">
                  <h3 :key="index" class="v-card-text text-body-1">{{ text }}</h3>
                </template>
              </v-card>
            </v-col>
          </template>
        </v-row>
      </div>

      <div class="container" v-else>
        <v-row>
          <v-col cols="4">
            <v-card elevation="2" outlined class="profile-card">
              <img src="@/assets/profile.png" alt="Logo" class="profile_image">

              <div class="profile-contents clearfix">
                <div class="profile-text-column">
                  <v-card-subtitle><p class="text-lg-h6">name:</p></v-card-subtitle>
                </div>
                <div class="profile-text">
                  <v-card-subtitle><span class="text-lg-h5 profile-italic">bbb-squash</span></v-card-subtitle>
                </div>

                <div class="profile-text-column">
                  <v-card-subtitle><p class="text-lg-h6">occupation:</p></v-card-subtitle>
                </div>
                <div class="profile-text">
                  <v-card-subtitle><span class="text-lg-h5 profile-italic">engineer/consultant</span></v-card-subtitle>
                </div>
              </div>
              
              <hr style="width: 90%; margin: 0 auto; clear: both;">
              <div class="profile-contents clearfix">
                <div class="profile-text-column">
                  <v-card-subtitle><p class="text-lg-body-1">趣味</p></v-card-subtitle>
                </div>
                <div class="profile-text">
                  <v-card-subtitle><p class="text-lg-body-1">フットサル、音楽</p></v-card-subtitle>
                  <v-card-subtitle><p class="text-lg-body-1">シーシャバー</p></v-card-subtitle>
                  <!-- <v-card-subtitle><span class="text-lg-h5 profile-italic">bbb-squash</span></v-card-subtitle> -->
                </div>

                <div class="profile-text-column">
                  <v-card-subtitle><p class="text-lg-body-1">ストレングス・ファインダー</p></v-card-subtitle>
                </div>
                <div class="profile-text">
                  <v-card-subtitle><p class="text-lg-body-1">「ポジティブ」</p></v-card-subtitle>
                  <v-card-subtitle><p class="text-lg-body-1">「調和性」、「包含」</p></v-card-subtitle>
                  <!-- <v-card-subtitle><span class="text-lg-h5 profile-italic">engineer/consultant</span></v-card-subtitle> -->
                </div>
              </div>
                
            </v-card>
          </v-col>
          <v-col cols="8">
            <v-row>
              <v-col cols="12">
                <v-card elevation="2" outlined class="pb-2">
                  <v-card-title :class="introduction.title_color" class="font-weight-bold">{{ introduction.name }}</v-card-title>
                  <template v-for="(text, index) in introduction.texts">
                    <p :key="index" class="content-text introduction-card-text">{{ text }}</p>
                  </template>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <template v-for="job in jobs">
                <v-col cols="12" :key="job.name">
                  <v-card elevation="2" outlined class="pb-2">
                    <v-card-title :class="job.title_color" class="font-weight-bold card-title">{{ job.name }}</v-card-title>
                    <ul :key="index" v-for="(text, index) in job.introduction">
                      <li class="content-text jobs-card-text">{{ text }}</li>
                    </ul>
                  </v-card>
                </v-col>
              </template>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'Profile',

  data: () => ({
    profile: [ { name: 'bbb-squash' }, {profession: 'engineer/consultant' }],
    introduction: {
      name: 'INTRODUCTION',
      texts: [
        '大学在学中よりプログラミングを勉強し始め、現在はコンサル会社でエンジニア・コンサルタントとして働いています。', 
        '過去にはプログラミングスクールでメンター/講師として、受講生の学習をサポートしていました。', 
        '「モノづくり」だけではなく「提案」もできる、「フロントエンド」だけではなく、「サーバサイド」もできるような、一括りでは表せない人材を目指しています。',
      ],
      title_color: 'title-color-introduction'
    },
    jobs: {
      engineer: {
        name: 'ENGINEER',
        introduction: ['主にサーバサイドとして各種サーバの設定、apiの実装を担当', '社内/外サーバを含めたインフラ環境の構築（AWS, Docker）', 'チャットボットプロダクト開発'],
        title_color: 'title-color-engineer'
      },
      consultant: {
        name: 'CONSULTANT',
        introduction: ['ITコンサルを担当し、toB向けのインフラ構築の検討、実装', '保険業務けPoC開発コンサルティング', '社内DXのためのヒアリング/提案を始めとし、業務改善ツール作成'],
        title_color: 'title-color-consultant'
      },
    }
  }),
  computed: {
    addTitileColor: function(color) {
      return { color }
    }
  }
};
</script>

<style>
.about-me-contents {
  font-family: 'メイリオ', 'Meiryo', sans-serif;
}

.contents-header {
  margin-bottom: 20px;
  color: #787878;
}

.page-subject {
  font-size: 3.75rem;
}

.profile-card {
  height: 100%;
  font-family: cursive;
  text-align: center;
  font-size: 0px;
}

.profile-contents {
  margin: 20px 0;
}

.clearfix:after {
  content: ""; 
  clear: both;
  display: block;
}

.profile_image {
  width: 90%;
  height: 60%;
  margin: 0 auto;
  padding-top: 10%;
  display: block;
  overflow: hidden;
}

.profile-text-column {
  margin-left: 5%;
  width: 35%;
  float: left;
  text-align: left;
}

.profile-text {
  width: 60%;
  float: left;
  text-align: left;
}

.profile-text-column > .v-card__subtitle {
  padding: 2px !important;
}

.profile-text > .v-card__subtitle {
  padding: 2px !important;
}
  
.title-color-introduction {
  background-color: teal;
  color: white;
}

.title-color-consultant {
  /* background-color: #B39DDB; */
  background-color: teal;
  color: white;
}

.title-color-engineer {
  /* background-color: #B39DDB; */
  background-color: teal;
  color: white;
}

.v-application .text-lg-h5 {
  font-family: cursive !important;
}
.v-application .text-lg-body-1 {
  font-family: cursive !important;
} 

.v-card-text {
  padding: 5px 16px 0px 16px;
}

.card-title {
  padding: 10px;
}

.profile-italic {
  font-family: cursive !important;
}


.introduction-card-text {
  padding: 7px 20px 0px 20px;
}

.v-application ul {
  padding-left: 36px;
}

.jobs-card-text {
  padding: 7px 20px 0px 0px;
}

.profile-row {
  padding: 0;
}

</style> 