import * as React from 'react'
import styled from 'styled-components';
import ToggleButton from "../../../../components/toggleButton"
import FoodImage from '../../../../images/food/Food.png';
import MaltaFoodImage from '../../../../images/food/MaltaFood.jpg';
import MaltaFoodImage2 from '../../../../images/food/MaltaFood2.jpg';
import MaltaFoodImage3 from '../../../../images/food/MaltaFood3.jpg';
import MaltaFoodImage4 from '../../../../images/food/MaltaFood4.jpg';


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
const MaltaFood1 = styled.image`
  background-size: cover;
  width: 70%;
  height: 100%;
  margin-left: 15%;
  border-radius: 20px;
  background-image: url(${MaltaFoodImage});
`
const MaltaFood2 = styled.image`
  background-size: cover;
  width: 70%;
  height: 100%;
  margin-left: 15%;
  border-radius: 20px;
  background-image: url(${MaltaFoodImage2});
`
const MaltaFood3 = styled.image`
  background-size: cover;
  width: 70%;
  height: 100%;
  margin-left: 15%;
  border-radius: 20px;
  background-image: url(${MaltaFoodImage3});
`
const MaltaFood4 = styled.image`
  background-size: cover;
  width: 70%;
  height: 100%;
  margin-left: 15%;
  border-radius: 20px;
  background-image: url(${MaltaFoodImage4});
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

export const MaltaFood: React.FC = () => {

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
                    <FoodText>英国、イタリア、アラブ、北アフリカ料理の影響が強いマルタ料理。<br />
                    海に囲まれたマルタは獲れたての新鮮な魚介類も豊富。</FoodText>
                  </TextArea>
                  <ImageArea>
                    <FoodImageArea>
                      <MaltaFood1 />
                      <FoodTitle>マルタ伝統のウサギ料理</FoodTitle>
                    </FoodImageArea>
                    <FoodImageArea>
                      <MaltaFood2 />
                      <FoodTitle>マルタを代表するスナックパスティッツィ</FoodTitle>
                    </FoodImageArea>
                    <FoodImageArea>
                      <MaltaFood3 />
                      <FoodTitle>マルタのクラフトビールCISK</FoodTitle>
                    </FoodImageArea>
                    <FoodImageArea>
                      <MaltaFood4 />
                      <FoodTitle>四角形のパスタに具材を詰めたラビオリ</FoodTitle>
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
