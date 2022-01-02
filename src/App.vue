<template>
  <div id="nav">
    <router-link to="/">Beranda</router-link> |
    <router-link to="/berita">Berita</router-link>
  </div>
  <router-view />
  <footer>
    <div id="footer">
      <div id="nav">
        <router-link to="/privacy-policy">Privacy Policy</router-link> |
        <router-link to="/terms">Terms</router-link>
      </div>
      <p class="small-font">
        Made with <span class="love">❤</span> by
        <a href="https://github.com/Khuirul-Huda">Khuirul Huda</a>
      </p>
    </div>
  </footer>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap");
#app {
  font-family: Quicksand, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: rgb(247, 71, 247);
}

#footer {
  background-color: white;
  margin-top: 5rem;
}

.small-font {
  font-size: 15px;
}

.love {
  color: purple;
}
</style>
