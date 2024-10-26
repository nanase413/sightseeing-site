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
export const Country: React.FC = () => {
  return (
    <>
        <Link to= "/sub">
          <Germany><FaMapMarkerAlt/></Germany>
        </Link>
        <Link to= "/malta">
          <Malta><FaMapMarkerAlt/></Malta>
        </Link>
        <Link to= "/sub">
          <Vietnam><FaMapMarkerAlt/></Vietnam>
        </Link>
        <Link to= "/sub">
          <Australia><FaMapMarkerAlt/></Australia>
        </Link>
        <Link to= "/sub">
          <Hawaii><FaMapMarkerAlt/></Hawaii>
        </Link>
        <Link to= "/sub">
          <America><FaMapMarkerAlt/></America>
        </Link>
    </>
  )
}
