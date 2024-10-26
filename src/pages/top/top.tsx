import * as React from 'react'
import styled from 'styled-components'
import ToggleButton from "../../components/toggleButton"
import TravelImage from '../../images/icon_travel.png';
import MapImage from '../../images/cover-map.png';
import AmericaImage from '../../images/America.jpg';
import { Country } from './country'

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
  background: #D04D18;
  border-radius: 30px;
`
const TravelLogoArea = styled.div`
  flex: 1;
  text-align : left;
  /*background-color: lightblue; */
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
const MapArea = styled.div`
  flex: 6;
  display: flex;
  /*background-color: lightpink;*/
`
const MapAreaLeft = styled.div`
  width: 67%;
  height: 100%;
  /*background-color: lightyellow;*/
`
const MapAreaRight = styled.div`
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

export const Top: React.FC = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <MainArea>
          <ToggleButton />
          <MainBackGraund>
            <TravelLogoArea>
              <TravelLogo />
            </TravelLogoArea>
            <MapArea>
              <MapAreaLeft>
                <Map />
                <Country />
              </MapAreaLeft>
              <MapAreaRight>
                <CountryImage />
              </MapAreaRight>
            </MapArea> 
          </MainBackGraund>
        </MainArea>
      </Wrapper>
    </>
  )
}
