import { Blog } from "../hooks";
import { Appbar } from "./Appbar"

export function FullBlog({blog} : {blog:Blog}) {
  return (
    <>
    <div>
    <Appbar/>
    <div className="flex justify-center h-2/3 cursor-default">

    <div className=" w-1/2 p-14 border-x border-gray-300 ">
    <div className="border-b border-b-gray-300 pb-4">
            <div className="text-5xl font-extrabold ">{blog.title}</div>
            <div className="text-gray-500 pt-2">Posted on July 24, 2024</div>
    </div>
            <div className="pt-4 text-xl font-mono">{blog.content}</div>
      </div>
    </div>
    </div>
    </>
  );
}
