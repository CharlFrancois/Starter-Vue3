<template>
  <div class="app">
    <span>{{ $t('title') }}</span>
  </div>
</template>

<script>
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { useAuthentificationStore } from "@/stores/authentification";
import { firebaseApp } from "@/db/index";

export default {
  name: "App",
  components: {
  },
  setup() {
    const auth = getAuth(firebaseApp);
    const authentificationStore = useAuthentificationStore();

    onAuthStateChanged(auth, (user) => {
      if (user) {
        authentificationStore.stateChanged(user)
      }
    });

    return {
    };
  },
};
</script>

<style>
#app {
  font-family: "Inter";
  text-align: center;
  height: 100vh;
}
html,
body {
  margin: 0px !important;
  padding: 0px !important;
}
</style>
