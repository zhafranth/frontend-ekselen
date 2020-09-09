import React from "react";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import Navbar from "../navbar";
import "./layout.scss";

export default function index(props) {
  const { Header, Footer, Content } = Layout;
  return (
    <Layout>
      <Header className="header"></Header>
      <Content>{props.children}</Content>
      <Footer></Footer>
    </Layout>
  );
}
