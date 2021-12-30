<template>
   <div id="tabbar">
      <slot></slot>
   </div>
</template>

<script>
export default {
   name:"tabbar",
   props:{},
   components: {},
   data () {
      return {

      };
   },
   computed: {},
   methods: {}
}
</script>
<style>
#tabbar{
   display:flex;
   justify-content: space-around;
   height:49px;
   align-items: center;

   position:fixed;
   left:0;
   right:0;
   bottom:0;

   box-shadow: 0 -1px 1px rgba(0,0,0,0.3);
}
</style>