<template>
  <section id="history">
    <v-row
      justify="center"
      class="mb-2"
    >
      <h1 class="text-h3">
        History
      </h1>
    </v-row>
    <v-divider class="header-divider" />
    <v-container class="lighten-5">
      <v-row
        v-for="year in Object.keys(history)"
        :key="year"
      >
        <v-col
          cols="3"
          class="time-series text-right pr-5"
        >
          <p class="text-h4">
            {{ year }}
          </p>
        </v-col>
        <v-divider
          vertical
        />
        <v-col
          cols="9"
          class="time-object"
        >
          <template v-for="object in history[year]">
            <div
              :key="object.title"
              class="pl-5"
            >
              <p class="text-h5">
                {{ object.title }}
              </p>
              <p class="text-h6">
                {{ object.introduction }}
              </p>
            </div>
          </template>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: 'History',
  data: () => ({ history: {
    '2017': [
      {
        'title': 'INIAD入学',
        'introduction': 'コンピュータサイエンスを勉強'
      }
    ],
    '2019': [
      {
        'title': '株式会社インフラトップ',
        'introduction': 'メンター/講師として、受講生のプログラミング学習をサポート'
      }
    ],
    '2021': [
      {
        'title': '株式会社チェンジ',
        'introduction': 'エンジニア/コンサルタントとして、プロジェクト支援・主にバックエンドの実装を担当'
      }
    ]
  } }),
  computed: {}
};
</script>


<style>
  .time-series {
    border-right: 2px solid rgba(0, 0, 0, 0.12);
    padding-bottom: 10%;
  }

  .time-object {
    margin: auto 0;
  }
</style>