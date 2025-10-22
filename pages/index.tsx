import ArticleList from "@/components/ArticleList";
import Head from "next/head";
type Article = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type HomeProps = {
  articles: Article[];
};
export default function Home({ articles }: HomeProps)
 {
 
  return (
    <div>
      <Head>
        <title>DevNews</title>
        <meta name="keywords" content="web-development programming" />
      </Head>
      <ArticleList articles={articles}/>
      <h1>Welcome to Next</h1>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
