import React, { useEffect } from 'react'
import {
  getInputOnAction,
  getMouseInAction,
  getAllListAction,
  getChangeListAction,
} from '../store/actions/header/actionCreator.js'
import { connect } from 'react-redux'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItemWrapper,
  SearchInfoItem,
  Addition,
  Button,
} from '../styles/header.js'

const Header = ({
  focused,
  mouseIn,
  list,
  handleInputOn,
  handleMouseIn,
  handleGetAllList,
  handleChangeList,
}) => {
  useEffect(() => {
    handleGetAllList()
  }, [handleGetAllList])

  return (
    <HeaderWrapper>
      <Logo>简书</Logo>
      <Nav>
        <NavItem className="active">首页</NavItem>
        <NavItem>下载 APP</NavItem>
        <NavSearch
          placeholder="搜索"
          onFocus={() => handleInputOn(true)}
          onBlur={() => handleInputOn(false)}
        />
        {(focused || mouseIn) && (
          <SearchInfo
            onMouseEnter={() => handleMouseIn(true)}
            onMouseLeave={() => handleMouseIn(false)}
          >
            <SearchInfoTitle>
              热门搜索
              <SearchInfoSwitch onClick={handleChangeList}>换一批</SearchInfoSwitch>
            </SearchInfoTitle>
            <SearchInfoItemWrapper>
              {list.map(item => (
                <SearchInfoItem key={item} linkTo={`/hot/${item}`}>
                  {item}
                </SearchInfoItem>
              ))}
            </SearchInfoItemWrapper>
          </SearchInfo>
        )}
        <NavItem className="right">登录</NavItem>
      </Nav>
      <Addition>
        <Button>注册</Button>
        <Button className="write">{'</>'} 写文章</Button>
      </Addition>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => ({
  focused: state.header.focused,
  list: state.header.list,
  mouseIn: state.header.mouseIn,
})

const mapDispatchToProps = (dispatch) => ({
  handleInputOn: isOn => dispatch(getInputOnAction(isOn)),
  handleMouseIn: isIn => dispatch(getMouseInAction(isIn)),
  handleGetAllList: () => dispatch(getAllListAction()),
  handleChangeList: () => dispatch(getChangeListAction()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header)
