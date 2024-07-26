import { Link } from "react-router-dom";
import { Logout } from "./Logout";

export function Appbar() {
  return (
    <>
      <div className="relative border border-b-zinc-200 flex-no-wrap  flex w-full items-center justify-between bg-zinc-100 py-2 shadow-dark-mild lg:flex-wrap lg:justify-start lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <Link
            to={"/blogs"}
            className="text-black font-semibold text-3xl font-serif transition duration-200 hover:text-black/80 hover:ease-in-out cursor-pointer"
          >
            Medium
          </Link>

          <div className="flex justify-around items-center w-48  whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none cursor-pointer">
            <Link to={"/publish"}>
            <div className="flex p-2 ">
              <div className="">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
                >
                <path
                  strokeLinecap="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
              </svg>
                  </div>
              <div>Write</div>
            </div>
                  </Link>
            <div>
              <Logout/>
            </div>
              
          </div>
        </div>
      </div>
    </>
  );
}
