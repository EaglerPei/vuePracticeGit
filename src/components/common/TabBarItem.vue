<template>
   <div class="tabbaritem"  @click="itemClick">
      <div v-if="!isAcitve">
         <slot name="itemIcon"></slot>
      </div>
      <div v-else>
         <slot name="itemIconActive"></slot>
      </div>
      <div :style="styleActive">
          <slot name="itemText"></slot>
      </div>
   </div>
</template>

<script>
export default {
   name:"tabbaritem",
   props:{
      curpath:String,
      colorActive:{
         type:String,
         default:"#1296DB"
      }
   },
   components: {},
   data () {
      return {

      };
   },
   computed: {
      isAcitve(){
         return this.$route.path.indexOf(this.curpath) !== -1;
      },
      styleActive(){
         return this.isAcitve?{color:this.colorActive}:{};
      }
   },
   methods: {
      itemClick(){
         this.$router.push(this.curpath);
      }
   }
}
</script>
<style>
.tabbaritem{
   text-align:center;
}
.tabbaritem img{
   width:24px;
   height:24px;
}
</style>