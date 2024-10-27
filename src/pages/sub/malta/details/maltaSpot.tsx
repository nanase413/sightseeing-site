import * as React from 'react'
import styled from 'styled-components';
import ToggleButton from "../../../../components/malta/toggleButtonMaltaSpot"
import SpotImage from '../../../../images/spot/MaltaSpot.jpg';
import MaltaSpotImage4 from '../../../../images/spot/MaltaSpot4.jpg';
import MaltaSpotImage5 from '../../../../images/spot/MaltaSpot5.jpg';
import MaltaSpotImage6 from '../../../../images/spot/MaltaSpot6.jpg';
import MaltaSpotImage7 from '../../../../images/spot/MaltaSpot7.jpg';


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
const TextArea = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 24%;
  margin-left:8%;
`
const ImageArea = styled.div`
  width: 100%;
  height: 76%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`
const FoodText = styled.span`
  font-family: "program", "Helvetica Neue", Helvetica, "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: rgb(205, 185, 150);
`
const SpotImageArea = styled.div`
  display: grid;
  grid-template-rows: 4fr 1fr;
`
const MaltaSpot4 = styled.image`
  background-size: cover;
  width: 70%;
  height: 100%;
  margin-left: 15%;
  border-radius: 20px;
  background-image: url(${MaltaSpotImage4});
`
const MaltaSpot5 = styled.image`
  background-size: cover;
  width: 70%;
  height: 100%;
  margin-left: 15%;
  border-radius: 20px;
  background-image: url(${MaltaSpotImage5});
`
const MaltaSpot6 = styled.image`
  background-size: cover;
  width: 70%;
  height: 100%;
  margin-left: 15%;
  border-radius: 20px;
  background-image: url(${MaltaSpotImage6});
`
const MaltaSpot7 = styled.image`
  background-size: cover;
  width: 70%;
  height: 100%;
  margin-left: 15%;
  border-radius: 20px;
  background-image: url(${MaltaSpotImage7});
`
const SpotTitle = styled.span`
  text-align: center;
  font-family: "program", "Helvetica Neue", Helvetica, "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  color: rgb(205, 185, 150);
`
const Spot = styled.image`
  background-size: cover;
  position: absolute;
  text-align: center;
  top: 15%;
  width: 25%;
  height: 40%;
  margin: 0% 7%;
  border-radius: 20px;
  background-image: url(${SpotImage});
`

export const MaltaSpot: React.FC = () => {

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
                      <Spot />
                    <AreaTitleBottom>
                      <AreaTitleBottomFont>about SPOT</AreaTitleBottomFont>
                    </AreaTitleBottom>
                  </AreaBackGraund>
                </AboutCountryArea>
                <InformationArea>
                  <TextArea>
                    <FoodText>地中海に浮かぶ小さな島国マルタは世界遺産の観光と<br />
                    リゾート気分を両方楽しめるとても魅力的な国です。</FoodText>
                  </TextArea>
                  <ImageArea>
                    <SpotImageArea>
                      <MaltaSpot4 />
                      <SpotTitle>城壁に囲まれた世界遺産の街『ヴァレッタ』</SpotTitle>
                    </SpotImageArea>
                    <SpotImageArea>
                      <MaltaSpot5 />
                      <SpotTitle>海岸沿いにプロムナードもあるマルタで最も賑わう街『スリーマ』</SpotTitle>
                    </SpotImageArea>
                    <SpotImageArea>
                      <MaltaSpot6 />      
                      <SpotTitle>マルタ島から日帰りでいける『ゴゾ島＆コミノ島』</SpotTitle>
                    </SpotImageArea>
                    <SpotImageArea>
                      <MaltaSpot7 />  
                      <SpotTitle>カラフルな漁船が浮かぶ『マルサシュロック』</SpotTitle>
                    </SpotImageArea>                  
                  </ImageArea>
                </InformationArea>
            </CountryArea> 
          </MainBackGraund>
        </MainArea>
      </Wrapper>
    </>
  )
}
