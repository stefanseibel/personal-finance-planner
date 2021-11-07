import { Typography } from 'antd';

const { Title } = Typography;

const HomeLoggedIn = ({ name }) => {
  return (
    <div>
    <Title level={1}>Welcome, {name}</Title>
    </div>
    )
}

export default HomeLoggedIn;
