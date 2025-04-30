<script setup lang="ts">
import { ref, onMounted } from 'vue';

// 所有导入放在文件顶部
import szwb1 from '@/assets/shenzhenxinwen/szwb1.png';
import szwb2 from '@/assets/shenzhenxinwen/szwb2.png';
import szwb3 from '@/assets/shenzhenxinwen/szwb3.png';
import szwb4 from '@/assets/shenzhenxinwen/szwb4.png';
import szwb5 from '@/assets/shenzhenxinwen/szwb5.png';
import szwb6 from '@/assets/shenzhenxinwen/szwb6.png';
import szwb7 from '@/assets/shenzhenxinwen/szwb7.png';
import szwb8 from '@/assets/shenzhenxinwen/szwb8.png';
import szwb9 from '@/assets/shenzhenxinwen/szwb9.png';
import szwb10 from '@/assets/shenzhenxinwen/szwb10.png';

// 先定义 newsRef
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
    editor: string;
  };
  content: ContentItem[];
  footer: {
    editor: string;
  };
}

// 设置图片加载状态
const loadingStates = ref<Record<string, boolean>>({});
const errorStates = ref<Record<string, boolean>>({});

// 使用导入的图片
const newsData: NewsData = {
  logo: {
    imgUrl: "http://wb.sznews.com/tqPad/webimages/pic-logo.jpg",
    alt: "logo"
  },
  header: {
    title: "龙光社区老龄大学2024年度春季结业典礼暨教学成果汇报演出圆满落幕",
    date: "2024-06-28 21:08",
    editor: "王小编"
  },
  content: [
    {
      type: "paragraph",
      text: `6月28日下午深圳市南山区龙光社区长青老龄大学春季班表彰大会暨结业汇演在光前村篮球场大舞台隆重举行。现场气氛热烈，掌声不断，展演内容丰富，龙光社区长青老龄大学得到了平台上和各级领导的关心与支持，教学工作取得了巨大的成绩。今天我们欢聚一堂，在龙井村篮球场举办2023年度龙光社区老龄大学的结业典礼暨教学成果汇报演出，共同见证长青老龄大学学员们蓬勃向上的精神风貌和孜孜不倦的学习成果。
   活动伊始，龙光社区长青老龄大学常务校长何楚丽讲话、龙光社区党委副书记许潇为本次活动致辞，并为老师全体学员颁发结业证书，10名学员获评"优秀学员"。      
由长青太极班带来的表演《42式太极拳》。拉开演出序幕。`
    },
    {
      type: "image",
      src: szwb1,
      alt: "活动图片1",
      loaded: false
    },
    {
      type: "image",
      src: szwb2,
      alt: "活动图片2",
      loaded: false
    },
    {
      type: "paragraph",
      text: `春华秋实,硕果累累,将以甜美的歌声展示东方女性曼妙风韵的身姿。由心笑艺术团 的祺袍秀《秋水伊人》 。`
    },
    {
      type: "image",
      src: szwb3,
      alt: "活动图片3",
      loaded: false
    },
    {
      type: "paragraph",
      text: `行楷隶篆见功夫，书法艺术耀夜空。由书法班带来的《书法展示》`
    },
    {
      type: "image",
      src: szwb4,
      alt: "活动图片4",
      loaded: false
    },
    {
      type: "paragraph",
      text: `透过微颤的琴弦,我们能抚摸到艺术的悸动;越过清幽的曲调,我们能倾听到生活的幸福。由二胡班为我们带来的民歌演奏《夫妻双双把家还》`
    },
    {
      type: "image",
      src: szwb5,
      alt: "活动图片5",
      loaded: false
    },
    {
      type: "paragraph",
      text: `由宋代诗人范仲淹的诗歌改编，古诗词牌加上京剧唱腔，中国舞的飘逸，音乐的轻柔，以及诗词的浓情，全部融合在这一支舞蹈里。`
    },
    {
      type: "image",
      src: szwb6,
      alt: "活动图片6",
      loaded: false
    },
    {
      type: "paragraph",
      text: `正是因为一份热爱，让他们敢于接受新的挑战，也正是因为一份热爱，让他们从不曾老去。由龙光社区声乐班带来的歌曲声乐 《三月桃花心中开》`
    },
    {
      type: "image",
      src: szwb7,
      alt: "活动图片7",
      loaded: false
    },
    {
      type: "paragraph",
      text: `爱是一种强大的力量、爱是一种行动、在这个充满爱的世界里，每个人都有责任传递爱，由轻舞飞扬健身队带来的舞蹈《等着我来爱》`
    },
    {
      type: "image",
      src: szwb8,
      alt: "活动图片8",
      loaded: false
    },
    {
      type: "paragraph",
      text: `我们的人生一路摇摇摆摆地走来，走过春华秋实，夏芳冬静，在人生的道路上，有着坎坷，有着成功，也正因有了这些，才会使我们人生美好，会使我们人生有意义。模特形体班带来的模特秀《漫步人生路》。`
    },
    {
      type: "image",
      src: szwb9,
      alt: "活动图片9",
      loaded: false
    },
    {
      type: "paragraph",
      text: `感谢学校、感谢演员们的精彩演出,感谢对本次活动支持的龙光社区党委、龙光社区居委会，以及龙光社区党群服务中心。龙光社区长青老龄大学2023年春季班表彰大会暨结业演出圆满成功。`
    },
    {
      type: "image",
      src: szwb10,
      alt: "活动图片9",
      loaded: false
    },
    {
      type: "paragraph",
      text: `老龄大学就是一个有效的载体，丰富了老年人的余暇生活，使老年人晚年生活更加充实，成为老年人"教、学、乐、为"的重要基地。随着龙光社区长青老龄大学办学条件的不断改善，教学水平的不断提高，为老年人丰富生活、增长知识、陶冶情操、促进健康、再效社会提供了良好的平台和机会，更好地为社会发挥余热起了积极的作用，同时有效地丰富了老年人生活，增强了老年人自我保健能力，使老年人更好地享受到身心健康的乐趣，更好地做到老有所学、老有所用、老有所乐。
感谢学校、感谢演员们的精彩演出,感谢对本次活动支持的龙光社区党委、龙光社区居委会，以及龙光社区党群服务中心。龙光社区长青老龄大学2024年春季班表彰大会暨结业演出圆满成功。`
    }
  ],
  footer: {
    editor: "王小编"
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
      <span class="desc">时间：{{ newsData.header.date }}未知 编辑:{{ newsData.header.editor }}</span>
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
