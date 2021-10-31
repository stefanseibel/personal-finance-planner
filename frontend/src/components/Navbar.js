import { Link } from "react-router-dom";

const Navbar = ({text,mail}) => {
    return (
        <div>
            {mail ?
                <> 
                <p> {"Logged in as " + mail}</p> 
                <Link to='/assets'>Financial Assets</Link>
                </>
                :
                <>
                <Link to='/login'><p>Login</p></Link>
                </>
            }
            <hr />
        </div>
    )
}

export default Navbar;
