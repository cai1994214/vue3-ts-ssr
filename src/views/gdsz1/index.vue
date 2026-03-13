<script setup lang="ts">
import NewsArticle from '@/components/NewsArticle.vue';
import type { NewsArticleData } from '@/types/newsArticle';
import gd_04 from '@/assets/shenzhenxinwen/gd_04.png';
import gd_05 from '@/assets/shenzhenxinwen/gd_05.png';
import gd_06 from '@/assets/shenzhenxinwen/gd_06.png';

const articleData: NewsArticleData = {
  logo: {
    type: 'image',
    src: 'https://www.sznews.com/2016mi/images/logo.png',
    alt: '深圳新闻网',
  },
  title: '桃源街道——珠光社区老龄大学开课啦',
  meta: '时间：2022-11-14 18:20 来源：深圳新闻网',
  content: [
    {
      type: 'paragraph',
      text: '在新时代文明实践中发挥余热。俗话说：活到老，学到老。老年学校的学员们日复一日地坚持学习，培养兴趣。除了收获新知识、认识新事物，还能结识新朋友，让老年朋友们对文明城市和文明生活有更深层次的理解，丰富社区长者的晚年生活，真正让社区老年人老有所学、老有所为、老有所乐。',
    },
    {
      type: 'image',
      src: gd_04,
      alt: '活动图片1',
    },
    {
      type: 'paragraph',
      text: '老年大学作为加强老年思想政治教育的重要阵地，坚持把思想政治教育与老有所学、老有所为、老有所乐结合起来，组织引导老年学员发挥兴趣特长，展现新时代老年风采，积极为珠光社区高质量发展贡献桑榆力量。“开学第一课”围绕《学习贯彻习近平总书记视察广东重要讲话重要指示精神》主题进行授课。从“习近平总书记四次视察广东”的时间节点为依据展开讲解，以贴近群众生活的事例进行深刻阐述，并结合国内外经济、政治、生态、文化等内容进行系统解读。课程主题鲜明、立意深远、内容丰富，既有鲜明的理论指导性，又有丰富具体的事例，让师生们感受到习近平总书记对广东发展的殷切期望和对广东人民的深情牵挂。',
    },
    {
      type: 'image',
      src: gd_05,
      alt: '活动图片2',
    },
    {
      type: 'paragraph',
      text: '通过开学第一课的学习，长青老龄大学的学员们在这里收获满满，始终保持高涨的学习热情和崭新的精神风貌，充分发挥余热，积极传播正能量，实现老有所学、老有所为、老有所乐。',
    },
    {
      type: 'image',
      src: gd_06,
      alt: '活动图片3',
    },
    {
      type: 'paragraph',
      text: '最后感谢桃源街道党工委，感谢珠光社区党委，积极培育银发经济多方面发展，从而积极应对老龄化，对老年人给予更多关心与关爱，为长者们提供一个学习娱乐和交友的平台，促进老年人社会参与，着力构建老年友好型社会，加强新时代老年工作，以“闯”的精神、“创”的劲头、“干”的作风，践行“学习是最好的养老”理念。',
    },
  ],
  footerText: '编辑：刘梦婷 吴超 责任编辑：黄春才',
};
</script>

<template>
  <NewsArticle :article="articleData" />
</template>
