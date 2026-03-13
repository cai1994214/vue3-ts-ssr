export interface ArticleLogoImage {
  type: 'image';
  src: string;
  alt: string;
}

export interface ArticleLogoSprite {
  type: 'sprite';
  image: string;
  position: string;
  size: string;
  width: string;
  height: string;
  alt?: string;
}

export type ArticleLogo = ArticleLogoImage | ArticleLogoSprite;

export interface ArticleParagraph {
  type: 'paragraph';
  text: string;
}

export interface ArticleImage {
  type: 'image';
  src: string;
  alt: string;
  caption?: string;
}

export interface ArticleImageList {
  type: 'imageList';
  src: string[];
  names?: string[];
}

export type ArticleContentItem = ArticleParagraph | ArticleImage | ArticleImageList;

export type NewsArticleTheme = 'classic' | 'sznews' | 'jingbao' | 'sztq' | 'nandu' | 'wanbao';

export interface NewsArticleData {
  theme?: NewsArticleTheme;
  logo: ArticleLogo;
  title: string;
  meta: string;
  content: ArticleContentItem[];
  footerText: string;
}
