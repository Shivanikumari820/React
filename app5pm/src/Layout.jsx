import {Link, Outlet} from "react-router-dom"
const Layout = () =>{
    return(
        <>
        <Link to="Home">Home</Link>
        <Link to="About">About</Link>
        <Link to="Contact">Contact</Link>
        <hr />
        <Outlet/>
        <hr />
        <h1>Welcome to my cybrom</h1>
 
        </>
    )
}
export default Layout;