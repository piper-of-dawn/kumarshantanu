import { PostMetaData } from "./postMetaData";
import Link from "next/link";

const PostPreview = (props: PostMetaData ) => {
  return (
    <div className="p-4 rounded-md bg-white shadow-md mb-4 hover:shadow-lg transition duration-300 ease">
     <Link href={`/posts/${props.slug}`}>
        <h1 className="font-bold hover:underline">{props.title}</h1>
        </Link>
        <h4 className="text-sm text-slate-600">{props.subtitle}</h4>
        <h6 className="font-mono">{props.date}</h6>    
    </div>
  );
};

export default PostPreview;