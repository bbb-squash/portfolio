<template>
  <v-container>
    <v-navigation-drawer 
      v-model="isdraw"
      absolute
      temporary
      >
      <v-list>
        <v-list-item link>
          <v-list-item-avatar tile>
            <v-img 
              src="@/assets/img/top_logo.png"
              max-height="30"
              max-width="30"
            ></v-img>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              BBB-SQUASH
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item-group
          v-model="selectedItem"
          mandatory>
          <template v-for="(content, id) in contents">
            <router-link 
              :key="id" 
              :to="{name: content.path_name}" 
              class="router-link-class">
              <v-list-item>
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
</template>


<script>
  import ClickOutside from 'vue-click-outside'
  export default {
    name: 'NavigationDrawer',

    props: {
      contents: {
        type: Array,
      },
      mydrawer: {
        type: Boolean
      }
    },

    data() {
      return {
        isdraw: false,
        selectedItem: 1,
      }
    },
    watch: {
      mydrawer: {
        immediate: true,
        handler: function () {
          this.isdraw = this.mydrawer
        }
      },
      selectedItem () {
        this.isdraw = false
      }
    },
    mounted () {
      this.popupItem = this.$el
    },
    directives: {
      ClickOutside
    }
  }
</script>
