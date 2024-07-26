import { Link } from "react-router-dom";
interface HeaderProps {
  heading: string;
  subhead: string;
  navigate: string;
}


export function Headers({heading, subhead,navigate} : HeaderProps){

    return<>
    <div className="px-10">
              <div className="text-3xl font-bold">{heading}</div>
              <div className="text-md text-center p-2 text-gray-500 font-medium">
                {subhead + " "}
                <Link
                  className="underline "
                  to={"/" + navigate}
                >
                  {navigate.charAt(0).toUpperCase() + navigate.slice(1).toLowerCase()}
                </Link>
              </div>
            </div>
    </>
}