<template>
  <div class="home">
    <div class="logo">
      <img alt="Auto Oléo Logo" src="../assets/logo1.png" />
    </div>
    <div class="midtext">
      <h3>Adicionar novo veículo</h3>
    </div>
    <div class="text-center">
      <router-link to="/select-model-add" custom v-slot="{ href, navigate }">
        <md-button
          class="md-icon-button md-primary"
          :href="href"
          @click="navigate"
        >
          <md-icon>add</md-icon>
        </md-button>
      </router-link>
    </div>
  </div>
</template>
<style >
.home {
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  width: 100%;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.md-button.md-theme-default.md-primary {
  background: chartreuse;
}
.md-button.md-theme-default.md-primary .md-icon-font {
  color: #000 !important;
}
</style>
<script>
export default {
  name: "IconButtons",
};
</script>