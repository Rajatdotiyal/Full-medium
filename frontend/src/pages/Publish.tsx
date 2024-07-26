import { ChangeEvent, useState } from "react";
import { Appbar } from "../components/Appbar";
import axios from "axios";
import { BACKEND_URL } from "../Config";
import { useNavigate } from "react-router-dom";

export function Publish() {
    const[title,setTitle]=useState("")
    const[content,setContent]=useState("")

    const navigate = useNavigate();
    async function sendRequest(){
        const response = await  axios.post(`${BACKEND_URL}/api/v1/blog`,{
            title,
            content
        },{
            headers : {
                Authorization : localStorage.getItem("token"),
            }
        })
        navigate(`/blog/${response.data.id}`)
    }
  return (
    <>
      <div className="">
        <Appbar />
        <div  className="h-screen flex justify-center pt-4">
          <div className="flex flex-col w-full max-w-screen-lg ">
            <div>
            <input
            onChange={(e)=> setTitle(e.target.value)}
            type="text"
            className="block h-24 text-3xl font-semibold p-4 focus:outline-none text-gray-900 w-full  max-w-screen-lg"
            placeholder="Title"/>
            </div>
          
          
            <div className="w-full h-2/3 max-w-screen-lg">
              <TextEditor onChange={(e)=> setContent(e.target.value)}/>
            </div>
          
          <div>
          <button
            onClick={sendRequest}
            type="button"
            className="text-white  bg-green-600  cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center"> Publish Post </button>
            </div>
          </div>
        
        </div>
      </div>
    </>
  );
}

function TextEditor({onChange}:{onChange: (e : ChangeEvent<HTMLTextAreaElement>)=>void}) {
  return (
    <>
      <div className="h-full">
        <textarea
        onChange={onChange}
          id="message"
          rows={4}
          className=" h-full  resize-none p-2.5 w-full text-xl focus:outline-none text-gray-900"
          placeholder="Tell your story..."
        ></textarea>
      </div>
    </>
  );
}
