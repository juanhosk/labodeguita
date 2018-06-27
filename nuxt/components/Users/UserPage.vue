<template>
  <section class="ma-4">
    <v-card class="pa-2 mb-1 square">
      <h3>Mis Datos</h3>
    </v-card>
    <user-card></user-card>
    <br>
    <user-data></user-data>
  </section>
</template>
<script>
  import { UserCard, UserData } from '~/components/users/userComponents'
  export default {
    components: {
      UserCard,
      UserData
    }
  }
</script>
