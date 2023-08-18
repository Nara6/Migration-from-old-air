<template>
<div>
  <div v-if="isAlreadyLogin">
    <MainTemplate />
  </div>
  <div v-else>
    <router-view @isAlreadyLogin="getIsAlreadyLogin"></router-view>
  </div>
</div>
</template>

<script>
import MainTemplate from "@/views/mainTemplate.vue"

export default {
  components: {
    MainTemplate,
  },
  data(){
    return{
      isAlreadyLogin: false,
      test: null
    }
  },
  methods: {
    async getIsAlreadyLogin(e){
      this.isAlreadyLogin = e
    },
    async checkLogin() {
      if(this.$cookies.get('token')){
        this.isAlreadyLogin = true
        this.$router.replace('/dashboard').catch(()=> {})
      }else{
        this.isAlreadyLogin = false
        this.$router.replace('/login').catch(()=> {})
      }
    }
  },
  beforeCreate(){
    this.$router.replace('/login').catch(()=> {})
    // checkLogin()
  },
};
</script>

<style lang="scss" scoped>
</style>
