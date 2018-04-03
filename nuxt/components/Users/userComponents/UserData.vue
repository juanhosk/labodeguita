<template>
  <v-card class="p-2 square">
    <h3>Datos de mi cuenta</h3>
    <hr>
    <div>
      <v-layout row>
        <v-flex xs2>
          <v-subheader><v-icon>perm_identity</v-icon></v-subheader>
        </v-flex>
        <v-flex xs8>
          <v-text-field
            v-model="userName"
            name="input-3"
            label="Nombre: "
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs2>
          <v-subheader><v-icon>email</v-icon></v-subheader>
        </v-flex>
        <v-flex xs8>
          <v-text-field
            name="input-3"
            label="Email: "
            value="email"
            disabled
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-btn
        color="blue-grey"
        class="white--text"
      >
        Guardar
        <v-icon right dark>save</v-icon>
      </v-btn>
    </div>
  </v-card>
</v-flex>
</template>
<script>
  export default {
    data () {
      return {
        userName: 'Hey'
      }
    }
  }
</script>
<style lang="scss" scoped>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
