<script setup lang="ts">
import NewsArticle from '@/components/NewsArticle.vue';
import type { NewsArticleData } from '@/types/newsArticle';
import jingbao1 from '@/assets/jingbao/jingbao1.png';
import jingbao2 from '@/assets/jingbao/jingbao2.png';

const articleData: NewsArticleData = {
  theme: 'jingbao',
  logo: {
    type: 'image',
    src: 'https://jb.sznews.com/ePaper/static/img/jblogo.d03962ec.png',
    alt: '晶报',
  },
  title: '秋韵润心，乐学不辍——龙光社区长青老龄大学秋季开学第一课温馨启幕',
  meta: '时间：2025-09-18 19:54 编辑：任雪',
  content: [
    {
      type: 'paragraph',
      text: '金风送爽，硕果飘香。在这充满希望与收获的季节，龙光社区长青老龄大学秋季学期开学第一课如期而至，书法、葫芦丝、声乐、舞蹈、太极五大课程精彩开讲，吸引了众多老年学员踊跃参与，处处洋溢着浓厚的学习氛围与蓬勃生机。',
    },
    {
      type: 'image',
      src: jingbao1,
      alt: '活动图片1',
    },
    {
      type: 'paragraph',
      text: '书法课上，墨香氤氲，老师针对学员的基础差异进行个性化指导，从笔法、章法到审美提升，循序渐进引导大家领略书法艺术的精髓；葫芦丝课堂上，老师通过趣味教学让学员快速入门，从识谱到吹奏，学员们互帮互助、共同进步，清脆的乐声回荡在校园；声乐课上，专业老师带领学员们进行发声训练，讲解乐理知识，大家齐声合唱经典曲目，用歌声抒发对美好生活的向往；舞蹈课上，学员们身着整齐服装，在老师的带领下编排新舞步，灵动的舞姿展现着老年人的活力与风采；太极课上，老师细致拆解每一个动作要领，强调呼吸与动作的协调配合，学员们神情专注，在舒缓的节奏中修身养性、强健体魄。',
    },
    {
      type: 'image',
      src: jingbao2,
      alt: '活动图片2',
    },
    {
      type: 'paragraph',
      text: '据悉，龙光社区长青老龄大学始终秉持“老有所学、老有所乐、老有所为”的办学理念，不断丰富课程内容、创新教学模式。后续，学校还将组织各类文艺展演、交流活动，让老年学员们在学习中增长才干、收获友谊，在充实的学习生活中安享幸福晚年。',
    },
  ],
  footerText: '责任编辑：任雪',
};
</script>

<template>
  <NewsArticle :article="articleData" />
</template>
