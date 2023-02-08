<template>
  <div>
    <!-- #004e65 -->
    <v-app-bar
    app
    dense
    color="#fff"
    white
    class="elevation-0 flex-grow-0"
    >
      <v-container class="d-flex align-center">
        
        <!-- 画面サイズがbreakpoint.xs以下であれば、navアイコンを表示 -->
        <v-app-bar-nav-icon v-if="$vuetify.breakpoint.xs" @click.stop="mydrawer = !mydrawer"></v-app-bar-nav-icon>

        <div class="d-flex align-center">
          <v-btn
          href="/"
          target="_blank"
          text
          >
            <span class="mr-2">BBB-SQUASH</span>
          </v-btn>
        </div>

        <v-spacer></v-spacer>
        
        <template v-if="!$vuetify.breakpoint.xs">
          <div class="header-content" v-for="content in contents" :key="content.name">
            <router-link :to="{name: content.path_name}">
                <span class="mr-5 link-text">
                  <!-- <v-icon
                    color="#044c64"
                  >
                    {{ content.icon }}
                  </v-icon> -->
                  {{ content.name }}
                  <!-- <strong>{{ content.name }}</strong> -->
                </span>
            </router-link>
          </div>
        </template>
      </v-container>
    </v-app-bar>

    <!-- navアイコンクリック時の内容 -->
    <v-container>
      <v-navigation-drawer 
        v-model="mydrawer"
        color="#004e65" 
        absolute
        temporary
        dark
      >
        <v-list>
          <v-list-item-group >
            <template v-for="content in contents">
              <router-link :key="content.name" :to="{name: content.path_name}" class="router-link-class">
                <v-list-item>
                  <!-- <v-list-item-avatar>
                    <v-icon>{{ content.icon }}</v-icon>
                  </v-list-item-avatar> -->
                  <v-list-item-content>
                    <v-list-item-title>{{ content.name }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </router-link>
            </template>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>
    </v-container>

  </div>
</template>

<script>
  export default {
    name: 'Header',

    data() {
      return {
        mydrawer: false,
        mygroup: null,
        header_full_draw_width: 650,
      }
    },

    props: {
      contents: {
        type: Array,
      }
    },
  }
</script>

<style>

  .link-text{
    display: inline-block;
    position: relative;
    /* color: #044c64; */
    color: black;
    text-decoration: none;
  }
  .link-text:before{
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
  .link-text:hover:before {
    transform: scale(1);
  }

  .router-link-class {
    text-decoration: none;
  }

  .v-btn__content {
    display: flex !important;
  }

</style>