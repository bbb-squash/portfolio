<template>
  <section id="top">
  <div class="split">
    <div class="split-body">
      <p class="split-title main--text">BBB-<br>SQUASH</p>
      <p class="split-text">
        都内でソフトウェアエンジニアをしています。<br>
        本読んだり、フットサルや散歩して体動かすことが好きです。<br>
        もっと多くの人に自分を知ってもらいたく作成しました。<br>
        細々とですが、更新してたりします。
       </p>
    </div>
    <div class="split-img"></div>
  </div>

  <AboutMe></AboutMe>
  <Work></Work>
  <Contact></Contact>
  </section>
</template>


<script>
import AboutMe from '@/components/pages/AboutMe';
import Work from '@/components/pages/Work';
import Contact from '@/components/pages/Contact';
export default {
  name: 'App',

  components: {
    'AboutMe': AboutMe,
    'Work': Work,
    'Contact': Contact
  },

  data: () => ({ contents: [
    {
      name: 'Home', icon: 'mdi-home', pathName: 'top' 
    },
    {
      name: 'About Me', icon: 'mdi-human-handsup', pathName: 'about' 
    },
    {
      name: 'Work', icon: 'mdi-tools', pathName: 'work' 
    },
    {
      name: 'Contact', icon: 'mdi-pin', pathName: 'contact' 
    }
  ] })
}
</script>
