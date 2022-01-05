
<template>
  <div class="home">
    <div class="logo">
      <img alt="Auto Oléo Logo" src="../assets/logo2.png" />
    </div>
    <div class="midtext">
      <h3>Selecione a marca do seu veículo</h3>
    </div>
    <div class="select">
      <Select2
        v-model="myValue"
        :options="myOptions"
        :settings="{ settingOption: value, settingOption: value }"
        @change="myChangeEvent($event)"
        @select="mySelectEvent($event)"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Select2 from "v-select2-component";
export default {
  name: "Home",
  data() {
    return {
      myValue: "",
      myOptions: ["FIAT", "CHEVROLET", "VOLKSWAGEN", "FORD"], // or [{id: key, text: value}, {id: key, text: value}]
    };
  },
  methods: {
    myChangeEvent(val) {
      this.$router.push("/select-car-add");
    },
    mySelectEvent({ id, text }) {
      console.log({ id, text });
    },
  },
};
</script>

<style>
body {
  background: rgb(2, 2, 2) !important;
  height: 100vh;
  /* font-family: "Ubuntu", sans-serif !important; */
}
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
.logo {
  width: 250px;
  margin: 0 auto;
}
.logo img {
  width: 100%;
}
.btn-add {
  border-radius: 50%;
  padding: 20px;
  background: rgb(9, 243, 106);
  border: none;
}
.midtext {
  margin: 12px 0;
  text-align: center;
}
.select {
  width: 80% !important;
  margin: 0 auto;
}
h1 {
  color: #fff;
  /* font-family: "Ubuntu", sans-serif !important; */
}
h3 {
  /* font-family: "Ubuntu", sans-serif !important; */
  color: #fff;
}
</style>