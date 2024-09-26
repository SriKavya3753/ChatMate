import { useContext } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  return (
    <div class="bd-example m-0 border-0">
      <div class="card post-card" style={{ width: "30rem" }}>
        <div class="card-body">
          <h5 class="card-title">{post.title}</h5>
          <span
            class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdOutlineDelete />
          </span>
          <p class="card-text">{post.about}</p>
          {post.tags.map((tag) => (
            <span key={tag} className="badge text-bg-primary hashtag">
              {tag}
            </span>
          ))}
          <div class="alert alert-primary reactions" role="alert">
            This post has {post.reactions} reactions
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
