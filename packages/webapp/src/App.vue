<template>
  <div class="app">
    <navbar-app />
    <router-view></router-view>
  </div>
</template>

<script>
// import { onAuthStateChanged, getAuth } from "firebase/auth";
// import { useAuthentificationStore } from "@/stores/authentification";
// import { firebaseApp } from "@/db/index";
import NavbarApp from '@/components/base/NavbarApp.vue';

export default {
  name: "App",
  components: {
    NavbarApp
  },
  // setup() {
  //   const auth = getAuth(firebaseApp);
  //   const authentificationStore = useAuthentificationStore();

  //   onAuthStateChanged(auth, (user) => {
  //     console.log("passed in");
  //     if (user) {
  //       authentificationStore.stateChanged(user)
  //     }
  //   });

  //   return {
  //   };
  // },
};
</script>

<style>
#app {
  font-family: "Inter";
  text-align: center;
  height: 100vh;
  background-image: url("@/assets/background.webp");
  background-size: cover;
}
html,
body {
  margin: 0px !important;
  padding: 0px !important;
}
</style>
