<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  $fa-font-path: "~font-awesome/fonts/";
  @import "~font-awesome/css/font-awesome.min.css";
  $simple-line-font-path: "~simple-line-icons/fonts/";
  @import "~simple-line-icons/css/simple-line-icons.css";
</style>
<style lang="scss">
  // Import Main styles for this application
  @import "../scss/style";
  .pd-5{
    padding: 5px;
  }
  .mg-0{
    margin: 0px;
  }
  .c-pointer{
    cursor: pointer;
  }
</style>
