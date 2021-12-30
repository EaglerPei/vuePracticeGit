<template>

   <div id="mainTabBar">
      <TabBar>
         <TabBarItem curpath="/home" colorActive="red">
            <img slot="itemIcon" src="~assets/images/tabbar/home-black.svg" alt="首页">
            <img slot="itemIconActive" src="~assets/images/tabbar/home-blue.svg" alt="首页">
            <div slot="itemText">首页</div>
         </TabBarItem>
         <TabBarItem curpath="/category">
            <img slot="itemIcon" src="~assets/images/tabbar/category-black.svg" alt="分类">
            <img slot="itemIconActive" src="~assets/images/tabbar/category-blue.svg" alt="分类">
            <div slot="itemText">分类</div>
         </TabBarItem>
         <TabBarItem curpath="/liveStreaming">
            <img slot="itemIcon" src="~assets/images/tabbar/liveStreaming-black.svg" alt="直播">
            <img slot="itemIconActive" src="~assets/images/tabbar/liveStreaming-blue.svg" alt="直播">
            <div slot="itemText">直播</div>
         </TabBarItem>
         <TabBarItem curpath="/profile">
            <img slot="itemIcon" src="~assets/images/tabbar/profile-black.svg" alt="我的">
            <img slot="itemIconActive" src="~assets/images/tabbar/profile-blue.svg" alt="我的">
            <div slot="itemText">我的</div>
         </TabBarItem>
      </TabBar>
   </div>
</template>

<script>
import TabBar from 'components/common/TabBar';
import TabBarItem from 'components/common/TabBarItem';
export default {
   name:"mainTabBar",
   props:{},
   components: {
       TabBar,
       TabBarItem
   },
   data () {
      return {

      };
   },
   computed: {},
   methods: {}
}
</script>
<style>

</style>