import styled from "styled-components"
import Img from "gatsby-image"

export const Wrapper = styled.div`
  width: 120px;
  height: 144px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & + & {
    margin-left: 20px;
  }
`

export const Image = styled(Img)`
  position: relative;
  overflow: hidden;
  height: 120px;
  width: 120px;
  border-radius: 50%;
`

export const Name = styled.span`
  margin-top: 9px;
  font-size: 12px;
  font-family: "Helvetice Neue";
  line-height: 15px;
  font-weight: 500;
`
