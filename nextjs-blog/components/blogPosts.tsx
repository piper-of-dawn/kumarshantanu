import getPostMetaDatas from "./getPostMetaData";
import PostPreview from "./PostPreview";


const BlogPosts = () => {
  const postMetadata = getPostMetaDatas();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
    
    // ... is the spread operator. It takes all the properties of the object and spreads them out as props.
    // This is the same as: <PostPreview title={post.title} subtitle={post.subtitle} date={post.date} slug={post.slug} />
    // key is a special prop that React uses to identify which items have changed, are added, or are removed. It must be unique.
  ));
  return (
    <div id="posts" className="flex">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 justify-center min-w-full pl-12 pr-12">   
        {postPreviews}   
      </div>
    </div>
  );
};

export default BlogPosts; 