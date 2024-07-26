
import { useState } from "react"
import { Headers } from "../components/Header"
import { LabelInputBox } from "../components/LabelInputBox"
import { Quote } from "../components/Quote"
import { Button } from "../components/Button"
import { SigninInput } from "@rajatdotiyal/medium-common"
import axios from "axios"
import { BACKEND_URL } from "../Config"
import { useNavigate } from "react-router-dom"

export function Signin(){
  const[postInputs,setPostInputs] = useState<SigninInput>({
    email : "",
    password : ""
})
const navigate = useNavigate()
async function sendRequest(){
  try{

    const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin`,postInputs);
    const jwt = response.data.jwt;
    
    localStorage.setItem("token", `Bearer ${jwt}`)
    navigate("/blogs")
  }catch(e){
    alert("Invalid Email or Password")
  }
}

    return<>
      <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="flex  justify-center h-screen flex-col">
        <div className=" flex  justify-center ">
          <div>
          <Headers heading={"Login to your Account"} subhead={"Don't have an Account?"} navigate={"signup"}/>
            <div className="pt-4">
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
              <Button type={"Sign In"} onClick={sendRequest}/>
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
}