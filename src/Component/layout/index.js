import React from "react";
import { Layout } from "antd";
import Navbar from "../navbar";
import FooterC from "Component/footer";
import "./layout.scss";
import { useSelector } from "react-redux";

// Data
import Data from "JSON/landingPage.json";

export default function Index(props) {
  const isLogin = useSelector((state) => state.loginReducer.isLogin);
  const { Header, Footer, Content } = Layout;
  if (props.kelasSaya) {
    return (
      <Layout>
        <Header className="header">
          <Navbar data={Data.kategori} isLogin={isLogin} />
        </Header>
        <Content>{props.children}</Content>
      </Layout>
    );
  }
  if (isLogin) {
    return (
      <Layout>
        <Header className="header">
          <Navbar data={Data.kategori} isLogin={isLogin} />
        </Header>
        <Content>{props.children}</Content>
        <Footer>
          <FooterC />
        </Footer>
      </Layout>
    );
  }
  console.log(isLogin);
  return (
    <Layout>
      <Header className="header">
        <Navbar data={Data.kategori} />
      </Header>
      <Content>{props.children}</Content>
      <Footer>
        <FooterC />
      </Footer>
    </Layout>
  );
}
