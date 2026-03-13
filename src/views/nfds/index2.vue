<script setup lang="ts">
import NewsArticle from '@/components/NewsArticle.vue';
import type { NewsArticleData } from '@/types/newsArticle';
import ds_110 from '@/assets/shenzhenxinwen/ds_110.png';
import ds_111 from '@/assets/shenzhenxinwen/ds_111.png';

const articleData: NewsArticleData = {
  logo: {
    type: 'sprite',
    image: 'https://ipaper.oeeee.com/ipaper/images/paper_icon.png',
    position: 'center -355px',
    size: '150px auto',
    width: '150px',
    height: '50px',
    alt: '南方都市报',
  },
  title: '春启新程，艺暖桑榆——龙光社区老龄大学春季开学第一课圆满开课',
  meta: '时间：2025-04-02 21:26 来源：南方都市报',
  content: [
    {
      type: 'paragraph',
      text: '春风送暖，万象更新。龙光社区老龄大学春季学期正式拉开帷幕，书法、葫芦丝、声乐、舞蹈、太极五门专业课程同步开课，百余位老年学员满怀热忱走进课堂，在墨香、乐声与舞姿中开启充实的“银发求学路”。',
    },
    {
      type: 'image',
      src: ds_110,
      alt: '活动图片1',
    },
    {
      type: 'paragraph',
      text: '书法课堂上，老师从握笔姿势、笔画结构入手，逐字示范讲解，学员们凝神静气，一笔一划临摹练习，在笔墨流转间感受传统文化的魅力；葫芦丝课上，悠扬的旋律此起彼伏，老师耐心指导学员们掌握气息控制与指法技巧，零基础学员也能跟着节奏吹奏简单曲目；声乐课上，学员们在老师的带领下练声开嗓，歌声嘹亮婉转，传递着对生活的热爱；舞蹈教室里，大家伴随着轻快的音乐翩翩起舞，舒展身姿、陶冶情操，脸上洋溢着自信的笑容；太极课上，学员们跟随老师缓慢起势、一招一式刚柔并济，在动静结合中感受太极文化的博大精深。',
    },
    {
      type: 'image',
      src: ds_111,
      alt: '活动图片2',
    },
    {
      type: 'paragraph',
      text: '新学期，龙光社区老龄大学将持续优化课程设置、提升教学质量，为老年朋友们搭建学习交流、展示自我的平台，让更多老年人在学习中收获快乐、丰富生活，乐享幸福晚年。',
    },
  ],
  footerText: '责任编辑：孔悦然',
};
</script>

<template>
  <NewsArticle :article="articleData" />
</template>
