<script setup lang="ts">
import NewsArticle from '@/components/NewsArticle.vue';
import type { NewsArticleData } from '@/types/newsArticle';
import sz_01 from '@/assets/shenzhenxinwen/sz_01.png';
import sz_03 from '@/assets/shenzhenxinwen/sz_03.png';
import sz_04 from '@/assets/shenzhenxinwen/sz_04.png';
import sz_05 from '@/assets/shenzhenxinwen/sz_05.png';
import sz_06 from '@/assets/shenzhenxinwen/sz_06.png';

const articleData: NewsArticleData = {
  theme: 'sznews',
  logo: {
    type: 'image',
    src: 'https://www.sznews.com/2016mi/images/logo.png',
    alt: '深圳新闻网',
  },
  title: '银发逐梦展风采！龙光社区长青老龄大学春季班结业演出圆满收官',
  meta: '时间：2025-06-20 20:41 来源：深圳新闻网',
  content: [
    {
      type: 'paragraph',
      text: '2025年6月20日，龙光社区长青老龄大学2025年春季班结业演出顺利举办，社区老年学员们齐聚一堂，用多样才艺展现学习成果，为春季学期画上圆满句号。龙光社区多位领导嘉宾到场见证这一温馨时刻。',
    },
    {
      type: 'paragraph',
      text: '活动现场，龙光社区长青老龄大学常务校长何楚丽首先致辞，肯定了本学期教学成效，并寄语学员们继续保持学习热情。',
    },
    {
      type: 'paragraph',
      text: '随后，现场对吴菊英、马爱芹等10名优秀学员进行表彰，何校长为他们颁发证书，鼓励大家再接再厉。',
    },
    {
      type: 'image',
      src: sz_01,
      alt: '活动图片1',
    },
    {
      type: 'paragraph',
      text: '随着结业演出正式启幕，学员们轮番登台献艺。声乐班合唱《南泥湾》重温红色岁月，兰兰健身舞蹈队以《祝福祖国》舞出爱国热忱，葫芦丝班《龙的传人》奏出民族豪情，老年协会《盛世欢歌》展现盛世祥和，舞蹈班《杏花落》尽显古典韵味，轻舞飞扬健身队《精忠报国》迸发壮志豪情，书法班作品展示彰显笔墨底蕴，独唱《毛主席的话儿记心上》唤醒集体记忆，太极班《中国功夫》压轴登场，尽显传统文化魅力。',
    },
    {
      type: 'imageList',
      src: [sz_03, sz_04],
    },
    {
      type: 'imageList',
      src: [sz_05, sz_06],
    },
    {
      type: 'paragraph',
      text: '整场演出精彩纷呈，充分诠释了“老有所教、老有所学、老有所乐、老有所为”的老年教育理念。学员们在舞台上收获了快乐与认可，也让社区老年教育的温暖底色愈发鲜明。未来，龙光社区长青老龄大学将继续为社区老人搭建优质学习交流平台，助力大家的晚年生活更精彩！',
    },
  ],
  footerText: '责任编辑：孙逊',
};
</script>

<template>
  <NewsArticle :article="articleData" />
</template>
