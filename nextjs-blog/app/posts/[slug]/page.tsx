import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter"
import getPostMetadata from "../../../components/getPostMetaData";
import Link from "next/link";



const getPostContent = (slug: string) => {
  const folder = "posts/"; //This is the folder where your posts are stored
  const file = folder + slug + ".md"; // This is the file name
  const content = fs.readFileSync(file, "utf-8"); // Function readFileSync() reads the contents of the file synchronously
  const matterResult = matter(content);
  return matterResult;
}

export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const BlogPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);  
  return ( 


    <div className="max-w-4xl mx-auto pl-8 pr-8">
   <div className="relative group">
      <Link href="../">
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mb-4 mt-12 ">
      <span>Back</span>
    </button></Link>  </div>

  
  <div className="font-serif text-center mx-auto text-big tracking-wide text-slate-700 border-t border-b pt-6  dark:border-slate-800 lg:text-verybig p-4 lg:ml-24 lg:mr-24 lg:mt-20">{post.data.title}</div> 
          
        <article className="prose mx-auto">
        
  
      
        <Markdown>{post.content}</Markdown>
        </article>
       </div>
 
  );
};
export default BlogPage;