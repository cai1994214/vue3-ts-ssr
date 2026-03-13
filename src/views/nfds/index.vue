<script setup lang="ts">
import NewsArticle from '@/components/NewsArticle.vue';
import type { NewsArticleData } from '@/types/newsArticle';
import ds_01 from '@/assets/shenzhenxinwen/ds_01.png';
import ds_02 from '@/assets/shenzhenxinwen/ds_02.png';
import ds_03 from '@/assets/shenzhenxinwen/ds_03.png';
import ds_04 from '@/assets/shenzhenxinwen/ds_04.png';
import ds_05 from '@/assets/shenzhenxinwen/ds_05.png';
import ds_06 from '@/assets/shenzhenxinwen/ds_06.png';
import ds_07 from '@/assets/shenzhenxinwen/ds_07.png';

const articleData: NewsArticleData = {
  theme: 'nandu',
  logo: {
    type: 'sprite',
    image: 'https://ipaper.oeeee.com/ipaper/images/paper_icon.png',
    position: 'center -355px',
    size: '150px auto',
    width: '150px',
    height: '50px',
    alt: '南方都市报',
  },
  title: '2024年庆祝元旦联欢会暨龙光社区长青老龄大学秋季结业汇演圆满落幕',
  meta: '时间：2024-12-12 20:21 来源：南方都市报',
  content: [
    {
      type: 'paragraph',
      text: '12月12日下午，2024年庆祝元旦联欢会暨龙光社区长青老龄大学秋季结业汇演在龙井村篮球场举办。桃源街道长青老龄大学党委书记赵晨曦、龙光社区党委副书记郑建如、龙光社区长青老龄大学校长林晓亮、民生微实事负责人伍家耀、办学专员林晓双、社区党群中心主任曾春娴、龙光社区长青老龄大学常务校长何楚丽出席本次活动，共同见证学员们蓬勃向上的精神风貌和孜孜不倦的学习成果。',
    },
    {
      type: 'image',
      src: ds_01,
      alt: '活动图片1',
    },
    {
      type: 'paragraph',
      text: '（校长林晓亮、常务校长何楚丽给长青老龄大学秋季班优秀学员颁发证书）',
    },
    {
      type: 'image',
      src: ds_02,
      alt: '活动图片2',
    },
    {
      type: 'paragraph',
      text: '活动现场气氛热烈，社区领导、嘉宾与学员齐聚一堂。汇演节目精彩纷呈，太极班的《42式太极拳表演》刚柔并济、二胡班的《画你、康定情歌连奏》悠扬婉转、舞蹈班的《零落》灵动飘逸、模特形体《声声慢》等等，涵盖太极、二胡、舞蹈、合唱、独唱、模特秀、书法展示等多种表演形式，充分展现学员们的学习成果与精神风貌，赢得阵阵掌声。',
    },
    {
      type: 'imageList',
      src: [ds_03, ds_04],
      names: ['舞蹈《别上当》', '《书法展示》'],
    },
    {
      type: 'imageList',
      src: [ds_05, ds_06],
      names: ['合唱《复兴的力量》', '舞蹈《零落》'],
    },
    {
      type: 'paragraph',
      text: '出色的节目，展示了龙光社区老龄大学的风采，嘹亮的歌声表达了全校师生无限的热情，曼妙的舞姿让我们看到了龙光社区长青老龄大学铸就的无数个潇洒俏夕阳。“老有所教、老有所学、老有所乐、老有所为”在这里得到了最好的诠释。',
    },
    {
      type: 'paragraph',
      text: '此次活动不仅是学员成果的展示，也为社区增添了浓郁文化氛围，进一步推动社区老龄事业发展。',
    },
    {
      type: 'image',
      src: ds_07,
      alt: '活动图片4',
    },
  ],
  footerText: '责任编辑：徐洋',
};
</script>

<template>
  <NewsArticle :article="articleData" />
</template>
