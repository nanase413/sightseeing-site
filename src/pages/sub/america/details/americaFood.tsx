import * as React from 'react'
import styled from 'styled-components';
import ToggleButton from "../../../../components/america/toggleButtonAmericaFood"
import FoodImage from '../../../../images/food/Food.png';
import FoodImage2 from '../../../../images/food/AmericaFood2.jpg';
import FoodImage3 from '../../../../images/food/AmericaFood3.jpg';
import FoodImage4 from '../../../../images/food/AmericaFood4.jpg';
import FoodImage5 from '../../../../images/food/AmericaFood5.jpg';

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
  marge-left: 10%;
  font-family: "program", "Helvetica Neue", Helvetica, "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
  font-size: 1.5rem;
  font-weight: bold;
  color: rgb(205, 185, 150);
`
const FoodImageArea = styled.div`
  display: grid;
  grid-template-rows: 4fr 1fr;
`
const Food2 = styled.image`
  background-size: cover;
  width: 70%;
  height: 100%;
  margin-left: 15%;
  border-radius: 20px;
  background-image: url(${FoodImage2});
`
const Food3 = styled.image`
  background-size: cover;
  width: 70%;
  height: 100%;
  margin-left: 15%;
  border-radius: 20px;
  background-image: url(${FoodImage3});
`
const Food4 = styled.image`
  background-size: cover;
  width: 70%;
  height: 100%;
  margin-left: 15%;
  border-radius: 20px;
  background-image: url(${FoodImage4});
`
const Food5 = styled.image`
  background-size: cover;
  width: 70%;
  height: 100%;
  margin-left: 15%;
  border-radius: 20px;
  background-image: url(${FoodImage5});
`
const FoodTitle = styled.span`
  text-align: center;
  font-family: "program", "Helvetica Neue", Helvetica, "Noto Sans JP", -apple-system, BlinkMacSystemFont, "Helvetica Neue", "游ゴシック体", YuGothic, "游ゴシック", "Yu Gothic", "ヒラギノ角ゴ ProN W3", Hiragino Kaku Gothic ProN, Arial, "メイリオ", Meiryo, sans-serif;
  font-size: 1rem;
  font-weight: bold;
  color: rgb(205, 185, 150);
`
const Food = styled.image`
  background-size: cover;
  position: absolute;
  text-align: center;
  top: 15%;
  width: 25%;
  height: 40%;
  margin: 0% 7%;
  border-radius: 20px;
  background-image: url(${FoodImage});
`

export const AmericaFood: React.FC = () => {

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
                    <Food />
                    <AreaTitleBottom>
                      <AreaTitleBottomFont>about FOOD</AreaTitleBottomFont>
                    </AreaTitleBottom>
                  </AreaBackGraund>
                </AboutCountryArea>
                <InformationArea>
                  <TextArea>
                    <FoodText>移民の国としてさまざまな国の伝統料理をミックスし独自の食文化を形成。<br />
                    ハンバーガーやピザなどボリュームたっぷりのメニューも豊富。</FoodText>
                  </TextArea>
                  <ImageArea>
                    <FoodImageArea>
                      <Food2 />
                      <FoodTitle>豪快な見た目が印象的な『ローストチキン』</FoodTitle>
                    </FoodImageArea>
                    <FoodImageArea>
                      <Food3 />
                      <FoodTitle>野球観戦でも人気のファスト『フードホットドッグ』</FoodTitle>
                    </FoodImageArea>
                    <FoodImageArea>
                      <Food4 />
                      <FoodTitle>テキサス州発祥の郷土料理『チリコンカン』</FoodTitle>
                    </FoodImageArea>
                    <FoodImageArea>
                      <Food5 />
                      <FoodTitle>アメリカ定番の家庭料理『マッケンチーズ』</FoodTitle>
                    </FoodImageArea>                  
                  </ImageArea>
                </InformationArea>
            </CountryArea> 
          </MainBackGraund>
        </MainArea>
      </Wrapper>
    </>
  )
}
