import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter"
import getPostMetaDatas from "../../../components/getPostMetaData";



const getPostContent = (slug: string) => {
  const folder = "posts/"; //This is the folder where your posts are stored
  const file = folder + slug + ".md"; // This is the file name
  const content = fs.readFileSync(file, "utf-8"); // Function readFileSync() reads the contents of the file synchronously
  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetaDatas();
  return posts.map((post) => {
    return {
        slug: post.slug,
      }});
    }

const BlogPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);  
  return ( 
      <div className="relative group">
     
      <article className="prose lg:prose-md pt-8 p-4 shadow-lg bg-white">
      

      <h1>{post.data.title}</h1>
      <Markdown>{post.content}</Markdown>
      </article>
      
      </div>     
  );
};
export default BlogPage;