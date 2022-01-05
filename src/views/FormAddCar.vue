<template>
  <b-container class="car-container">
    <div class="car">
      <div class="text-center">
        <h4>MODELO DO VEÍCULO</h4>
      </div>
      <div class="text-center">
        <h4>Nome do modelo do veiculo</h4>
      </div>
    </div>
    <div class="form-add my-4">
      <form class="md-layout">
        <md-card class="md-layout-item md-size-50 md-small-size-100">
          <md-card-header>
            <div class="md-title">Óleo Motor c/ Filtro</div>
          </md-card-header>

          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <md-icon>event</md-icon>
                  <label>Data de troca</label>
                  <md-input v-model="date" type="date"></md-input>
                </md-field>
              </div>
            </div>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label>Viscosidade</label>
                  <md-input v-model="initial" type="text"></md-input>
                </md-field>
              </div>
            </div>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label>Quantidade c/ Filtro</label>
                  <md-input v-model="initial" type="text"></md-input>
                </md-field>
              </div>
            </div>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label>Marca do óleo</label>
                  <md-input v-model="initial" type="text"></md-input>
                </md-field>
              </div>
            </div>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label>Marca do filtro de óleo</label>
                  <md-input v-model="initial" type="text"></md-input>
                </md-field>
              </div>
            </div>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label>KM Troca</label>
                  <md-input v-model="initial" type="text"></md-input>
                </md-field>
              </div>
            </div>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label>KM Próxima troca</label>
                  <md-input v-model="initial" type="text"></md-input>
                </md-field>
              </div>
            </div>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label>KM Troca</label>
                  <md-input v-model="initial" type="text"></md-input>
                </md-field>
              </div>
            </div>
          </md-card-content>
          <md-card-header>
            <div class="md-title">Filtro Ar</div>
          </md-card-header>
          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label>Marca</label>
                  <md-input v-model="initial" type="text"></md-input>
                </md-field>
              </div>
            </div>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label>KM Troca</label>
                  <md-input v-model="initial" type="text"></md-input>
                </md-field>
              </div>
            </div>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label>KM Próxima troca</label>
                  <md-input v-model="initial" type="text"></md-input>
                </md-field>
              </div>
            </div>
          </md-card-content>
          <md-card-header>
            <div class="md-title">Filtro Combustível</div>
          </md-card-header>
          <md-card-content>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label>Marca</label>
                  <md-input v-model="initial" type="text"></md-input>
                </md-field>
              </div>
            </div>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label>KM Troca</label>
                  <md-input v-model="initial" type="text"></md-input>
                </md-field>
              </div>
            </div>
            <div class="md-layout md-gutter">
              <div class="md-layout-item md-small-size-100">
                <md-field>
                  <label>KM Próxima troca</label>
                  <md-input v-model="initial" type="text"></md-input>
                </md-field>
              </div>
            </div>
          </md-card-content>
          <md-progress-bar md-mode="indeterminate" v-if="sending" />

          <md-card-actions>
            <md-button type="submit" class="md-primary" :disabled="sending"
              >Salvar</md-button
            >
          </md-card-actions>
        </md-card>

        <md-snackbar :md-active.sync="userSaved"
          >The user was saved with success!</md-snackbar
        >
      </form>
    </div>
    <div class="separator"></div>
  </b-container>
</template>
<style>
html {
  background: rgb(2, 2, 2) !important;
  /* font-family: "Ubuntu", sans-serif !important; */
}
body {
  background: rgb(2, 2, 2) !important;
}
.separator {
  height: 10vh;
}
.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
.car-container {
  margin: 25px 0;
}
.car {
  display: flex;
  flex-direction: column;
  /* height: 100vh; */
  background: #fff;
  border-radius: 15px;
}
</style>

<script>
</script>