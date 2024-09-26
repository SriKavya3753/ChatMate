import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";
const Form = () => {
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();
  const useridElement = useRef();
  const { addPost } = useContext(PostList);
  const handleSubmit = (event) => {
    event.preventDefault();
    const id = Date.now();
    const title = titleElement.current.value;
    const user_id = useridElement.current.value;
    const about = bodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");
    titleElement.current.value = "";
    useridElement.current.value = "";
    bodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
    addPost(id, title, user_id, about, reactions, tags);
  };
  return (
    <div class="bd-example m-0 border-0">
      <form className="create-post" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="userId" class="form-label">
            User ID:
          </label>
          <input
            type="text"
            ref={useridElement}
            placeholder="Enter the User ID"
            class="form-control"
            id="userId"
          />
        </div>
        <div class="mb-3">
          <label for="title" class="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={titleElement}
            placeholder="Give the title for your Post"
            class="form-control"
            id="title"
          />
        </div>
        <div class="mb-3">
          <label for="body" class="form-label">
            Post Description
          </label>
          <textarea
            type="text"
            ref={bodyElement}
            rows={4}
            placeholder="Tell me more aboout it.."
            class="form-control"
            id="body"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="reactions" class="form-label">
            Reactions
          </label>
          <input
            type="text"
            ref={reactionsElement}
            placeholder="Enter the no of reactions"
            class="form-control"
            id="reactions"
          />
        </div>
        <div class="mb-3">
          <label for="tags" class="form-label">
            Tags
          </label>
          <input
            type="text"
            ref={tagsElement}
            placeholder="Mention the hashtags"
            class="form-control"
            id="tags"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default Form;
