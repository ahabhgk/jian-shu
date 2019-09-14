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
  position: relative;
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
  width: ${({ focused }) => focused ? '300px' : '190px'};
  height: 38px;
  border-radius: 19px;
  border: none;
  background: #eee;
  margin-left: 15px;
  padding: 0 20px;
  outline: none;
  color: #999;
  font-size: 15px;
  transition: .5s;
  &::placeholder {
    color: #999;
  }
`

export const SearchInfo = styled.div`
  width: 250px;
  position: absolute;
  top: 58px;
  left: 175px;
  border: 1px solid #eee;
  border-radius: 4px;
  box-shadow: 0 0 6px #ccc;
`

export const SearchInfoTitle = styled.div`
  margin: 20px 12px 0;
  font-size: 14px;
  color: #969696;
`

export const SearchInfoSwitch = styled.button`
  font-size: 10px;
  float: right;
  color: #969696;
  border: none;
  text-decoration: none;
  &:hover {
    color: #333;
  }
`

export const SearchInfoItemWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
`

export const SearchInfoItem = styled.a.attrs(({ linkTo }) => ({
  href: linkTo,
}))`
  border: 1px solid #787878;
  color: #787878;
  margin: 6px;
  font-size: 12px;
  border-radius: 2px;
  padding: 2px 4px;
  text-decoration: none;
  &:hover {
    border: 1px solid #333;
    color: #333;
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
