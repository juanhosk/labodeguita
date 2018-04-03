<template>
<v-flex xs12 sm8 offset-sm2>
  <user-page></user-page>
</v-flex>
</template>
<script>
  import { UserPage } from '~/components/users'

  export default {
    components: { UserPage }
  }
</script>
