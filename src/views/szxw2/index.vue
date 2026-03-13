<script setup lang="ts">
import NewsArticle from '@/components/NewsArticle.vue';
import type { NewsArticleData } from '@/types/newsArticle';
import sz_05 from '@/assets/shenzhenxinwen/sz_05.png';
import sz_06 from '@/assets/shenzhenxinwen/sz_06.png';
import sz_07 from '@/assets/shenzhenxinwen/sz_07.png';

const articleData: NewsArticleData = {
  theme: 'sznews',
  logo: {
    type: 'image',
    src: 'https://www.sznews.com/2016mi/images/logo.png',
    alt: '深圳新闻网',
  },
  title: '加强老年大学内在建设 努力开创老年教育事业新局面',
  meta: '时间：2022-06-02 21:11 来源：深圳新闻网',
  content: [
    {
      type: 'paragraph',
      text: '在端午节来临之际，珠光社区长青老龄大学开课啦！桃源街道珠光社区长青老龄大学（以下简称“珠光校”）举办了开学典礼，珠光社区居委会主任兼珠光校校长张燕雄及校委成员、老师、学员代表近30人参与本次活动。学员们精神饱满地来到教室，热情地洋溢着幸福和自豪，走进长青课堂。',
    },
    {
      type: 'image',
      src: sz_05,
      alt: '活动图片1',
    },
    {
      type: 'paragraph',
      text: '首先张燕雄校长开讲了开学第一课——《在走好群众路线中推动党史学习教育常态化长效化》，从人民群众是立党兴党强党之本的角度讲述了只有走好新时代党的群众路线，深深扎根人民、紧紧依靠人民，不断赢得人民支持，才能进一步夯实党的执政基础，实现中华民族伟大复兴目标坚实迈进。',
    },
    {
      type: 'image',
      src: sz_06,
      alt: '活动图片2',
    },
    {
      type: 'paragraph',
      text: '随后，办学专员传达了有关文件精神和重要指示，部署贯彻落实具体措施，介绍学期发展规划以及学校的规章制度，强调纪律问题，用行动来诠释责任。据介绍，珠光社区党委积极响应上级号召，筹办建立社区级长青老龄大学。按照《南山区长青老龄大学体系标准化建设分阶创建工作方案》文件要求办学，珠光校已完成场地选址、校委选聘、需求调研、招生报名等工作，目前已招募学员近90人，开设了党课、思政课2门公共课，声乐、舞蹈、国画/书画、柔力球、智能手机学习5门专业课。2022年分为春季、秋季两个学期开学，致力于促进长者老有所学、老有所乐、老有所为，提升其幸福感、安全感、获得感。感谢桃源街道党工委，感谢珠光社区党委，积极培育银发经济的多方面发展，从而积极应对老龄化，对老年人给予更多关心与关爱，为长者们提供了一个学习娱乐和交友的平台，促进老年人社会参与，着力构建老年友好型社会，加强新时代老年工作，以“闯”的精神、“创”的劲头、“干”的作风，践行“学习是最好的养老”理念。',
    },
    {
      type: 'image',
      src: sz_07,
      alt: '活动图片3',
    },
    {
      type: 'paragraph',
      text: '雄关漫道真如铁，而今迈步从头越。新学期新气象，期待通过全体师生共同努力，珠光社区长青老龄大学会越办越好！',
    },
  ],
  footerText: '责任编辑：李旖露',
};
</script>

<template>
  <NewsArticle :article="articleData" />
</template>
