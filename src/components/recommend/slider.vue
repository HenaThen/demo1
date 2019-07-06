<template>
    <div v-if="recommends" id="commend-slider" class="carousel slider" data-ride="carousel">
        <!-- 指示符 -->
        <ul class="carousel-indicators">
          <li v-for="(item,index) in recommends" :key="index" data-target="#commend-slider" :data-slide-to="index" :class="[index == 0 ? 'active' : '']"></li>
        </ul>
        <div class="carousel-inner p-2">
          <div class="carousel-item" v-for="(item, index) in recommends" :key="index" :class="[index == 0 ? 'active' : '']">
            <a :href="item.linkUrl">
              <img :src="item.picUrl" width="100%" class="rounded">
            </a>
          </div>
        </div>
    </div>
</template>

<script type="text/javascript">
export default {
  props: ['recommends']
}
</script>
