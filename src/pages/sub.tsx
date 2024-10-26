import * as React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ToggleButton from "../components/toggleButton";
import TravelImage from '../images/icon_travel.png';
import MapImage from '../images/cover-map.png';
import AmericaImage from '../images/America.jpg';
import { Country } from './country';
import { useLocation } from "react-router";

const Header = styled.header`
  font-size: 1.5rem;
  height: 20rem;
  left: 0;
  line-height: 2rem;
  padding: 0.5rem 1rem;
  position: fixed;
  right: 0;
  top: 0;
  background: rgb(205, 185, 180);
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
  background: #2C4473;
  border-radius: 30px;
`
const CountryNameArea = styled.div`
  flex: 1;
  text-align : left;
  background-color: lightblue;
`
const CountryNameFont = styled.span`
    font-family: "program", "Helvetica Neue", Helvetica, "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    color: #D04D18;
    line-height: 2;
    transition: color 3s;
`
const TravelLogo = styled.image`
  background-size: contain;
  background-repeat: no-repeat;
  position: absolute;
  top: 10px;
  left: 0px;
  width: 30%;
  height: 20%;
  background-image: url(${TravelImage});
`
const CountryArea = styled.div`
  flex: 6;
  display: flex;
  /*background-color: lightpink;*/
`
const CountryAreaLeft = styled.div`
  width: 67%;
  height: 100%;
  /*background-color: lightyellow;*/
`
const CountryAreaRight = styled.div`
  width: 33%;
  height: 100%;
  /*background-color: lightpink;*/
`
const Map = styled.image`
  background-size: contain;
  background-repeat:no-repeat;
  position: absolute;
  left: 3%;
  width: 90%;
  height: 90%;
  background-image: url(${MapImage});
`
const CountryImage = styled.image`
  background-size: cover;
  background-repeat:no-repeat;
  position: absolute;
  top: 35%;
  width: 25%;
  height: 40%;
  border-radius: 30px;
  background-image: url(${AmericaImage});
`
type MyState = {
  id: number;
};

export const Sub: React.FC = () => {
  const { state } = useLocation<MyState>();
  const { id } = state;

  return (
    <>
      <Header />
      <Wrapper>
        <MainArea>
          <ToggleButton />
          <MainBackGraund>
            <CountryNameArea>
                <CountryNameFont>group:{id}</ CountryNameFont>
            </CountryNameArea>
            <CountryArea>
            </CountryArea> 
          </MainBackGraund>
        </MainArea>
      </Wrapper>
    </>
  )
}
