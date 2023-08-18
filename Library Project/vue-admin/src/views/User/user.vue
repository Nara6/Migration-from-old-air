<template>
  <v-container>
    <div class="barchart">
      <user_barchart />
    </div>

    <div class="table">
      <user_table />
    </div>
  </v-container>
</template>

<script>
import user_barchart from "@/components/User/user_barchart.vue";
import user_table from "@/components/User/user_table.vue";
export default {
  name: "user",
  components: {
    user_barchart,
    user_table,
  },
  beforeCreate() {
    if (!this.$cookies.get("token")) {
      this.$router.go();
    }
  },
};
</script>

<style lang="scss" scoped>
.table {
  margin-top: 30px;
}
</style>