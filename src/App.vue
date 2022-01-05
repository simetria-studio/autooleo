<template>
  <div id="app">
    <div>
      <div class="phone-viewport">
        <md-bottom-bar md-type="shift">
          <router-link to="/" custom v-slot="{ href, navigate, isActive }">
            <md-bottom-bar-item
              :class="{ active: isActive }"
              id="bottom-bar-item-home"
              md-label="Home"
              md-icon="home"
              :href="href"
              @click="navigate"
            >
            </md-bottom-bar-item>
          </router-link>
          <router-link to="/add-car" custom v-slot="{ href, navigate, isActive }">
            <md-bottom-bar-item
              :class="{ active: isActive }"
              id="bottom-bar-item-home"
              md-label="Etiqueta"
              md-icon="assignment"
              :href="href"
              @click="navigate"
            >
            </md-bottom-bar-item>
          </router-link>
          <router-link to="/" custom v-slot="{ href, navigate, isActive }">
            <md-bottom-bar-item
              :class="{ active: isActive }"
              id="bottom-bar-item-home"
              md-label="Social"
              md-icon="public"
              :href="href"
              @click="navigate"
            >
            </md-bottom-bar-item>
          </router-link>
        </md-bottom-bar>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "ChangingThemes",
  data: () => ({
    theme: "teal",
  }),
};
</script>




<style>
.md-bottom-bar.md-theme-default.md-type-shift {
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgb(16, 182, 10) !important;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  color: #000 !important;
}
md-bottom-bar-item {
  color: #000 !important;
}
.phone-viewport {
  width: 100%;
  color: #000 !important;
  height: 200px;
  display: inline-flex;
  align-items: flex-end;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  border: 1px solid rgba(#000, 0.26);
  background: rgba(#000, 0.06);
  z-index: 1000;
}
</style>