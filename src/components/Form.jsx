import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MDBTextArea, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import { postState$, modalState$ } from "../redux/selectors";

import { createPost, hideModal, statePost, updatePost } from "../redux/actions";
const Form = () => {
  
  const dispatch = useDispatch();
  const { isShow } = useSelector(modalState$);
  const post = useSelector(postState$); 
  const [data, setData] = useState({
    title:"",
    content: "",
  });
  useEffect(()=>{
    if(post.id){
        setData({title: post.title,
            content: post.content})
      }
  },[post])
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!post.title){
        dispatch(createPost.createPostRequest(data));
    }
    else{
       dispatch(updatePost.updatePostRequest({id:post.id, data:data}))
       dispatch(statePost({ title: "", content: "" }));
    }
    dispatch(hideModal());
   
  };
  return (
    <>
      {isShow && (
        <div
          className="position-absolute d-flex justify-content-center align-items-center bg-dark bg-opacity-50"
          style={{ width: "100%", height: "100%", zIndex: 2 }}
        >
          <form
            onSubmit={handleSubmit}
            className="gap-3 row bg-white p-2 rounded"
          >
            <MDBInput
              className="topic-title"
              label="Topic"
              id="typeText"
              type="text"
              defaultValue={post.title}
              onChange={(e) => setData({ ...data, title: e.target.value })}
            />
            <MDBTextArea
              label="Content"
              id="textAreaExample"
              rows={10}
              defaultValue={post.content}
              onChange={(e) => setData({ ...data, content: e.target.value })}
            />
            <div className="d-flex justify-content-end gap-2">
              {post.title && <MDBBtn color="info" >UPDATE</MDBBtn>}
              {!post.title && (
                <MDBBtn className="me-1" color="success">
                  Create
                </MDBBtn>
              )}
              <MDBBtn
                className="me-1"
                color="danger"
                type="button"
                onClick={() => {
                  dispatch(hideModal());
                  dispatch(statePost({ title: "", content: "" }));
                }}
              >
                Canlce
              </MDBBtn>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Form;
