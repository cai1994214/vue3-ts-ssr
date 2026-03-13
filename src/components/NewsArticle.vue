<script setup lang="ts">
import type { NewsArticleData } from '@/types/newsArticle';

defineProps<{
  article: NewsArticleData;
}>();
</script>

<template>
  <article class="news-article">
    <header class="news-article__logo-bar">
      <div class="news-article__logo-wrap">
        <img v-if="article.logo.type === 'image'" class="news-article__logo-image" :src="article.logo.src" :alt="article.logo.alt" />
        <span
          v-else
          class="news-article__logo-sprite"
          :aria-label="article.logo.alt || 'logo'"
          :style="{
            backgroundImage: `url(${article.logo.image})`,
            backgroundPosition: article.logo.position,
            backgroundSize: article.logo.size,
            width: article.logo.width,
            height: article.logo.height,
          }"
        ></span>
      </div>
    </header>

    <section class="news-article__header">
      <h1 class="news-article__title">{{ article.title }}</h1>
      <p class="news-article__meta">{{ article.meta }}</p>
      <div class="news-article__divider"></div>
    </section>

    <section class="news-article__content">
      <template v-for="(item, index) in article.content" :key="index">
        <p v-if="item.type === 'paragraph'" class="news-article__paragraph">
          {{ item.text }}
        </p>

        <figure v-else-if="item.type === 'image'" class="news-article__figure">
          <img class="news-article__image" :src="item.src" :alt="item.alt" />
          <figcaption v-if="item.caption" class="news-article__caption">{{ item.caption }}</figcaption>
        </figure>

        <div v-else class="news-article__grid">
          <figure v-for="(imgSrc, imgIndex) in item.src" :key="`${imgSrc}-${imgIndex}`" class="news-article__grid-item">
            <img class="news-article__image" :src="imgSrc" :alt="item.names?.[imgIndex] || '文章配图'" />
            <figcaption v-if="item.names?.[imgIndex]" class="news-article__caption">
              {{ item.names[imgIndex] }}
            </figcaption>
          </figure>
        </div>
      </template>
    </section>

    <footer class="news-article__footer">[{{ article.footerText }}]</footer>
  </article>
</template>

<style scoped lang="scss">
.news-article {
  box-sizing: border-box;
  max-width: 750px;
  margin: 0 auto;
  color: #222;
}

.news-article__logo-bar,
.news-article__header,
.news-article__content,
.news-article__footer {
  background: #fff;
  border: 1px solid #ececec;
}

.news-article__logo-bar {
  border-bottom: 0;
  padding: 12px 18px;
}

.news-article__logo-wrap {
  max-width: 750px;
}

.news-article__logo-image {
  display: block;
  max-height: 34px;
  width: auto;
}

.news-article__logo-sprite {
  display: inline-block;
  background-repeat: no-repeat;
}

.news-article__header {
  border-top: 0;
  border-bottom: 0;
  padding: 10px 32px 0;
  text-align: center;
}

.news-article__title {
  margin: 0;
  font-size: 30px;
  line-height: 1.35;
  font-weight: 700;
}

.news-article__meta {
  margin: 14px 0 0;
  font-size: 13px;
  line-height: 1.6;
  color: #666;
}

.news-article__divider {
  width: 100%;
  height: 1px;
  margin-top: 22px;
  background: #e8e8e8;
}

.news-article__content {
  border-top: 0;
  border-bottom: 0;
  padding: 0 3% 24px;
}

.news-article__paragraph {
  margin: 0;
  font-family: Songti SC, SimSun, serif;
  font-size: 12pt;
  line-height: 1.85;
  text-align: justify;
  text-indent: 2em;
}

.news-article__paragraph + .news-article__paragraph {
  margin-top: 12px;
}

.news-article__figure,
.news-article__grid {
  margin: 18px auto;
}

.news-article__figure {
  max-width: 600px;
}

.news-article__grid {
  display: flex;
  gap: 12px;
}

.news-article__grid-item {
  flex: 1 1 0;
  min-width: 0;
  margin: 0;
}

.news-article__image {
  display: block;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  height: auto;
}

.news-article__caption {
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.5;
  color: #666;
  text-align: center;
}

.news-article__footer {
  border-top: 0;
  padding: 28px 16px 8px;
  text-align: right;
  font-size: 14px;
  font-weight: 600;
  color: #8a8a8a;
}

@media screen and (max-width: 750px) {
  .news-article__header {
    padding: 8px 16px 0;
  }

  .news-article__title {
    font-size: 24px;
  }

  .news-article__meta {
    font-size: 12px;
  }

  .news-article__grid {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
