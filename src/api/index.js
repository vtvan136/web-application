import axios from 'axios';

const URL = 'https://server-12ji.onrender.com/api';

export const fetchPosts = () => axios.get(`${URL}/posts/`);
export const createPost = (payload) => axios.post(`${URL}/posts`, payload);
export const updatePost = (payload) => axios.put(`${URL}/posts/${payload.id}`,payload.data);
export const deletePost = (payload) =>{ axios.delete(`${URL}/posts/${payload}`).then(res => window.location.reload())
};
