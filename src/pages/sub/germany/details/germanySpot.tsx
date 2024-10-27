import * as React from 'react'
import styled from 'styled-components';
import ToggleButton from "../../../../components/germany/toggleButtonGermanySpot"
import SpotImage from '../../../../images/spot/GermanySpot.jpg';
import SpotImage4 from '../../../../images/spot/GermanySpot5.jpg';
import SpotImage5 from '../../../../images/spot/GermanySpot6.jpg';
import SpotImage6 from '../../../../images/spot/GermanySpot7.jpg';
import SpotImage7 from '../../../../images/spot/GermanySpot4.jpg';


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
const Spot4 = styled.image`
  background-size: cover;
  width: 70%;
  height: 100%;
  margin-left: 15%;
  border-radius: 20px;
  background-image: url(${SpotImage4});
`
const Spot5 = styled.image`
  background-size: cover;
  width: 70%;
  height: 100%;
  margin-left: 15%;
  border-radius: 20px;
  background-image: url(${SpotImage5});
`
const Spot6 = styled.image`
  background-size: cover;
  width: 70%;
  height: 100%;
  margin-left: 15%;
  border-radius: 20px;
  background-image: url(${SpotImage6});
`
const Spot7 = styled.image`
  background-size: cover;
  width: 70%;
  height: 100%;
  margin-left: 15%;
  border-radius: 20px;
  background-image: url(${SpotImage7});
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

export const GermanySpot: React.FC = () => {

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
                    <FoodText>豊かな自然、歴史ある建造物、美しい街並み、モダンな雰囲気の店など<br />
                    街によってたくさんの表情をもつドイツ。</FoodText>
                  </TextArea>
                  <ImageArea>
                    <SpotImageArea>
                      <Spot4 />
                      <SpotTitle>世界最大のビール祭りオクトーバーフェストで有名<br />
                      大都市ながらのどかな空気が漂う『ミュンヘン』</SpotTitle>
                    </SpotImageArea>
                    <SpotImageArea>
                      <Spot5 />
                      <SpotTitle>壮大なケルン大聖堂とライン川沿いの美しい景観が<br />
                      魅力的な『ケルン』</SpotTitle>
                    </SpotImageArea>
                    <SpotImageArea>
                      <Spot6 />      
                      <SpotTitle>ドイツの街らしいゆとりある雰囲気『ベルリン』</SpotTitle>
                    </SpotImageArea>
                    <SpotImageArea>
                      <Spot7 />  
                      <SpotTitle>伝統と風習、音楽、色、香り、陽気さに溢れる<br />
                      ドイツの『クリスマスマーケット』</SpotTitle>
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
