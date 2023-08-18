<template>
  <span class="top">
           <a href="#top"><i class="bi bi-arrow-up-circle"></i></a>
  </span>
</template>

<script>
export default {
    name:'Go_Up'
}
</script>

<style lang="scss" >
    .top {
            
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 101;
           border-radius: 50%;
           a{
               color:#FF7C02;
               font-size: 50px;
           }
    }
</style>