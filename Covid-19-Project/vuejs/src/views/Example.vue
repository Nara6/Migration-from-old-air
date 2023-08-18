<template>
  <div>
    <MapComponent />
    <Sharenews />
    <Askquestion />
    <Relatednews/>
  </div>
</template>
<script>
import MapComponent from "../components/MapComponent.vue";
import Sharenews from "../components/Sharenews";
import Askquestion from "../components/Askquestion";
import Relatednews from "../components/Relatednews";
export default {
  components: {
    MapComponent,
    Sharenews,
    Askquestion,Relatednews
  }
};
</script>
st