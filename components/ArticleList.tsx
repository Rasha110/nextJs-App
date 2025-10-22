import articleStyles from '../styles/Article.module.css'
import ArticleItem   from './ArticleItem';
type Article = {
    userId: number;
    id: number;
    title: string;
    body: string;
  };
  
  type HomeProps = {
    articles: Article[];
  };
const ArticleList=({ articles }: HomeProps)=>{
return(
    <div className={articleStyles.grid}>
{articles.map((article)=>(
    <ArticleItem article={article}/>
      ))}
    </div>
)
}
export default ArticleList