import * as React from 'react'
import  { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Buttun = styled.button`
    float: right;
    margin-right: 4%;
    font-family: "program", "Helvetica Neue", Helvetica, "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    color: #2C4473;
    box-sizing: border-box;
    padding: 5px 5px 5px;
    background-color: rgb(205, 185, 150);
    border: 2px solid #2C4473;
    border-radius: 5px;
`

const Menu = styled.nav`
    float: right;
    margin-top: 1.5%;
    margin-right: 6%;
    box-sizing: border-box;
    padding: 5px 5px 5px;
    background-color: rgb(205, 185, 150);
`

const LinkArea = styled.ul`
    position: absolute;
    z-index: 999;
    background-color: rgb(205, 185, 150);
    width: 200px;
    height: 310px;
    padding-left: 0px;
    border: 2px solid #2C4473;
    border-radius: 30px;
`
const LinkStyle = styled.li`
    text-align: center;
    list-style:none;
`
const LinkFont = styled(Link)`
    font-family: "program", "Helvetica Neue", Helvetica, "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 2;
    text-decoration: none;
    color: #2C4473;
    &:hover {
    color: white;
  }
`
const Font = styled.span`
    font-family: "program", "Helvetica Neue", Helvetica, "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 2;
    text-decoration: none;
    color: #2C4473;
`

const HamburgerMenuAboutMalta = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Buttun onClick={toggleMenu}>
        {isOpen ? 'CLOSE' : 'OPEN'}
      </Buttun>
      
      {isOpen && (
        <Menu>     
          <LinkArea>
            <LinkStyle>
              <LinkFont to="/germany" className="menu-germany" id="menuGermany">
                GERMANY
              </LinkFont>
            </LinkStyle>
            <LinkStyle>
              <LinkFont to="/vietnam" className="menu-Vietnam" >
                VIETNAM
              </LinkFont>
            </LinkStyle>
            <LinkStyle>
              <LinkFont to="/america" className="menu-america" >
                USA
              </LinkFont>
            </LinkStyle>
            <LinkStyle>
                <Font>------------------</Font>
            </LinkStyle>
            <LinkStyle>
              <LinkFont to="/top" className="menu-top" >
                TOP
              </LinkFont>
            </LinkStyle>
            <LinkStyle>
                <Font>------------------</Font>
            </LinkStyle>
            <LinkStyle>
              <LinkFont to="/malta/details/maltaFood" className="menu-food" >
                FOOD
              </LinkFont>
            </LinkStyle>
            <LinkStyle>
              <LinkFont to="/malta/details/maltaSpot" className="menu-spot" >
                SPOT
              </LinkFont>
            </LinkStyle>
          </LinkArea>
        </Menu>
      )}
    </div>
  );
};

export default HamburgerMenuAboutMalta;