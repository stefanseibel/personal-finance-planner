import { Link, useLocation } from "react-router-dom";
import { Menu } from "antd";
import { HomeOutlined, LoginOutlined, SlidersOutlined, LogoutOutlined, UserOutlined, ToTopOutlined } from '@ant-design/icons'


const Navbar = ({jwt, mail}) => {

    //const [current, setCurrent] = useState(null);
    const location = useLocation();
    return (
        <Menu mode="horizontal" selectedKeys={location.pathname}>
            <Menu.Item key="/" icon={<HomeOutlined />}>
                <Link to="/">
                    Homepage
                </Link>
            </Menu.Item>
            {jwt? 
            <>
            <Menu.Item key="assets" icon={<SlidersOutlined />}>
                <Link to="/assets">
                    Financial Assets
                </Link>
            </Menu.Item>
            <Menu.Item key="user" icon={<UserOutlined />} style={{float: 'right', marginLeft:'auto'}}>
                {mail}
            </Menu.Item>
            <Menu.Item key="logout" icon={<LogoutOutlined />} style={{float: 'right', marginLeft:0}}>
                <Link to="/logout">
                    Log out
                </Link>
            </Menu.Item>
            </>:
            <>
            <Menu.Item key="signup" icon={<ToTopOutlined />} style={{float: 'right', marginLeft:'auto'}} >
                <Link to="/signup">
                    Sign up
                </Link>
            </Menu.Item>
            <Menu.Item key="login" icon={<LoginOutlined />} style={{float: 'right', marginLeft:0}} >
                <Link to="/login">
                    Log in
                </Link>
            </Menu.Item>
            </>
            }
        </Menu>
    )
}

export default Navbar;
