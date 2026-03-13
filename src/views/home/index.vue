<script setup lang="ts">
import NewsArticle from '@/components/NewsArticle.vue';
import type { NewsArticleData } from '@/types/newsArticle';
import szwb1 from '@/assets/shenzhenxinwen/szwb1.png';
import szwb2 from '@/assets/shenzhenxinwen/szwb2.png';
import szwb3 from '@/assets/shenzhenxinwen/szwb3.png';
import szwb4 from '@/assets/shenzhenxinwen/szwb4.png';

const articleData: NewsArticleData = {
  theme: 'wanbao',
  logo: {
    type: 'image',
    src: 'http://wb.sznews.com/tqPad/webimages/pic-logo.jpg',
    alt: '深圳晚报',
  },
  title: '银发焕彩、夕阳生辉！ 龙光社区长青老龄大学秋季班结业演出圆满落幕',
  meta: '时间：2025-11-28 21:08 编辑：张小编',
  content: [
    {
      type: 'paragraph',
      text: '2025年11月28日，龙光社区长青老龄大学秋季班结业汇报演出温情开演，老年学员们以合唱、舞蹈、器乐演奏、书法展示等十余种形式，集中呈现一学期的学习成果，为全市基层老年教育工作交出了一份生动的实践答卷。',
    },
    {
      type: 'paragraph',
      text: '龙光社区长青老龄大学立足社区实际，开设声乐、舞蹈、葫芦丝、书法、太极等多门类课程，组建专业师资队伍，形成“课堂教学+实践展示”的闭环教学模式，让老年群体在学习中收获知识、缔结友谊、涵养身心。',
    },
    {
      type: 'image',
      src: szwb1,
      alt: '活动图片1',
    },
    {
      type: 'paragraph',
      text: '活动当天，一场兼具艺术深度与情感温度的才艺盛宴精彩上演。声乐班的《珊瑚颂》以经典旋律传递坚韧向上的人生态度；舞蹈班教师独舞《盈盈芙蓉语》尽显专业艺术功底，也折射出学校优质的师资保障；社区老年协会的汉服走秀《苹果香》，将传统服饰文化与银发群体的从容气质相融，打造出别具一格的文化展演；葫芦丝班创新演绎《男儿当自强》与《我和你》，用乐器的“刚柔并济”诠释多元艺术表达；和悦广场舞队的《东方大国》、舞蹈班的古典舞《釉色天青》、乐陶陶民乐队的《我的祖国》，从家国情怀到古典诗意，全方位展现了老年学员的艺术素养；书法班的笔墨展示、葫芦丝教师的《竹楼情歌》独奏、太极班的《太极扇》表演，则在传统文化传承与康养生活践行层面，彰显了老年教育的多元价值。',
    },
    {
      type: 'image',
      src: szwb2,
      alt: '活动图片2',
    },
    {
      type: 'image',
      src: szwb3,
      alt: '活动图片3',
    },
    {
      type: 'image',
      src: szwb4,
      alt: '活动图片4',
    },
    {
      type: 'paragraph',
      text: '“每个节目都是学员们汗水浇灌的成果，更是基层老年教育工作成效的生动注脚。”夕阳无限好，人间重晚晴，龙光社区将继续守护这份银发热忱，为长青老龄大学链接更多优质资源，让社区老人们在新的学期依旧能学有所乐、学有所成，让晚年生活始终闪耀别样光彩！',
    },
  ],
  footerText: '责任编辑：张小编',
};
</script>

<template>
  <NewsArticle :article="articleData" />
</template>
