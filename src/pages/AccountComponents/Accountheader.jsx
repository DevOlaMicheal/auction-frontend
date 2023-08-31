import { Link, useLocation, useParams } from "react-router-dom"

function Accountheader() {
  // let { subPage } = useParams();
  // console.log(subPage)
  

  const location = useLocation()

  console.log(location.pathname.split('/')[2])
  let subPage = location.pathname.split('/')[2]

  if (subPage === undefined) {
    subPage = "profile";
  }  
  
  const activeClass = (type) => {


    let classes = "px-6 py-2 flex gap-1 items-center rounded-full";

    if (type === subPage) {
      classes += " bg-primary text-white font-semibold ";
    }else {
      classes += " bg-gray-200";
    }

    return classes;
  };
  return (
    <div>
        
      <nav className="container mx-auto flex justify-center gap-4 mt-9 items-center mb-9">
        <Link className={activeClass("profile")} to="/account">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          profile
        </Link>

        <Link className={activeClass("saved")} to="/account/saved">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
            />
          </svg>
          Saved
        </Link>
        <Link
          className={activeClass("myproperties")}
          to="/account/myproperties"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          Your&nbsp;properties
        </Link>
      </nav>
    </div>
  )
}

export default Accountheader