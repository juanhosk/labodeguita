<template>
  <div>
    <section>
      <v-layout
        column
        wrap
        class="my-5"
        align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h1>Información</h1>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap align-center>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">place</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">¿Donde nos encontramos?</div>
                  </v-card-title>
                  <v-card-text>
                    - Nuestra pequeña tienda esta situada en el centro de Hoyo de Manzanares <br>
                    - Dirección: Av. de la paloma nº10, Hoyo de Manzanares, Madrid<br>
                    - Teléfono: 918565788 <br>
                    - Correo electronico: labodeguita.ice@gmail.com
                  </v-card-text>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.347583637035!2d-3.9112046840852663!3d40.62221597934174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd417763abbb2a13%3A0x530fddb5df90269d!2sLa+Bodeguita!5e0!3m2!1ses!2ses!4v1522077431457" style="width: 100%; height: 300px; border: 0;" allowfullscreen></iframe>
                </v-card>
              </v-flex>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Formulario de contacto</div>
                  </v-card-title>
                  <v-card-text>
                    <v-form v-model="valid" @click:submit.prevent="addMessage">
                      <v-text-field
                        label="Nombre"
                        v-model="name"
                        :rules="nameRules"
                        required
                      ></v-text-field>
                      <v-text-field
                        label="E-mail"
                        v-model="email"
                        :rules="emailRules"
                        required
                      ></v-text-field>
                      <v-text-field
                        name="text"
                        label="Escribe tu consulta"
                        multi-line
                      ></v-text-field>
                    </v-form>
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>
  </div>
</template>
<script>
  export default {
    data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Campo obligatorio'
      ],
      email: '',
      emailRules: [
        v => !!v || 'Campo obligatorio'
      ],
      text: ''
    }),
    methods: {
      addMessage () {
        // let uri = 'http://localhost:4000/items/add'
      }
    }
  }
</script>
