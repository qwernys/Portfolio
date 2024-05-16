import {Link, Outlet} from "react-router-dom";

export default function Portfolio() {
    return (
        <>
          <nav>
            <Link to="pokemon-app" className='div-link'>Pokemon App</Link>
          </nav>

          <Outlet/>
        </>
    )
}