
import { useNavigate } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Column from 'antd/es/table/Column';
const { Header, Content, Footer } = Layout;
const HeaderComponent = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  let navList = [{
    "key": "Recherche",
    "label": "Recherche",
    "style": {fontSize: 15, textAlign: 'center', marginRight: "80%" },
    "onClick" : () => {navigate("/search");}
  },
  {
    "key": "S'identifier",
    "label": "S'identifier",
    "style": {fontSize: 15, textAlign: 'center',},
    "onClick" : () => {navigate("/login");}
  }];

  return (
    <Layout style={{
      marginBottom: "6em"
    }}>
      <Header
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          zIndex: 1,
          width: '100%',
          background: "#1677FF",
          boxShadow: "5px 8px 10px 5px rgba(208, 216, 243, 1)"
        }}
      >

      <Menu
        style={{
          width: '100%',
          display: 'flex',
          flex: "Column",
          justifyContent: 'center',
          paddingInline: "5%",
          background: "#1677FF"
        }}

          theme="dark"
          mode="horizontal"
          //defaultSelectedKeys={['2']}
          items={navList}
      />
        
      </Header>
      
    </Layout>
  );
};
export default HeaderComponent;