<template>
  <div id="feed">
    <div id="nav">
      <router-link to="/">Login</router-link> |

      <router-link to="/about">A propos</router-link>
    </div>
    <div>
      <div class="parent">
        <div class="div1"><LogoSearch></LogoSearch></div>
        <div class="div2"><TopMenu></TopMenu></div>
        <div class="div3"><UserAccountSetting></UserAccountSetting></div>
        <div class="div4">Avatar + icon activité</div>
        <div class="div5">Feed</div>
        <div class="div6">Anniversaire + Contact</div>
        <div class="div7">Copyright</div>
        <div class="div8">Messagerie</div>
      </div>
    </div>
  </div>
</template>

<script>
import LogoSearch from "../components/feed/Logo.vue"
import TopMenu from "../components/feed/TopMenu.vue"
import UserAccountSetting from "../components/feed/UserAccountSetting.vue"
export default {
  name: "Feed",
  components: { LogoSearch, TopMenu, UserAccountSetting }
};
</script>

<style lang="scss" scoped>


.parent {
   
  display: grid;
  grid-template-columns: 50px 0.3fr 1fr 0.3fr 50px;
  grid-template-rows: 0.2fr 1fr 0.5fr;
  grid-column-gap: 10px;
  grid-row-gap: 0px;
}

.div1 {
  grid-area: 1 / 2 / 2 / 3;
}
.div2 {
  grid-area: 1 / 3 / 2 / 4;
}
.div3 {
  grid-area: 1 / 4 / 2 / 5;
}
.div4 {
  grid-area: 2 / 2 / 3 / 3;
}
.div5 {
  grid-area: 2 / 3 / 3 / 4;
}
.div6 {
  grid-area: 2 / 4 / 3 / 5;
}
.div7 {
  grid-area: 3 / 2 / 4 / 3;
}
.div8 {
  grid-area: 3 / 4 / 4 / 5;
}
</style>
