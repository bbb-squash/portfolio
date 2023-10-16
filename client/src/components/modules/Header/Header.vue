<template>
  <div>
    <v-app-bar
      app
      dense
      hide-on-scroll
      color="#fff"
      class="elevation-0 mx-auto"
    >
      <v-toolbar 
        dense
        hide-on-scroll
        color="#fff"
        class="elevation-0 mx-auto"
        max-width="1200"
      >
        <v-app-bar-nav-icon
          v-if="$vuetify.breakpoint.xs" 
          class="font-accent--text"
          @click="mydrawer = !mydrawer"
        />

        <v-toolbar-title class="text-h6 font-accent--text">
          BBB-SQUASH
        </v-toolbar-title>
        <v-spacer />
      
        <template v-if="!$vuetify.breakpoint.xs">
          <div
            v-for="content in contents"
            :key="content.name"
          >
            <router-link :to="content.pathName">
              <span 
                class="header-link-text font-weight-medium font-accent--text"
                :class="{ 'mr-5': $vuetify.breakpoint.sm, 'mr-13': $vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl }"
              >
                <v-icon
                  color="main"
                  size="medium"
                >{{ content.icon }}</v-icon>
                {{ content.name }}
              </span>
            </router-link>
          </div>
        </template>
      </v-toolbar>
    </v-app-bar>

    <v-navigation-drawer 
      v-model="mydrawer"
      temporary
      fixed
    >
      <v-list nav>
        <v-list-item link>
          <v-list-item-avatar tile>
            <v-img 
              src="@/assets/png/site_logo.png"
              max-height="30"
              max-width="30"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h6 font-accent--text">
              BBB-SQUASH
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
        <v-list-item-group
          v-model="selectedItem"
          mandatory
        >
          <router-link
            v-for="(content, index) in contents" 
            :key="index" 
            :to="content.pathName" 
            class="text-decoration-none"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="font-accent--text font-weight-medium">
                  {{ content.name }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: { contents: {
    type: Array,
    required: true
  } },
  data: () =>  {
    return {
      mydrawer: false,
      selectedItem: 1
    };
  }
}
</script>
<style src="./style.css" scoped></style>
