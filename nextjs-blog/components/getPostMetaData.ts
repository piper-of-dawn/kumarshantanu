import fs from "fs"; // fs is a Node.js module that allows you to work with the file system
import matter from "gray-matter"; // gray-matter is a JavaScript library for parsing front matter from a string or file

const getPostMetadata = () => {
  const folder = "posts/"; //This is the folder where your posts are stored
  const fileNames = fs.readdirSync(folder); // Function readdirSync() reads the contents of the directory synchronously
  const markdownPosts = fileNames.filter((fn) => fn.endsWith(".md")); // Filter the files that end with .md
  const slugs = markdownPosts.map((fn) => fn.replace(".md", "")); // Remove the .md extension from the file name
  // Get frontmatter from the markdown file
    const posts = markdownPosts.map((filename)=> {
    const fileContent = fs.readFileSync(`${folder}/${filename}`, "utf-8");
    const metadata = matter(fileContent);    
  return {
    title: metadata.data.title,
    date: metadata.data.date,
    subtitle: metadata.data.subtitle,
    slug: filename.replace(".md", ""),
  }
})
  return posts
};

export default getPostMetadata;