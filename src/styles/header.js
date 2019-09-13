import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 58px;
  position: relative;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
  href: '/',
})`
  width: 100px;
  position: absolute;
  top: 0;
  left: 0;
  color: #ec6f5b;
  font-size: 28px;
  font-weight: bold;
  line-height: 58px;
  text-align: center;
  text-decoration: none;
`

export const Nav = styled.div`
  width: 960px;
  margin: 0 auto;
`

export const NavItem = styled.a`
  text-decoration: none;
  line-height: 56px;
  padding: 0 15px;
  color: #333;
  &.right {
    float: right;
  }
  &.active {
    color: #ea6f5a;
  }
`

export const NavSearch = styled.input`
  width: 190px;
  height: 38px;
  border-radius: 19px;
  border: none;
  background: #eee;
  margin-left: 15px;
  padding: 0 20px;
  outline: none;
  color: #999;
  font-size: 15px;
  &::placeholder {
    color: #999;
  }
`

export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  line-height: 58px;
`

export const Button = styled.button`
  border: 1px solid #ec6149;
  line-height: 24px;
  font-size: 15px;
  border-radius: 19px;
  padding: 6px 20px;
  margin: 8px;
  color: #ec6149;
  &.write {
    color: #fff;
    background: #ec6149;
  }
`
