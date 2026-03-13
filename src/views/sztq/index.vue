<script setup lang="ts">
import NewsArticle from '@/components/NewsArticle.vue';
import type { NewsArticleData } from '@/types/newsArticle';
import tq_01 from '@/assets/shenzhenxinwen/tq_01.png';
import tq_02 from '@/assets/shenzhenxinwen/tq_02.png';

const articleData: NewsArticleData = {
  logo: {
    type: 'image',
    src: 'http://sztqb.sznews.com/tqPad/webimages/pic-logo.jpg',
    alt: '深圳特区报',
  },
  title: '桃源街道龙光社区长青老龄大学开课啦',
  meta: '时间：2024-03-28 20:05 来源：深圳特区报',
  content: [
    {
      type: 'paragraph',
      text: '2024年3月28日，龙光社区长青老龄大学举办了开学典礼，常委校长何楚丽及校委成员、老师、学员代表踊跃参加本次活动。学员们满怀期待地走进长青课堂，洋溢着幸福和自豪，精神饱满地迎接新学期的开始。',
    },
    {
      type: 'image',
      src: tq_01,
      alt: '活动图片1',
    },
    {
      type: 'paragraph',
      text: '办学专员传达了有关文件精神和重要指示，部署贯彻落实具体措施；表达了长青老龄大学坚持“老有所学、老有所为、老有所乐”的办学方针，生动介绍了本学期丰富的课程内容和新增特色体验课程——美妆课和模特形体课，吸引了广大老年朋友踊跃报名。龙光社区党委积极响应上级号召，为长者朋友们提供舒适的教学环境，开设每学期8次公共课程：1次开学第一课、1次思想政治课、6次公共课（5次模特形体课、1次美妆课），每学期2次党课。除公共课程、党课外，春季、秋季学期还分别开设5门长青老龄大学课程：声乐类、舞蹈类、二胡学习类、书法类、太极类课程。',
    },
    {
      type: 'image',
      src: tq_02,
      alt: '活动图片2',
    },
    {
      type: 'paragraph',
      text: '长青老龄大学从无到有离不开老师们、学员们的共同努力，学员们充满热情、反响热烈、掌声不断。自开课报名开始就受到了长者朋友们的大力支持和踊跃报名，目前已招募学员近70人。龙光社区长青老龄大学一直以来坚持贯彻新发展理念、构建新发展格局、推动高质量发展，坚持“夕阳对象、朝阳事业”的追求，牢固树立全领域理念，构建“党委统筹、各方参与”的工作格局。在桃源街道党工委的正确领导下，团结协作，积极打造具有桃源特色的长青老龄文化品牌，为深圳打造“老有颐养”民生幸福标杆城市贡献力量。',
    },
    {
      type: 'paragraph',
      text: '莫道桑榆晚，为霞尚满天。龙光社区长青老龄大学秉承着“关心老年群体，从实情出发”的使命，结合老年朋友的兴趣爱好，开设多个专业班，极大地丰富了社区老年朋友的生活，为长者们提供了一个学习娱乐和交友的平台，从而促进老年人社会参与，着力构建老年友好型社会。',
    },
  ],
  footerText: '责任编辑：王芳',
};
</script>

<template>
  <NewsArticle :article="articleData" />
</template>
