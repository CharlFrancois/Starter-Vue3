<template>
  <div class="navbar">
    <div v-if="isMobile()">
      <div class="content">
        <img src="@/assets/account.svg" />
        <img src="@/assets/reload-logo.png" class="logo" />
        <img @click="openedMenu = !openedMenu" src="@/assets/menu.svg" />
      </div>
      <div v-if="openedMenu" class="opened-menu">
        <div class="main-elements">
          <div v-for="(el, i) in elements" :key="i" class="element">
            <span>{{ $t(`navbar.${el}`) }}</span>
            <div class="separator" />
          </div>
        </div>
        <div class="auth-elements">
          <div v-for="(el, i) in auth" :key="i" class="element">
            <span>{{ $t(`navbar.${el}`) }}</span>
            <div class="separator" />
          </div>
        </div>
      </div>
    </div>
    <div class="content" v-else>
      <span class="element">{{ $t("navbar.home") }}</span>
      <span class="element">{{ $t("navbar.bar") }}</span>
      <img src="@/assets/reload-logo.png" class="logo" />
      <span class="element">{{ $t("navbar.franchise") }}</span>
      <span class="element">{{ $t("navbar.contact") }}</span>
    </div>
  </div>
</template>

<script>
import { isMobile } from "@/utils";
import { ref } from "vue";

export default {
  name: "NavbarApp",
  setup() {
    const elements = ["home", "bar", "franchise", "contact"];
    const auth = ["signin", "signup"];
    const openedMenu = ref(false);

    return {
      elements,
      auth,
      openedMenu,
      isMobile,
    };
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  .content {
    position: relative;
    height: 2rem;
    background-color: #2c2c2c;
    color: white;
    display: flex;
    justify-content: center;
    gap: 2rem;
    padding: 1rem;
    border-bottom: 3px solid #ffffff;
    border-radius: 0px 0px 15px 15px;
    span {
      font-family: "Inter";
      font-size: 1.2rem;
      text-transform: uppercase;
      align-self: center;
    }
    .logo {
      height: 7rem;
      bottom: -0.5rem;
    }
  }
  @media screen and (max-width: 760px) {
    .content {
      justify-content: space-between;
      z-index: 999;
    }
    .opened-menu {
      position: absolute;
      top: 0;
      height: 100vh;
      width: 100vw;
      background-color: #1c1b1b;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .main-elements,
      .auth-elements {
        display: flex;
        flex-direction: column;
        align-self: center;
        width: 100%;
        gap: 2rem;
        .element {
          font-family: "Inter";
          font-size: 1.5rem;
          font-weight: 300;
          text-transform: uppercase;
          text-align: right;
          span {
            padding-right: 2rem;
          }
          .separator {
            width: 100%;
            height: 2px;
            background-color: white;
          }
        }
      }
      .auth-elements {
        margin-top: 30%;
      }
    }
  }
}
</style>
