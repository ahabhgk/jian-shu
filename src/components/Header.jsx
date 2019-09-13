import React, { useState } from 'react'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
} from '../styles/header.js'

const Header = () => {
  const focused = useState(false)

  return (
    <HeaderWrapper>
      <Logo>简书</Logo>
      <Nav>
        <NavItem className="active">首页</NavItem>
        <NavItem>下载 APP</NavItem>
        <NavSearch placeholder="搜索" className={focused ? 'focused' : ''} />
        <NavItem className="right">登录</NavItem>
      </Nav>
      <Addition>
        <Button>注册</Button>
        <Button className="write">{'</>'} 写文章</Button>
      </Addition>
    </HeaderWrapper>
  )
}

export default Header
