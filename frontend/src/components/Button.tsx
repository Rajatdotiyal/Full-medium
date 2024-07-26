import { MouseEvent } from "react";

 
 
 interface ButtonProps {
    type : string,
    onClick : (e:MouseEvent<HTMLElement>) => void,

 }
 export function Button ({type,onClick}: ButtonProps){

    return<>
    <div className="mt-4">
                <button
                onClick={onClick}
                  type="button"
                  className="text-white w-full bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
                >
                 {type }
                </button>
              </div>
    </>
 }