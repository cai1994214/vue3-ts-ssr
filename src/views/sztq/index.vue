<script setup lang="ts">
import { ref, onMounted } from 'vue';

// 导入图片资源
import tq_01 from '@/assets/shenzhenxinwen/tq_01.png';
import tq_02 from '@/assets/shenzhenxinwen/tq_02.png';

// 定义 newsRef
const newsRef = ref<HTMLElement | null>(null);

// 定义类型
interface NewsImage {
  type: "image";
  src: string;
  alt: string;
  loaded: boolean;
}

interface NewsText {
  type: "paragraph";
  text: string;
}

type ContentItem = NewsImage | NewsText;

interface NewsData {
  logo: {
    imgUrl: string;
    alt: string;
  };
  header: {
    title: string;
    date: string;
    source: string;
  };
  content: ContentItem[];
  footer: {
    editor: string;
  };
}

// 设置图片加载状态
const loadingStates = ref<Record<string, boolean>>({});
const errorStates = ref<Record<string, boolean>>({});

// 从原来的模板中提取数据
const newsData: NewsData = {
  logo: {
    imgUrl: "http://sztqb.sznews.com/tqPad/webimages/pic-logo.jpg",
    alt: "深圳特区报"
  },
  header: {
    title: "学思想，强党性，重实践，建新功”系列活动—龙光社区长青老龄大学2023年春季班表彰大会暨结业汇演活动纪实",
    date: "2024-03-28 20:05",
    source: "深圳特区报"
  },
  content: [
    {
      type: "paragraph",
      text: `2024年3月28日，龙光社区长青老龄大学举办了开学典礼，常委校长何楚丽及校委成员、老师、学员代表踊跃参加本次活动。学员们满怀期待地走进长青课堂，洋溢着幸福和自豪，精神饱满的迎接新学期的开始。`
    },
    {
      type: "image",
      src: tq_01,
      alt: "活动图片1",
      loaded: false
    },
    {
      type: "paragraph",
      text: `办学专员传达了有关文件精神和重要指示，部署贯彻落实具体措施；表达了长青老龄大学坚持“老有所学、老有所为、老有所乐”的办学方针，生动的介绍了本学期丰富的课程内容和新增特色体验课程—美妆课和模特形体课，吸引了广大老年朋友踊跃报名。龙光社区党委积极响应上级号召，为长者朋友们提供了舒适的教学环境，开设每学期8次公共课程：1次为开学第一课、1次为思想政治课、6次为公共课（5次模特形体课、1次美妆课），每学期2次党课。除公共课程、党课外，春季、秋季学期还分别开设5门长青老龄大学课程：声乐类、舞蹈类、二胡学习类、书法类、太极类课程。`
    },
    {
      type: "image",
      src: tq_02,
      alt: "活动图片2",
      loaded: false
    },
    {
      type: "paragraph",
      text: `长青老龄大学从无到有离不开老师们、学员们的共同努力，学员们充满热情、反响热烈、掌声不断。自开课报名开始就受到了长者朋友们的大力支持和踊跃报名，目前已招募学员近70人，龙光社区长青老龄大学一直以来坚持贯彻新发展理念、构建型发展格局、推动高质量发展，坚持“夕阳对象、朝阳事业”的追求，牢固树立全领域理念，构建“党委统筹、各方参与”的工作格局。在桃源街道党工委的正确领导下，团结协作，积极打造具有桃源特色的长青老龄文化品牌，为深圳打造“老有颐养”民生幸福标杆城市贡献力量。`
    },
    {
      type: "paragraph",
      text: `莫道桑榆晚，为霞尚满天。龙光社区长青老龄大学秉承着“关心老年群体，从实情出发”的使命，结合老年朋友的兴趣爱好，开设多个专业班，极大地丰富了社区老年朋友的生活，为长者们提供了一个学习娱乐和交友的平台，从而促进老年人社会参与，着力构建老年友好型社会。`
    },
  ],
  footer: {
    editor: "王芳"
  }
};

