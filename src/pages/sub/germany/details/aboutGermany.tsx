import * as React from 'react'
import styled from 'styled-components';
import ToggleButton from "../../../../components/germany/toggleButtonAboutGermany"
import FlagImage from '../../../../images/flag/GermanyFlag.png';
import SpotImage from '../../../../images/spot/GermanySpot.jpg';
import SpotImage2 from '../../../../images/spot/GermanySpot2.jpg';
import SpotImage3 from '../../../../images/spot/GermanySpot3.jpg';
import SpotImage4 from '../../../../images/spot/GermanySpot4.jpg';


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
  background: #2C4473;
  border-radius: 30px;
`
const CountryArea = styled.div`
  flex: 1;
  display: flex;
`
const AboutCountryArea = styled.div`
  width: 40%;
  height: 100%;
`
const InformationArea = styled.div`
  width: 60%;
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
const CatchCopyArea = styled.div`
  width: 100%;
  height: 20%;
`
const CatchCopy = styled.span`
  font-family: "program", "Helvetica Neue", Helvetica, "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
  font-size: 3rem;
  font-weight: bold;
  color: rgb(205, 185, 150);
  line-height: 3;
 
`
const DetailArea1 = styled.div`
  width: 100%;
  height: 50%;
`
const DetailArea2 = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
`
const DetailTitleArea = styled.div`
  width: 100%;
  height: 30%;
`
const DetailTitle = styled.span`
  font-family: "program", "Helvetica Neue", Helvetica, "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: rgb(205, 185, 150);
  line-height: 3;
`
const DetailTextArea = styled.div`
  width: 100%;
  height: 70%;
`
const DetailText = styled.p`
  font-family: "program", "Helvetica Neue", Helvetica, "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 0;
  color: rgb(205, 185, 150);
`
const Flag = styled.image`
  background-size: cover;
  position: absolute;
  text-align: center;
  top: 15%;
  width: 25%;
  height: 40%;
  margin: 0% 7%;
  border-radius: 20px;
  background-image: url(${FlagImage});
`
const Spot = styled.image`
  background-size: cover;
  width: 25%;
  height: 80%;
  background-image: url(${SpotImage});
`
const Spot2 = styled.image`
  background-size: cover;
  width: 25%;
  height: 80%;
  background-image: url(${SpotImage2});
`
const Spot3 = styled.image`
  background-size: cover;
  width: 25%;
  height: 80%;
  background-image: url(${SpotImage3});
`
const Spot4 = styled.image`
  background-size: cover;
  width: 25%;
  height: 80%;
  background-image: url(${SpotImage4});
`

export const AboutGermany: React.FC = () => {

  return (
    <>
      <Header />
      <Wrapper>
        <MainArea>
          <ToggleButton />
          <MainBackGraund>
            <CountryArea>
                <AboutCountryArea>
                  <AreaBackGraund>
                    <AreaImageTop />
                    <Flag />
                    <AreaTitleBottom>
                      <AreaTitleBottomFont>about GERMANY</AreaTitleBottomFont>
                    </AreaTitleBottom>
                  </AreaBackGraund>
                </AboutCountryArea>
                <InformationArea>
                  <CatchCopyArea>         
                    <CatchCopy>古城や街道にグルメなど魅力盛り沢山な国</CatchCopy>
                  </CatchCopyArea>
                  <DetailArea1>
                    <DetailTitleArea>
                      <DetailTitle>基本情報</DetailTitle>
                    </DetailTitleArea>
                    <DetailTextArea>
                      <DetailText>・正式名称：ドイツ連邦共和国（Federal Republic of Germany）</DetailText>
                      <DetailText>・首都：ベルリン</DetailText>
                      <DetailText>・人口：8,482万人</DetailText>
                      <DetailText>・公用語：ドイツ語</DetailText>
                    </DetailTextArea>
                  </DetailArea1>
                  <DetailArea2>
                    <Spot/>
                    <Spot2/>
                    <Spot3/>
                    <Spot4/>
                  </DetailArea2>
                </InformationArea>
            </CountryArea> 
          </MainBackGraund>
        </MainArea>
      </Wrapper>
    </>
  )
}
