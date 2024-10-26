import * as React from 'react'
import styled from 'styled-components'
import { FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom'

const Germany = styled.h2`
  position: absolute;
  top: 51%;
  left: 10%;
  color: white;
  h2:hover .Germany {
    color: rgb(240, 79, 4);
  }
`
const Malta = styled.h2`
  position: absolute;
  top: 57%;
  left: 11.8%;
  color: white;
`
const Vietnam = styled.h2`
  position: absolute;
  top: 65%;
  left: 22.5%;
  color: white;
`
const Australia = styled.h2`
  position: absolute;
  top: 77%;
  left: 26%;
  color: white;
`
const Hawaii = styled.h2`
  position: absolute;
  top: 59%;
  left: 33%;
  color: white;
`
const America = styled.h2`
  position: absolute;
  top: 55%;
  left: 42%;
  color: white;
`
type MyState = {
  id: number;
};

export const Country: React.FC = () => {
  // state縺ｫ險ｭ螳壹☆繧紀D
  const germanyId: MyState = {
    id: 1,
  };
  const maltaId: MyState = {
    id: 2,
  };
  const vietnamId: MyState = {
    id: 3,
  };
  const australiaId: MyState = {
    id: 4,
  };
  const hawaiiId: MyState = {
    id: 5,
  };
  const americaId: MyState = {
    id: 6,
  };

    return (
    <>
        <Link to={{pathname: "/sub", state: germanyId,}}>
            <Germany><FaMapMarkerAlt/></Germany>
        </Link>
        <Link to={{pathname: "/sub", state: maltaId,}}>
            <Malta><FaMapMarkerAlt/></Malta>
        </Link>
        <Link to={{pathname: "/sub", state: vietnamId,}}>
            <Vietnam><FaMapMarkerAlt/></Vietnam>
        </Link>
        <Link to={{pathname: "/sub", state: australiaId,}}>
            <Australia><FaMapMarkerAlt/></Australia>
        </Link>
        <Link to={{pathname: "/sub", state: hawaiiId,}}>
            <Hawaii><FaMapMarkerAlt/></Hawaii>
        </Link>
        <Link to={{pathname: "/sub", state: americaId,}}>
            <America><FaMapMarkerAlt/></America>
        </Link>
    </>
  )
}
