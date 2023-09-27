import { getSortedPostsData } from "@/lib/docs";
import ListItem from "./ListItem";

const Posts = () => {
  const posts = getSortedPostsData();
  return (
    <section>
      <h2 className="text-3xl">List of docs</h2>
      <ul>
        {posts.map((post) => (
          <ListItem post={post} key={post.id} />
        ))}
      </ul>
    </section>
  );
};

export default Posts;
