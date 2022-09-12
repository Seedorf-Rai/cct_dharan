<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li
            class="nav-item dropdown"
            v-for="(menu, index) in menus"
            :key="index"
          >
            <a v-if="menu.pages.length > 0"
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ menu.title }}
            </a>
            <a v-else
              class="nav-link"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {{ menu.title }}
            </a>
            <ul class="dropdown-menu" v-if="menu.pages.length > 0" >
              <li v-for="(submenu, index) in menu.pages" :key="index">
                <a class="dropdown-item" href="#">{{ submenu.title }}</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "MenuComp",
  computed: {
    ...mapGetters({
      menus: "GET_MENU",
    }),
  },
};
</script>

<style>
</style>