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
        <!-- 画面サイズがbreakpoint.xs以下であれば、navアイコンを表示 -->
        <v-app-bar-nav-icon
          v-if="$vuetify.breakpoint.xs" 
          @click="mydrawer = !mydrawer"
          class="font-accent--text"
        />

        <v-toolbar-title class="text-h6 font-accent--text">BBB-SQUASH</v-toolbar-title>
        <v-spacer></v-spacer>
      
        <template v-if="!$vuetify.breakpoint.xs">
          <div v-for="content in contents" :key="content.name">
            <router-link :to="{name: content.path_name}">
              <span 
                class="header_link-text font-weight-medium font-accent--text"
                :class="{ 'mr-5': $vuetify.breakpoint.sm, 'mr-13': $vuetify.breakpoint.md || $vuetify.breakpoint.lg || $vuetify.breakpoint.xl }"
              >
                {{ content.name }}
              </span>
            </router-link>
          </div>
        </template>
      </v-toolbar>
    </v-app-bar>

    <!-- navアイコンクリック時の内容 -->
    <!-- <NavigationDrawer 
      :contents="contents"
      :mydrawer="mydrawer" /> -->
    <v-navigation-drawer 
      v-model="mydrawer"
      temporary
      fixed
    >
      <v-list nav>
        <v-list-item link>
          <v-list-item-avatar tile>
            <v-img 
              src="@/assets/img/top_logo.png"
              max-height="30"
              max-width="30"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h6 font-accent--text">BBB-SQUASH</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item-group
          v-model="selectedItem"
          mandatory
        >
          <router-link
            v-for="(content, index) in contents" 
            :key="index" 
            :to="{name: content.path_name}" 
            class="text-decolation-none"
          >
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title class="font-accent--text font-weight-medium">{{ content.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
  // import NavigationDrawer from '@/components/modules/NavigationDrawer';
  export default {
    name: 'Header',

    components: {
      // 'NavigationDrawer': NavigationDrawer
    },

    data() {
      return {
        mydrawer: false,
        mygroup: null,
        header_full_draw_width: 650,
        selectedItem: 1,
      }
    },

    props: {
      contents: {
        type: Array,
      }
    },
  }
</script>

<style scoped>
  .header_link-text {
    display: inline-block;
    position: relative;
    text-decoration: none;
  }
  .header_link-text:before{
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 3px;
    background: #044c64;
    transform: scale(0, 1);
    transform-origin: left;
    transition: 0.4s;
  }
  .header_link-text:hover:before {
    transform: scale(1);
  }

</style>