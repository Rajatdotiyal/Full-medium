import { useState } from "react";
import { Quote } from "../components/Quote";
import { Headers } from "../components/Header";
import { LabelInputBox } from "../components/LabelInputBox";
import { SignupInput } from "@rajatdotiyal/medium-common";
import { Button } from "../components/Button";
import axios from "axios";
import { BACKEND_URL } from "../Config";
import { useNavigate } from "react-router-dom";

export function Signup() {
  const[postInputs,setPostInputs] = useState<SignupInput>({
    name : "",
    email : "",
    password : "",
})
const navigate = useNavigate()
async function sendRequest(){
  try{

    const response  = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,postInputs)
    const jwt = response.data.jwt;
    localStorage.setItem("token", `Bearer ${jwt}`)
    navigate("/blogs")
  }catch(e){
    alert("Invalid Inputs")
  }
}

  return (
    <>
    
      <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex  justify-center h-screen flex-col">
        <div className=" flex  justify-center ">
          <div>
          <Headers heading={"Create an Account"} subhead={"Already have an Account?"} navigate={"signin"}/>
            <div className="pt-4">
               
              <LabelInputBox label="Name" placeholder="john"  onChange={(e)=>{
                setPostInputs({
                    ...postInputs,
                    name : e.target.value,
                })
              }} />


                <div>

              <LabelInputBox label="Username" placeholder="Example@gmail.com" onChange={(e)=>{
                setPostInputs({
                    ...postInputs,
                    email : e.target.value
                })
              }} />
                </div>
                <div>
                    
              <LabelInputBox
                label="Password"
                placeholder="123456"
                type="password"
                onChange={(e)=>{
                    setPostInputs({
                        ...postInputs,
                        password : e.target.value
                    })
                }}
              />
              <Button type={"Sign Up"} onClick={sendRequest}/>
                </div>
              
            </div>
          </div>
        </div>
      </div>
        <div className="hidden lg:block">
          <Quote />
        </div>
      </div>
    </>
  );
}
