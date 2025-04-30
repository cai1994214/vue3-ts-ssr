<script setup lang="ts">
import { ref, onMounted } from 'vue';

// 导入图片资源
import jingbao1 from '@/assets/jingbao/jingbao1.png';
import jingbao2 from '@/assets/jingbao/jingbao2.png';

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

// 从原来的模板中提取数据
const newsData: NewsData = {
  logo: {
    imgUrl: "https://jb.sznews.com/ePaper/static/img/jblogo.d03962ec.png",
    alt: "logo"
  },
  header: {
    title: "龙光社区长青老年大学秋季开学：多彩课程，点亮晚年新篇",
    date: "2024-09-20 19:34",
    editor: "陈婉婷"
  },
  content: [
    {
      type: "paragraph",
      text: `金秋时节，长青老年大学迎来了秋季开学日。校园内洋溢着活力与热情，老年学员们满怀期待，陆续踏入校园，标志着又一段充实的学习旅程正式开启。本次开学，长青老年大学不仅延续过往教学优势，更精心规划了一系列特色课程，致力于丰富老年人的精神文化生活，助力他们拥抱多彩晚年。`
    },
    {
      type: "image",
      src: jingbao1,
      alt: "活动图片1",
      loaded: false
    },
    {
      type: "paragraph",
      text: `在开学典礼上，学校领导向新老学员致以热烈欢迎，并详细介绍了本学期的教学规划。本学期，长青老年大学共开设了书法、舞蹈、二胡、声乐、太极五门专业课程，同时，还新增了化妆与模特两门特色课程。这些课程涵盖艺术、健康、时尚等多个领域，旨在满足不同学员的兴趣爱好与学习需求，为他们打造多元化的学习体验。`
    },
    {
      type: "paragraph",
      text: `在课程设置上，书法课将带领学员领略汉字的独特魅力，提升书写技艺；舞蹈课融合了民族舞、现代舞等多元风格，既能锻炼肢体协调性，又能培养艺术气质；二胡课邀请专业老师指导学员掌握传统乐器的演奏技巧，感受古典音乐的魅力；声乐课通过科学的发声训练，让学员唱出动听旋律；太极课则注重身心兼修，帮助学员强身健体，领悟传统武术的精髓。而新增的化妆课和模特课更是吸引了众多学员的关注。化妆课将教会学员掌握实用的化妆技巧，提升个人形象；模特课则通过走秀训练，帮助学员塑造优雅气质，展现独特风采。`
    },
    {
      type: "image",
      src: jingbao2,
      alt: "活动图片2",
      loaded: false
    },
    {
      type: "paragraph",
      text: `长青老年大学一直以来秉持“以学员为中心，让学习成为生活乐趣”的教学理念，致力于为老年人提供优质的教育服务。学校师资力量雄厚，所有教师均具备丰富的教学经验和专业素养，他们根据老年学员的特点和需求，制定个性化的教学方案，确保每位学员都能在轻松愉快的氛围中学习和成长。为老年人打造一个更加优质的学习交流平台，助力他们书写充实、精彩的晚年篇章，推动老年教育事业不断迈向新高度。`
    },
  ],
  footer: {
    editor: "陈婉婷"
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
      <span class="desc">时间：{{ newsData.header.date }} 编辑: {{ newsData.header.editor }}</span>
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
