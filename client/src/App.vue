<template>
  <v-app>
    <v-header :contents="contents" />
    <v-main>
      <v-container 
        fluid
        pa-0
      >
        <router-view />
      </v-container>
    </v-main>
    <v-footer :contents="contents" />
  </v-app>
</template>

<script>
import Header from '@/components/modules/Header/Header';
import Footer from '@/components/modules/Footer';

export default {
  name: 'App',

  components: {
    'v-header': Header,
    'v-footer': Footer
  },

  data: () => ({ contents: [
    {
      name: 'Home', icon: 'mdi-home', pathName: '/' 
    },
    {
      name: 'About Me', icon: 'mdi-human-handsup', pathName: '/about' 
    },
    {
      name: 'Work', icon: 'mdi-tools', pathName: '/work' 
    },
    {
      name: 'Contact', icon: 'mdi-pin', pathName: '/contact' 
    }
  ] })
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&family=PT+Sans:wght@700&family=Roboto:wght@500&display=swap');
  #app {
    font-family: "BIZ UDPGothic", "Meiryo UI", Meiryo, -apple-system, BlinkMacSystemFont, sans-serif;
    font-size: 1rem;
  }
  .clearfix::after {
    content: "";
    display: block;
    clear: both;
  }
  img {
    max-width: 100%;
    height: auto;
    vertical-align: bottom;
    border-style: none;
  }
  .page-title {
    font-size: 2.6rem;
    font-weight: 400;
    line-height: 2.5rem;
    letter-spacing: 0.0073529412em;
  }
  .page-sub-title {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 2.0rem;
    color: var(--v-main-base);
    margin: 10px 0;
  }

  .page-sub-title::before {
    display: inline-block;
    content: '◼️';
    color: #d96738 !important;
    margin-right: 4px;
    -webkit-display: inline-block;
    -webkit-content: '◼️';
    -webkit-color: #d96738 !important;
    -webkit-margin-right: 4px;
  }
  .page-sub-introduction {
    color: #666;
    text-align: center;
    font-size: 14px;
  }
  .font-accent {
    color: var(--v-font-accent-base);
  }
  .sns-icon {
    background-color: var(--v-sub-base);
    border-radius: 50%;
    float: left;
    padding: 2px;
    margin-right: 20px;
    margin-right: 10%;
    text-align: center;
  }
  .sns-icon svg {
    width: 100%;
    height: 100%;
    fill: white;
  }
  .sns-icon:hover {
    -webkit-box-shadow: 0 1px 2px #666;
    box-shadow: 0 1px 2px #666;
  }
  .sns-icon:last-child {
    margin-right: 0;
  }

  .icon-box::before {
    content: "";
    display: block;
    padding-bottom: 100%;
  }
  p {
    white-space: pre-line;
  }
  /* vuetify */
  .theme--light.v-timeline .v-timeline-item__dot {
    box-shadow: 0 3px 10px 0 rgba(4, 76, 100, .2);
    background:rgba(238, 238, 238);
  }

  .theme--light.v-input input, 
  .theme--light.v-input textarea, 
  .v-btn:not(.v-btn--round).v-size--default {
    font-family: "BIZ UDPGothic", "Meiryo UI", Meiryo, -apple-system, BlinkMacSystemFont, sans-serif !important;
  }
  @media (max-width: 600px) {
    .sns-icon {
        margin-right: 3%;
    }
  }
</style>
