import { GetServerSideProps } from "next";
import Link from "next/link";
type Article = {
  id: number;
  title: string;
  body: string;
};

type ArticleItemProps = {
  article: Article;
};

const ArticlePage = ({ article }: ArticleItemProps) => {
  return (
    <div>
      <h1>This is article {article.id}</h1>
      <h2>{article.title}</h2>
      <p>{article.body}</p>
      <br/>
      <Link href="/">Go Back</Link>
    </div>
  );
};


export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params?.id}`
  );
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export default ArticlePage;
