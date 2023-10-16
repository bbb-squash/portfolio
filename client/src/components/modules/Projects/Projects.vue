<template>
  <section id="projects">
    <h2 class="page-sub-title d-flex align-center justify-center">
      <v-icon
        color="accent"
        class="mr-3"
      >
        mdi-square
      </v-icon>
      Projects
    </h2>
    <p class="page-sub-introduction">
      これまでに開発してきたプロジェクトの一覧です。<br>
      小規模な受託開発がメインですが、スピード感を持って実装しています。
    </p>
    <v-row
      no-gutters
      class="pa-4"
    >
      <template v-for="(project, index) in projects">
        <v-col
          v-if="project.isShow"
          :key="index"
          cols="12"
          sm="6"
          md="4"
          class="mb-2"
        >
          <div class="project-container">
            <img :src="project.image">
            <div class="pa-2">
              <p class="project-title">
                {{ project.title }}
              </p>
              <span class="project-text">{{ project.text }}</span>
              <p class="project-date">
                {{ project.date }}
              </p>
              <span
                v-for="(tool, index) in project.tools"
                :key="index"
                class="skill-capability"
              >{{ tool }}</span>
            </div>
          </div>
        </v-col>
      </template>
    </v-row>
  </section>
</template>

<script>
export default {
  name: 'Projects',
  props: { projects: {
    type: Array,
    required: true
  } }
}
</script>

<style src="./style.css" scoped></style>
