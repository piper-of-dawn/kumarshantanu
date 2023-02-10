import Link from "next/link";
import { PostMetaData } from "../components/postMetaData";
import getPostMetaDatas from "../components/getPostMetaData";
import PostPreview
 from "../components/PostPreview";
const HomePages = () => {
  const postMetadata = getPostMetaDatas();
  // const postPreviews = postMetadata.map((post) => {
  // return (
  //   <div>
  //   <Link href={`/posts/${post.slug}`}>
  //     <h1>{post.title}</h1>
  //     <h4>{post.subtitle}</h4>
  //     <h6>{post.date}</h6>
  //   </Link>
  //   </div>
  // )
  // });
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
    // ... is the spread operator. It takes all the properties of the object and spreads them out as props.
    // This is the same as: <PostPreview title={post.title} subtitle={post.subtitle} date={post.date} slug={post.slug} />
    // key is a special prop that React uses to identify which items have changed, are added, or are removed. It must be unique.
  ));
  return (
    <div className="grid grid-cols-1 p-4 md:grid-cols-2 gap-4">   
      {postPreviews}   
    </div>
  );
};

export default HomePages; 