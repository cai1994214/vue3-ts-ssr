<script setup lang="ts">
import { nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import type { NewsArticleData } from '@/types/newsArticle';

const loadedImages = ref<Record<string, boolean>>({});
const visibleImages = ref<Record<string, boolean>>({});
const articleRef = ref<HTMLElement | null>(null);
let observer: IntersectionObserver | null = null;

function getImageKey(src: string, index?: number) {
  return index === undefined ? src : `${src}-${index}`;
}

function markImageLoaded(src: string, index?: number) {
  loadedImages.value[getImageKey(src, index)] = true;
}

function isImageLoaded(src: string, index?: number) {
  return !!loadedImages.value[getImageKey(src, index)];
}

function markImageVisible(key: string) {
  visibleImages.value[key] = true;
}

function isImageVisible(src: string, index?: number) {
  return !!visibleImages.value[getImageKey(src, index)];
}

defineProps<{
  article: NewsArticleData;
}>();

onMounted(async () => {
  if (typeof window === 'undefined' || typeof IntersectionObserver === 'undefined') {
    return;
  }

  await nextTick();

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const target = entry.target as HTMLElement;
        const key = target.dataset.imgKey;

        if (key) {
          markImageVisible(key);
        }

        observer?.unobserve(target);
      });
    },
    {
      root: null,
      rootMargin: '80px 0px',
      threshold: 0.12,
    },
  );

  articleRef.value?.querySelectorAll<HTMLElement>('[data-img-key]').forEach((item) => {
    observer?.observe(item);
  });
});

onBeforeUnmount(() => {
  observer?.disconnect();
  observer = null;
});
</script>

<template>
  <article ref="articleRef" class="news-article" :class="`news-article--${article.theme || 'classic'}`">
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
      <div class="news-article__nameplate">
        <!-- <span class="news-article__nameplate-line"></span> -->
        <!-- <span class="news-article__nameplate-badge">{{ article.logo.alt || '专题报道' }}</span> -->
        <!-- <span class="news-article__nameplate-line"></span> -->
      </div>
      <h1 class="news-article__title">{{ article.title }}</h1>
      <p class="news-article__meta">{{ article.meta }}</p>
      <div class="news-article__divider"></div>
    </section>

    <section class="news-article__content">
      <template v-for="(item, index) in article.content" :key="index">
        <p v-if="item.type === 'paragraph'" class="news-article__paragraph" :class="{ 'news-article__paragraph--lead': index === 0 }">
          {{ item.text }}
        </p>

        <figure v-else-if="item.type === 'image'" class="news-article__figure">
          <div class="news-article__media" :class="{ 'is-loaded': isImageLoaded(item.src), 'is-visible': isImageVisible(item.src) }" :data-img-key="getImageKey(item.src)">
            <span class="news-article__shimmer"></span>
            <img class="news-article__image" :src="item.src" :alt="item.alt" loading="lazy" decoding="async" @load="markImageLoaded(item.src)" />
          </div>
          <figcaption v-if="item.caption" class="news-article__caption">{{ item.caption }}</figcaption>
        </figure>

        <div v-else class="news-article__grid">
          <figure v-for="(imgSrc, imgIndex) in item.src" :key="`${imgSrc}-${imgIndex}`" class="news-article__grid-item">
            <div class="news-article__media" :class="{ 'is-loaded': isImageLoaded(imgSrc, imgIndex), 'is-visible': isImageVisible(imgSrc, imgIndex) }" :data-img-key="getImageKey(imgSrc, imgIndex)">
              <span class="news-article__shimmer"></span>
              <img class="news-article__image" :src="imgSrc" :alt="item.names?.[imgIndex] || '文章配图'" loading="lazy" decoding="async" @load="markImageLoaded(imgSrc, imgIndex)" />
            </div>
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
  --article-accent: #c7b089;
  --article-accent-strong: #8a6b3d;
  --article-shell-top: rgba(196, 214, 227, 0.2);
  --article-shell-start: #f7f5f1;
  --article-shell-end: #f1eee8;
  --article-card: rgba(255, 255, 255, 0.94);
  --article-border: rgba(187, 176, 158, 0.24);
  --article-shadow: rgba(48, 38, 26, 0.06);
  --article-meta: #6d6457;
  --article-text: #2f2b26;
  --article-caption: #74695a;
  --article-media-start: #f3efe7;
  --article-media-end: #ece5da;
  --article-shimmer: rgba(255, 252, 247, 0.78);
  --article-title-font: 'STSong', 'Songti SC', 'SimSun', serif;
  --article-title-size: 32px;
  --article-title-weight: 700;
  --article-title-spacing: 0.02em;
  --article-meta-spacing: 0.04em;
  --article-nameplate-font: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  --article-nameplate-size: 12px;
  --article-logo-max-height: 38px;
  box-sizing: border-box;
  max-width: 750px;
  margin: 0 auto 32px;
  padding: 18px 12px 0;
  color: #222;
  background: radial-gradient(circle at top, var(--article-shell-top), transparent 36%), linear-gradient(180deg, var(--article-shell-start) 0%, var(--article-shell-end) 100%);
}

