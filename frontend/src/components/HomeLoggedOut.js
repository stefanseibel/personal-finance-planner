import { Typography } from 'antd';

const { Title } = Typography;

const HomeLoggedOut = () => {
  return (
    <div>
      <Title level={1}>Welcome!</Title>
      <Title level={2}>Log in or sign up in the top right</Title>
    </div>
  )
}

export default HomeLoggedOut;
