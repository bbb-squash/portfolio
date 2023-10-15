<template>
  <section id="top">
    <div class="top-container">
      <div class="top-text-area">
        <p class="top-title main--text">
          BBB-<br>SQUASH
        </p>
        <p class="top-text">
          都内でソフトウェアエンジニアをしています。<br>
          バックエンドとインフラがメインです。<br>
          本読んだり、フットサルや散歩して体動かすことが好きです。<br>
          細々とですが、更新してたりします。
        </p>
      </div>
      <div class="top-img" />
    </div>
    <AboutMe />
    <Work />
    <Contact />
  </section>
</template>


<script>
import AboutMe from '@/components/pages/AboutMe';
import Work from '@/components/pages/Work/Work';
import Contact from '@/components/pages/Contact/Contact';
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

<style src="./style.css" scoped></style>
