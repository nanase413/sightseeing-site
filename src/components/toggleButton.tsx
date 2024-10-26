import * as React from 'react'
import  { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Menu = styled.nav`
    box-sizing: border-box;
    padding: 5px 5px 5px;
    background-color: rgb(205, 185, 150);
`

const LinkArea = styled.ul`
    position: absolute;
    z-index: 999;
    background-color: rgb(205, 185, 150);
    width: 200px;
    height: 300px;
    padding-left: 0px;
    border: 2px solid #D04D18;
    border-radius: 30px;
`
const LinkStyle = styled.li`
    text-align: center;
    list-style:none;
`
const LinkFont = styled(Link)`
    font-family: "program", "Helvetica Neue", Helvetica, "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: #D04D18;
    line-height: 2;
    text-decoration: none;
    transition: color 3s;
`

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu}>
        {isOpen ? 'CLOSE' : 'OPEN'}
      </button>
      {isOpen && (
        <Menu>
      
          <LinkArea>
            <LinkStyle>
                <LinkFont to="/sub" className="menu-germany" id="menuGermany">
                      ドイツ
                </LinkFont>
            </LinkStyle>
            <LinkStyle>
                <LinkFont to="/sub" className="menu-malta" >
                  マルタ
                </LinkFont>
            </LinkStyle>

          </LinkArea>
  
        </Menu>
      )}
    </div>
  );
};

export default HamburgerMenu;