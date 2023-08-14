import { Link } from "react-router-dom";

const navBar = ()=>{
    return (
        <nav className="navbar">
        <h1>My blog</h1>
        <div calssName ="links">
            <Link to= "/">Home</Link>
            <Link to = "/create"> New blog</Link>
        </div>
        </nav>
    );
}
export default navBar;