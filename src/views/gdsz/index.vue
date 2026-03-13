<script setup lang="ts">
import NewsArticle from '@/components/NewsArticle.vue';
import type { NewsArticleData } from '@/types/newsArticle';
import gd_01 from '@/assets/shenzhenxinwen/gd_01.png';
import gd_02 from '@/assets/shenzhenxinwen/gd_02.png';
import gd_03 from '@/assets/shenzhenxinwen/gd_03.png';

const articleData: NewsArticleData = {
  theme: 'sznews',
  logo: {
    type: 'image',
    src: 'https://www.sznews.com/2016mi/images/logo.png',
    alt: '深圳新闻网',
  },
  title: '贯彻“老有所学，老有所乐”——秋季声乐开课啦',
  meta: '时间：2022-11-14 17:51 来源：深圳新闻网',
  content: [
    {
      type: 'paragraph',
      text: '老有所学，老有所为，与时俱进，开拓创新。珠光社区长青老龄大学负责人在授牌时表示，将继续秉承“增长知识、丰富生活、陶冶情操、促进健康、服务社会”的办学目标和“学、乐、为”相结合的办学原则，与时俱进、开拓创新，整合老年朋友们积极参与，支持珠光社区长青老龄大学发展，共同建设优秀校园。随后，珠光社区相关负责人与长青老龄大学负责人为声乐班和智能手机班的两位教师颁发聘书。学员们纷纷表示：“感谢社区提供学习阵地，家门口的大学丰富了老年人精神文化生活，我们将珍惜学习机会，老有所学、老有所为，继续发光发热回馈社会。”',
    },
    {
      type: 'image',
      src: gd_01,
      alt: '活动图片1',
    },
    {
      type: 'paragraph',
      text: '在声乐学习课上，秉持着循序渐进的教学方法，学员跟随声乐老师，从发声方法、唱歌技巧、如何唱好歌等几个方面，了解了不少声乐基础知识，打好声乐基础。大家一起学习了《送别》，老师就演唱过程中存在的问题，根据学员们的特点进行指导，学员们热情高涨、认真学习，形成了良性互动的课堂氛围。',
    },
    {
      type: 'image',
      src: gd_02,
      alt: '活动图片2',
    },
    {
      type: 'paragraph',
      text: '唱响银龄好声音，展现乐龄新风尚。“唱响新时代 银龄展风采——珠光老年大学声乐教学成果交流”旨在提高老年大学声乐教学水平、促进声乐教学交流与发展，展现老年学员歌颂党和祖国、讴歌新时代、唱响幸福歌的精神风采。此次老年大学声乐课，不仅丰富了学员们的业余文化生活，激发了大家对声乐学习的兴趣，也给辖区内居民们搭建了学习交流的平台，营造了和谐的社区氛围。',
    },
    {
      type: 'image',
      src: gd_03,
      alt: '活动图片3',
    },
    {
      type: 'paragraph',
      text: '雄关漫道真如铁，而今迈步从头越。新学期新气象，期待通过全体师生共同努力，珠光社区长青老龄大学会越办越好！',
    },
  ],
  footerText: '编辑：单铭捷',
};
</script>

<template>
  <NewsArticle :article="articleData" />
</template>