.news-article--wanbao {
  --article-accent: #d4b27a;
  --article-accent-strong: #9b6b24;
  --article-shell-top: rgba(224, 198, 146, 0.22);
  --article-shell-start: #fbf7ef;
  --article-shell-end: #f4ede0;
  --article-title-font: 'STKaiti', 'KaiTi', serif;
  --article-title-size: 34px;
  --article-title-weight: 700;
  --article-title-spacing: 0.04em;
  --article-nameplate-font: 'STSong', 'Songti SC', serif;
  --article-logo-max-height: 36px;
}

.news-article--jingbao {
  --article-accent: #93bcd7;
  --article-accent-strong: #2b6d92;
  --article-shell-top: rgba(153, 198, 222, 0.24);
  --article-shell-start: #f4f8fb;
  --article-shell-end: #eaf1f6;
  --article-media-start: #edf5fa;
  --article-media-end: #dde9f1;
  --article-title-font: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  --article-title-size: 31px;
  --article-title-weight: 700;
  --article-title-spacing: 0.01em;
  --article-meta-spacing: 0.08em;
  --article-nameplate-font: 'Helvetica Neue', 'PingFang SC', sans-serif;
  --article-nameplate-size: 11px;
  --article-logo-max-height: 34px;
}

.news-article--sztq {
  --article-accent: #d7c28d;
  --article-accent-strong: #7c6232;
  --article-shell-top: rgba(213, 194, 140, 0.18);
  --article-shell-start: #f8f5ee;
  --article-shell-end: #efe8dc;
  --article-title-font: 'STZhongsong', 'STSong', 'Songti SC', serif;
  --article-title-size: 33px;
  --article-title-weight: 700;
  --article-title-spacing: 0.03em;
  --article-nameplate-font: 'STSong', 'Songti SC', serif;
}

.news-article--nandu {
  --article-accent: #aab9c9;
  --article-accent-strong: #4f6277;
  --article-shell-top: rgba(173, 188, 203, 0.22);
  --article-shell-start: #f4f6f8;
  --article-shell-end: #eaedf1;
  --article-media-start: #eef2f5;
  --article-media-end: #e0e7ed;
  --article-title-font: 'Helvetica Neue', 'PingFang SC', 'Microsoft YaHei', sans-serif;
  --article-title-size: 30px;
  --article-title-weight: 800;
  --article-title-spacing: 0;
  --article-meta-spacing: 0.06em;
  --article-nameplate-font: 'Helvetica Neue', 'Arial', sans-serif;
  --article-nameplate-size: 11px;
  --article-logo-max-height: 50px;
}

