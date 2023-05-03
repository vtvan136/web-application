import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../redux/actions";
import { postsState$} from "../redux/selectors";

const ToDo = () => {
  const dispatch = useDispatch();
  const posts = useSelector(postsState$);
  useEffect(() => {
    dispatch(actions.getPosts.getPostsRequest());
  }, [dispatch]);
  return (
    <>

      <div className="d-grid gap-2 d-md-flex justify-content-md-end m-2">
    
        <button className="btn btn-primary me-md-2" type="button" onClick={()=> dispatch(actions.showModal())}>
          ADD NOTE
        </button>
      </div>
      <div className="container mx-2 row gap-3">
        {posts &&
          posts.map((post, id) => (
            <div key={id} id={post._id} className="card col-3" style={{ width: "20rem" }}>
              <div className="card-body">
                <h5 className="card-title " >{post.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">#CRUD</h6>
                <p className="card-text">{post.content}</p>
                <button
                  type="button"
                  className="btn btn-outline-secondary m-2"
                  data-mdb-ripple-color="dark"
                  onClick={ ()  => {
                    dispatch(actions.showModal())
                    dispatch(actions.statePost({id:post._id ,title:post.title, content: post.content}))
                  }}
                >
                  UPDATE
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-mdb-ripple-color="dark"
                  onClick={ ()  => {
                    dispatch(actions.deletePost.deletePostRequest(post._id))
                   
                  }}
                >
                  DELETE
                </button>
              </div>
            </div>
          ))}     
      </div>

    </>
  );
};

export default ToDo;
