<template>
 <div>
   <div class="header">{{title}}</div>
 </div>
</template>
 
<script>
export default {
 props: ['title']
}
</script>
<style scoped>
  .header{
    width: 100%;
    background: linear-gradient(273deg, #2a81ea 0%, rgb(10, 49, 98) 100%);
    color: white;
    font-size: 2.5rem;
    font-weight: bold ;
    font-family:  'Inria Sans', sans-serif;
    align-items: center;
    height: 60px;
  }
</style>