.news-article--sznews {
  --article-accent: #d7b48f;
  --article-accent-strong: #a05f2b;
  --article-shell-top: rgba(219, 182, 144, 0.22);
  --article-shell-start: #fbf6f1;
  --article-shell-end: #f2ebe2;
  --article-title-font: 'Microsoft YaHei', 'PingFang SC', sans-serif;
  --article-title-size: 32px;
  --article-title-weight: 700;
  --article-title-spacing: 0.015em;
  --article-nameplate-font: 'Microsoft YaHei', 'PingFang SC', sans-serif;
  --article-nameplate-size: 11px;
  --article-logo-max-height: 32px;
}

.news-article__logo-bar,
.news-article__header,
.news-article__content,
.news-article__footer {
  background: var(--article-card);
  border: 1px solid var(--article-border);
  box-shadow: 0 10px 30px var(--article-shadow);
}

.news-article__logo-bar {
  border-bottom: 0;
  padding: 18px 18px 14px;
  border-radius: 18px 18px 0 0;
}

.news-article__logo-wrap {
  max-width: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.news-article__logo-image {
  display: block;
  max-height: var(--article-logo-max-height);
  width: auto;
}

.news-article__logo-sprite {
  display: inline-block;
  background-repeat: no-repeat;
  background-position-x: center;
}

.news-article__header {
  border-top: 0;
  border-bottom: 0;
  padding: 8px 40px 0;
  text-align: center;
}

.news-article__nameplate {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 18px;
}

.news-article__nameplate-line {
  width: 72px;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, var(--article-accent) 100%);
}

.news-article__nameplate-line:last-child {
  background: linear-gradient(90deg, var(--article-accent) 0%, transparent 100%);
}

.news-article__nameplate-badge {
  padding: 6px 14px;
  border: 1px solid color-mix(in srgb, var(--article-accent) 55%, white);
  border-radius: 999px;
  background: color-mix(in srgb, var(--article-accent) 10%, white);
  color: var(--article-accent-strong);
  font-family: var(--article-nameplate-font);
  font-size: var(--article-nameplate-size);
  font-weight: 700;
  letter-spacing: 0.14em;
  white-space: nowrap;
}

.news-article__title {
  margin: 0;
  font-family: var(--article-title-font);
  font-size: var(--article-title-size);
  line-height: 1.35;
  font-weight: var(--article-title-weight);
  letter-spacing: var(--article-title-spacing);
  color: #201c17;
  text-wrap: balance;
}

.news-article--jingbao .news-article__title,
.news-article--nandu .news-article__title,
.news-article--wanbao .news-article__title,
.news-article--sztq .news-article__title {
  max-width: 18em;
  margin-left: auto;
  margin-right: auto;
}

.news-article--jingbao .news-article__meta,
.news-article--nandu .news-article__meta {
  text-transform: uppercase;
}

.news-article--nandu .news-article__nameplate-badge {
  border-radius: 6px;
  letter-spacing: 0.18em;
}

.news-article--sznews .news-article__nameplate-badge,
.news-article--jingbao .news-article__nameplate-badge,
.news-article--nandu .news-article__nameplate-badge {
  text-transform: uppercase;
}

.news-article__meta {
  margin: 14px 0 0;
  font-size: 13px;
  line-height: 1.6;
  letter-spacing: var(--article-meta-spacing);
  color: var(--article-meta);
}

.news-article__divider {
  width: 100%;
  height: 1px;
  margin-top: 22px;
  background: linear-gradient(90deg, transparent 0%, var(--article-accent) 20%, var(--article-accent) 80%, transparent 100%);
}

.news-article__content {
  border-top: 0;
  border-bottom: 0;
  padding: 12px 3.5% 30px;
  position: relative;
}

.news-article__content::before {
  content: '';
  position: absolute;
  top: 14px;
  bottom: 22px;
  left: 22px;
  width: 1px;
  background: linear-gradient(180deg, transparent 0%, color-mix(in srgb, var(--article-accent) 28%, white) 10%, color-mix(in srgb, var(--article-accent) 28%, white) 90%, transparent 100%);
  opacity: 0.55;
}