onMounted(() => {
  // 创建 IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const imgContainer = entry.target as HTMLElement;
        const imgId = imgContainer.dataset.imgId as string;

        // 找到对应的图片项
        const imgItem = newsData.content.find(item =>
          item.type === 'image' && (item as NewsImage).src === imgId
        ) as NewsImage | undefined;

        if (imgItem) {
          // 创建一个新的图片元素来预加载
          const img = new Image();
          img.onload = () => {
            // 加载成功
            imgItem.loaded = true;
            loadingStates.value[imgId] = false;
          };
          img.onerror = () => {
            // 加载失败
            loadingStates.value[imgId] = false;
            errorStates.value[imgId] = true;
          };

          // 开始加载图片
          loadingStates.value[imgId] = true;
          img.src = imgId;
        }

        // 图片已处理，取消观察
        observer.unobserve(imgContainer);
      }
    });
  }, {
    root: null,
    rootMargin: '100px',
    threshold: 0.1
  });

  // 开始观察所有图片容器
  setTimeout(() => {
    document.querySelectorAll('.lazy-img-container').forEach(container => {
      observer.observe(container);
    });
  }, 100);
});
</script>

<template>
  <div class="news" ref="newsRef">
    <div class="logoTitle">
      <div class="cont">
        <img :src="newsData.logo.imgUrl" :alt="newsData.logo.alt">
      </div>
    </div>
    <div class="top-cont">
      <h1 class="title">{{ newsData.header.title }}</h1>
      <span class="desc">时间：{{ newsData.header.date }} 来源：{{ newsData.header.source }}</span>
      <p class="line"></p>
    </div>
    <div class="text-cont">
      <template v-for="(item, index) in newsData.content" :key="index">
        <p v-if="item.type === 'paragraph'" class="cont-item">{{ item.text }}</p>
        <div
          v-else-if="item.type === 'image'"
          class="image-container lazy-img-container"
          :data-img-id="item.src"
        >
          <img v-if="item.loaded" :src="item.src" :alt="item.alt" class="fade-in">
          <div v-else-if="loadingStates[item.src]" class="loading-placeholder">加载中...</div>
          <div v-else-if="errorStates[item.src]" class="error-placeholder">图片加载失败</div>
          <div v-else class="loading-placeholder">等待加载</div>
        </div>
      </template>
    </div>
    <div class="tips">[责任编辑：{{ newsData.footer.editor }}]</div>
  </div>
</template>

<style lang="scss" scoped>
.logoTitle {
  margin-bottom: 12px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  background: #fff;
  padding: 10px;
  border-bottom: 1px solid #e8e8e8;
  .cont {
    padding: 10px;
    max-width: 750px;
    box-sizing: border-box;
    & img {
      height: 30px
    }
  }
}
.news {
  box-sizing: border-box;
  max-width: 750px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
}
.top-cont{
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .title {
    text-align: center;
    padding: 0 40px;
  }
  .desc {
    font-size: 12px;
  }
  .line {
    margin-top: 18px;
    border-top: 1px #e5e5e5 solid;
    height: 1px;
    font-size: 0;
    width: 80%;
    margin-bottom: 30px;
  }
}
.text-cont{
  background: #fff;
  padding: 0 3%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: auto;
  .cont-item {
    font-family: 宋体;
    font-size: 12pt;
    line-height: 1.5;
    text-align: justify;
    text-indent: 2em;
    margin-top: 0px;
    margin-bottom: 0px;
  }
  .cont-item-center {
    text-align: center;
    margin: 0;
  }

  .image-container {
    width: 100%;
    max-width: 600px;
    margin: 10px 0;
    min-height: 200px;

    .loading-placeholder, .error-placeholder {
      width: 100%;
      height: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #f5f5f5;
      color: #666;
    }

    .error-placeholder {
      color: #ff5252;
    }
  }

  img {
    max-width: 600px;
    width: 100%;
  }

  .fade-in {
    animation: fadeIn 0.5s;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
}

.tips {
  text-align: right;
  font-size: 14px;
  color: #8a8a8a;
  background: #fff;
  font-weight: 600;
  padding-right: 14px;
  padding-top: 50px;
  padding-bottom: 5px;
}

@media screen and (max-width: 750px) {
  .top-cont {
    .title {
      padding: 0 15px;
    }
    .line {
      width: 95%;
    }
  }
  .text-cont {
    img {
      width: 100%;
      min-width: 300px;
      max-width: 600px;
    }
  }
}
</style>
