import { PostMetaData } from "./postMetaData";
import Link from "next/link";

const PostPreview = (props: PostMetaData ) => {
  return (

      <div className="relative group">
         <div className="absolute inset-4 bg-gradient-to-r rounded-md from-cyan-400 to-cyan-900 blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

          <div className="relative flex flex-col align-middle p-4 rounded-md bg-white mb-4 h-fit shadow-sm">
           <Link href={`/posts/${props.slug}`}>
              <h1 className="font-regular text-large overflow-hidden whitespace-nowrap text-sky-900 hover:underline group-hover:overflow-visible">{props.title}</h1>
              </Link>
              <h4 className="text-normal text-slate-600">{props.subtitle}</h4>
              <h6 className="font-mono text-subtitle">{props.date}</h6>    
          </div>
      </div>
  
 
  );
};

export default PostPreview;