.news-article__paragraph {
  margin: 0;
  font-family: Songti SC, SimSun, serif;
  font-size: 12pt;
  line-height: 1.95;
  text-align: justify;
  text-indent: 2em;
  color: var(--article-text);
  position: relative;
  z-index: 1;
}

.news-article__paragraph--lead {
  font-size: 13pt;
  line-height: 2;
}

.news-article__paragraph + .news-article__paragraph {
  margin-top: 14px;
}

.news-article__figure + .news-article__paragraph,
.news-article__grid + .news-article__paragraph {
  margin-top: 8px;
}

.news-article__figure,
.news-article__grid {
  margin: 22px auto;
}

.news-article__figure {
  max-width: 600px;
  width: 100%;
}

.news-article__grid {
  display: flex;
  gap: 14px;
}

.news-article__grid-item {
  flex: 1 1 0;
  min-width: 0;
  margin: 0;
}

.news-article__media {
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  background: linear-gradient(180deg, var(--article-media-start) 0%, var(--article-media-end) 100%);
  box-shadow: 0 8px 24px rgba(65, 50, 31, 0.08);
  opacity: 0;
  transform: translateY(18px);
  transition: opacity 0.5s ease, transform 0.6s ease, box-shadow 0.35s ease;
}

.news-article__media::before {
  content: '';
  display: block;
  width: 100%;
  padding-top: 58%;
}

.news-article__shimmer {
  position: absolute;
  inset: 0;
  background: linear-gradient(110deg, rgba(255, 255, 255, 0) 20%, var(--article-shimmer) 50%, rgba(255, 255, 255, 0) 80%);
  transform: translateX(-100%);
  animation: articleShimmer 1.4s ease-in-out infinite;
}

.news-article__media.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.news-article__image {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transform: scale(1.02);
  transition: opacity 0.45s ease, transform 0.6s ease;
}

.news-article__media.is-loaded .news-article__image {
  opacity: 1;
  transform: scale(1);
}

.news-article__media.is-loaded .news-article__shimmer {
  opacity: 0;
  transition: opacity 0.3s ease;
}

@media (hover: hover) {
  .news-article__media:hover {
    transform: translateY(-4px);
    box-shadow: 0 14px 30px rgba(65, 50, 31, 0.13);
  }

  .news-article__media.is-loaded:hover .news-article__image {
    transform: scale(1.035);
  }
}

.news-article__caption {
  margin-top: 10px;
  font-size: 13px;
  line-height: 1.5;
  color: var(--article-caption);
  text-align: center;
  font-style: italic;
}

.news-article__footer {
  border-top: 0;
  padding: 28px 18px 12px;
  text-align: right;
  font-size: 14px;
  font-weight: 600;
  color: #8a8a8a;
  border-radius: 0 0 18px 18px;
}

@keyframes articleShimmer {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(100%);
  }
}

@media screen and (max-width: 750px) {
  .news-article {
    padding: 10px 8px 0;
  }

  .news-article__header {
    padding: 8px 16px 0;
  }

  .news-article__nameplate {
    gap: 8px;
    margin-bottom: 14px;
  }

  .news-article__nameplate-line {
    width: 32px;
  }

  .news-article__nameplate-badge {
    padding: 5px 10px;
    font-size: calc(var(--article-nameplate-size) - 1px);
    letter-spacing: 0.1em;
  }

  .news-article__logo-image {
    max-height: calc(var(--article-logo-max-height) - 4px);
  }

  .news-article__title {
    font-size: calc(var(--article-title-size) - 8px);
  }

  .news-article__paragraph--lead {
    font-size: 12pt;
  }

  .news-article__meta {
    font-size: 12px;
  }

  .news-article__content {
    padding: 10px 14px 24px;
  }

  .news-article__content::before {
    left: 12px;
  }

  .news-article__grid {
    flex-direction: column;
    gap: 16px;
  }
}
</style>
