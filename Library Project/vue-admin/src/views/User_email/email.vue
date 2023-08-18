<template>
  <v-container>
    <h4>On Development</h4>
  </v-container>
</template>

<script>
export default {
    name: 'email',

    beforeCreate() {
    if(!this.$cookies.get("token")){
      this.$router.go()
    }
  },
}
</script>

<style>

</style>