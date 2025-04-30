<script setup lang="ts">
import { ref, onMounted } from 'vue';

// 所有图片导入
import ds_01 from '@/assets/shenzhenxinwen/ds_01.png';
import ds_02 from '@/assets/shenzhenxinwen/ds_02.png';
import ds_03 from '@/assets/shenzhenxinwen/ds_03.png';
import ds_04 from '@/assets/shenzhenxinwen/ds_04.png';
import ds_05 from '@/assets/shenzhenxinwen/ds_05.png';
import ds_06 from '@/assets/shenzhenxinwen/ds_06.png';
import ds_07 from '@/assets/shenzhenxinwen/ds_07.png';

// 定义 newsRef
const newsRef = ref<HTMLElement | null>(null);

// 定义类型
interface NewsImage {
  type: "image";
  src: string;
  alt: string;
  loaded: boolean;
}

interface NewsImageList {
  type: "imageList";
  src: string[];
  loaded: boolean;
  names: string[];
}

interface NewsText {
  type: "paragraph";
  text: string;
}

type ContentItem = NewsImage | NewsImageList | NewsText;

interface NewsData {
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

// 使用数据结构
const newsData: NewsData = {
  header: {
    title: `2024年庆祝元旦联欢会暨龙光社区长青老龄大学秋季结业汇演圆满落幕`,
    date: "2024-12-12 20:21",
    source: "南方都市报"
  },
  content: [
    {
      type: "paragraph",
      text: `12月12日下午，2024年庆祝元旦联欢会暨龙光社区长青老龄大学秋季结业汇演在龙井村篮球场举办。
桃源街道长青老龄大学党委书记赵晨曦、龙光社区党委副书记郑建如、龙光社区长青老龄大学校长林晓亮、民生微实事负责人伍家耀、办学专员林晓双、社区党群中心主任曾春娴、龙光社区长青老龄大学常务校长何楚丽出席出席本次活动，共同见证学员们蓬勃向上的精神风貌和孜孜不倦的学习成果。`
    },
    {
      type: "image",
      src: ds_01,
      alt: "活动图片1",
      loaded: false
    },
    {
      type: "paragraph",
      text: `（校长林晓亮、常务校长何楚丽给长青老龄大学秋季班优秀学员颁发证书）`
    },
    {
      type: "image",
      src: ds_02,
      alt: "活动图片2",
      loaded: false
    },
    {
      type: "paragraph",
      text: `活动现场气氛热烈，社区领导、嘉宾与学员齐聚一堂。汇演节目精彩纷呈，太极班的《42 式太极拳表演》刚柔并济、二胡班的《画你、康定情歌连奏》悠扬婉转、舞蹈班的《零落》灵动飘逸、模特形体《声声慢》等等，涵盖太极、二胡、舞蹈、合唱、独唱、模特秀、书法展示等多种表演形式，充分展现学员们的学习成果与精神风貌，赢得阵阵掌声。`
    },
    {
      type: "imageList",
      src: [ds_03, ds_04],
      names: ['舞蹈《别上当》', '《书法展示》'],
      loaded: false
    },
    {
      type: "imageList",
      src: [ds_05, ds_06],
      names: ['合唱《复兴的力量》', ' 舞蹈《零落》'],
      loaded: false
    },
    {
      type: "paragraph",
      text: `出色的节目，展示了龙光社区老龄大学的风采，嘹亮的歌声，表达了全校师生无限的热情，曼妙的舞姿,让我们看到了龙光社区长青老龄大学铸就的无数个潇潇洒酒的俏夕阳。“老有所教、老有所学、老有所乐、老有所为在这里得到了最好的诠释。`
    },
    {
      type: "paragraph",
      text: `此次活动不仅是学员成果的展示，也为社区增添浓郁文化氛围，进一步推动社区老龄事业发展。`
    },
    {
      type: "image",
      src: ds_07,
      alt: "活动图片4",
      loaded: false
    },
  ],
  footer: {
    editor: "徐洋"
  }
};

onMounted(() => {
  // 创建 IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const imgContainer = entry.target as HTMLElement;
        const imgId = imgContainer.dataset.imgId as string;

        // 处理单张图片
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
        } else {
          // 处理图片列表
          const listItems = newsData.content.filter(item =>
            item.type === 'imageList'
          ) as NewsImageList[];

          for (const listItem of listItems) {
            // 查找匹配的图片
            const imgIndex = listItem.src.findIndex(imgSrc => imgSrc === imgId);

            if (imgIndex !== -1) {
              // 创建一个新的图片元素来预加载
              const img = new Image();
              img.onload = () => {
                // 加载成功
                listItem.loaded = true;
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
              break;
            }
          }
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
    document.querySelectorAll('.lazy-img-container, .lazy-img-list-img').forEach(container => {
      observer.observe(container);
    });
  }, 100);
});
</script>

<template>
  <div class="news" ref="newsRef">
    <div class="logoTitle">
      <div class="cont">
        <i class="img"></i>
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
        <div
          v-else-if="item.type === 'imageList'"
          class="image-list-container"
        >
          <div class="image-list-row">
            <div
              v-for="(imgSrc, idx) in item.src"
              :key="imgSrc"
              class="image-container lazy-img-list-img"
              :data-img-id="imgSrc"
            >
              <div v-if="loadingStates[imgSrc] === false && !errorStates[imgSrc]">
                <img
                :src="imgSrc"
                alt="活动图片"
                class="fade-in"
              >
              <span style="text-align: center;">{{item.names[idx]}}</span>
              </div>
              <div v-else-if="loadingStates[imgSrc]" class="loading-placeholder">加载中...</div>
              <div v-else-if="errorStates[imgSrc]" class="error-placeholder">图片加载失败</div>
              <div v-else class="loading-placeholder">等待加载</div>
            </div>
          </div>
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
    //   padding: 10px;
    max-width: 750px;
    box-sizing: border-box;
    & .img {
      display: inline-block;
      text-align: center;
      line-height: 50px;
      background: url(https://ipaper.oeeee.com/ipaper/images/paper_icon.png) no-repeat center -355px;
      background-size: 150px auto;
      box-flex: 1;
      width: 150px;
      height: 50px;
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
.top-cont {
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
.text-cont {
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
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      span {
        margin-top: 10px;
      }
    }
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
    height: 290px;
    width: 100%;
  }

  .fade-in {
    animation: fadeIn 0.5s;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .image-list-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 10px 0;
    .image-list-row {
      display: flex;
      gap: 10px;
      .image-container {
        flex: 1 1 0;
        max-width: 49%;
        min-width: 0;
      }
    }
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
      max-width: 600px;
    }
  }
}
</style>
