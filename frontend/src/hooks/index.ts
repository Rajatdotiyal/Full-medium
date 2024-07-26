import axios from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../Config";


export interface Blog {
  "content": string;
  "title": string;
  "id": string
  "author": {
      "name": string
  }
}

export const useBlog = ({id}:{id:string}) =>{
  const [loading, setLoading] = useState(true);
  const [blog, setBlog] = useState<Blog>();

  useEffect(() => {
    async function fetchData() {
      
      
      const response = await axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,{
        headers : {
          Authorization : localStorage.getItem("token"),
        }
      });
      
      setBlog(response.data.postData);
      setLoading(false);
    }
    fetchData();
  }, [id]);
  return {
    blog,
    loading,
  };
}

export const useBlogs = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    async function fetchData() {
      
      
      const response = await axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,{
        headers : {
          Authorization : localStorage.getItem("token"),
        }
      });
      
      setBlogs(response.data.post);
      setLoading(false);
    }
    fetchData();
  }, []);
  return {
    blogs,
    loading,
  };
};
