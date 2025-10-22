import Link from 'next/link';
import articleStyles from '../styles/Article.module.css';
import React from 'react';

type Article = {
  id: number;
  title: string;
  body: string;
};

type ArticleItemProps = {
  article: Article;
};

const ArticleItem: React.FC<ArticleItemProps> = ({ article }) => {
  return (
    <Link
      href={`/article/${article.id}`}
      className={articleStyles.card} // 👈 class directly on Link
    >
      <h3>{article.title} &rarr;</h3>
      <p>{article.body}</p>
    </Link>
  );
};

export default ArticleItem;
