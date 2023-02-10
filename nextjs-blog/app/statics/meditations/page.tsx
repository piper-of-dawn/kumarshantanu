import getPostMetaDatas from "../../../components/getPostMetaData";
import PostPreview from "../../../components/PostPreview";

const homepage = () => {
  const postMetadata = getPostMetaDatas();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
    
    // ... is the spread operator. It takes all the properties of the object and spreads them out as props.
    // This is the same as: <PostPreview title={post.title} subtitle={post.subtitle} date={post.date} slug={post.slug} />
    // key is a special prop that React uses to identify which items have changed, are added, or are removed. It must be unique.
  ));
  return (
    <div className="flex">
        <div className="grid grid-cols-2 p-4 md:grid-cols-2 gap-4">   
        {postPreviews}   
      </div>
    </div>
  );
};

export default homepage; 