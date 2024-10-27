import * as React from 'react';
import { useRef } from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ToggleButton from "../../../components/toggleButton";
import FlagImage from '../../../images/flag/AmericaFlag.png';
import FoodImage from '../../../images/food/AmericaFood.jpg';
import SpotImage from '../../../images/America.jpg';
import { Country } from '../../top/country';
import { useLocation } from "react-router";
import { Link } from 'react-router-dom'


const Header = styled.header`
  font-size: 1.5rem;
  height: 20rem;
  left: 0;
  line-height: 2rem;
  padding: 0.5rem 1rem;
  position: fixed;
  right: 0;
  top: 0;
  background: rgb(205, 185, 150);
`
const Wrapper = styled.div`
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 3rem;
`
const MainArea = styled.div`
  border-top: 1px solid silver;
  bottom: 0;
  padding: 0.5rem;
  position: absolute;
  top: 0;
  width: 100vw;
  background: rgb(205, 185, 150);
  z-index: 1;    
`
const MainBackGraund = styled.div`
  display: flex;
  position: absolute;
  flex-direction: column;
  height: 85%;
  top: 8%;
  left: 4%;
  right: 4%;
`
const CountryArea = styled.div`
  flex: 1;
  display: flex;
`
const AboutCountryArea = styled.div`
  width: 34%;
  height: 100%;
`
const FoodArea = styled.div`
  width: 33%;
  height: 100%;
`
const SpotArea = styled.div`
  width: 33%;
  height: 100%;
`
const AreaBackGraund = styled.div`
  width: 96%;
  height: 100%;
  margin: 0% 2%;
  background: #2C4473;
  border-radius: 30px;
`
const AreaImageTop = styled.div`
  width: 100%;
  height: 65%;
`
const AreaTitleBottom = styled.div`
  width: 100%;
  height: 35%;
`
const AreaTitleTop = styled.div`
  width: 100%;
  height: 35%;
`
const AreaImageBottom = styled.div`
  width: 100%;
  height: 65%;
`
const LinkFont = styled(Link)`
    text-decoration: none;
`
const AreaTitleTopFont = styled.span`
    display: flex;
    justify-content: center;
    font-family: "program", "Helvetica Neue", Helvetica, "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
    font-size: 5rem;
    font-weight: bold;
    color: rgb(205, 185, 150);
    line-height: 4;
`
const AreaTitleBottomFont = styled.span`
    display: flex;
    justify-content: center;
    font-family: "program", "Helvetica Neue", Helvetica, "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
    font-size: 5rem;
    font-weight: bold;
    color: rgb(205, 185, 150);
    line-height: 2;
`
const Flag = styled.image`
  background-size: cover;
  position: absolute;
  text-align: center;
  top: 15%;
  width: 25%;
  height: 40%;
  margin: 0% 4%;
  border-radius: 20px;
  background-image: url(${FlagImage});
`
const Food = styled.image`
  background-size: cover;
  position: absolute;
  text-align: center;
  top: 45%;
  width: 25%;
  height: 40%;
  margin: 0% 3%;
  border-radius: 20px;
  background-image: url(${FoodImage});
`
const Spot = styled.image`
  background-size: cover;
  position: absolute;
  text-align: center;
  top: 15%;
  width: 25%;
  height: 40%;
  margin: 0% 3%;
  border-radius: 20px;
  background-image: url(${SpotImage});
`

export const America: React.FC = () => {

  return (
    <>
      <Header />
      <Wrapper>
        <MainArea>
          <ToggleButton />
          <MainBackGraund>
            <CountryArea>
                <AboutCountryArea>
                    <LinkFont to= "/america/details/aboutAmerica">
                        <AreaBackGraund>
                            <AreaImageTop />
                                <Flag />
                            <AreaTitleBottom>
                                <AreaTitleBottomFont>about USA</AreaTitleBottomFont>
                            </AreaTitleBottom>
                        </AreaBackGraund>
                    </LinkFont>
                </AboutCountryArea>
                <FoodArea>
                    <LinkFont to= "/america/details/americaFood">
                        <AreaBackGraund>
                            <AreaTitleTop>
                                <AreaTitleTopFont>about FOOD</AreaTitleTopFont>
                            </AreaTitleTop>
                            <AreaImageBottom />
                                <Food />
                        </AreaBackGraund>
                    </LinkFont>
                </FoodArea>
                <SpotArea>
                    <LinkFont to= "/america/details/americaSpot">
                        <AreaBackGraund>
                            <AreaImageTop />
                                <Spot />
                            <AreaTitleBottom>
                                <AreaTitleBottomFont>about SPOT</AreaTitleBottomFont>
                            </AreaTitleBottom>
                        </AreaBackGraund>
                    </LinkFont>
                </SpotArea>
            </CountryArea> 
          </MainBackGraund>
        </MainArea>
      </Wrapper>
    </>
  )
}
