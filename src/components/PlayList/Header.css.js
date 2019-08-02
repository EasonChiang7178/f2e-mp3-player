import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

import { YELLOW_0, YELLOW_2 } from "../../constants/COLORS"
import playIcon from "../../images/play_icon.svg"

export const Wrapper = styled.div`
  position: relative;
  height: 180px;
  margin-bottom: 51px;
  flex: 0 0 auto;
`

export const Cover = styled(Img)`
  position: absolute !important;
  width: 100%;
  left: 0;
  bottom: 0;
  border-bottom-left-radius: 50px;
`

export const InfoWrapper = styled.div`
  height: 82px;
  max-width: 325px;
  padding-left: 30px;
  position: absolute;
  left: 0;
  bottom: 0;
`

export const Name = styled.h2`
  margin: 0;
  margin-bottom: 10px;
  font-size: 24px;
  line-height: 29px;
  font-family: "Helvetica Neue";
  color: white;
`

export const PlayButton = styled.button.attrs(() => ({
  children: <img src={playIcon} alt="play the list" />,
}))`
  padding: 0;
  padding-left: 3px;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  border: 0;
  background: ${YELLOW_2};
  position: absolute;
  bottom: 0;
  right: 30px;
  transform: translateY(22px);
  box-shadow: 0 8px 12px ${YELLOW_0};
  display: flex;
  justify-content: center;
  align-items: center;
`
