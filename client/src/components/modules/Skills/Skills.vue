<template>
  <section id="skill">
    <h2 class="page-sub-title d-flex align-center justify-center">
      <v-icon
        color="accent"
        class="mr-3"
      >
        mdi-square
      </v-icon>
      Skills
    </h2>
    <p class="page-sub-introduction">
      バッグエンドはPython（Django）、Nodejs、Scalaをメインに使用しています。<br>
      インフラ環境はAWSでの構築経験が多く、基本的なサービスの多くは使用経験があります。
    </p>
    <v-row
      no-gutters
      class="pa-4"
    >
      <v-col
        v-for="(skill, index) in skills"
        :key="index"
        cols="12"
        sm="12"
        md="4"
        class="mb-3"
      >
        <div class="skill-container ma-2 pa-2">
          <div class="skill-container-header mb-2 clearfix">
            <div class="icon-box">
              <component
                :is="skill.icon"
                class="skill-container-title-icon"
              />
            </div>
            <div class="title-box">
              <p>{{ skill.title }}</p>
            </div>
          </div>
          <p class="skill-text">
            {{ skill.text }}
          </p>
          <span
            v-for="(capability, index) in skill.capabilities"
            :key="index"
            class="skill-capability"
          >{{ capability }}</span>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {
  name: 'Skills',
  props: { skills: {
    type: Array,
    required: true
  } }
}
</script>
<style src="./style.css" scoped></style>
