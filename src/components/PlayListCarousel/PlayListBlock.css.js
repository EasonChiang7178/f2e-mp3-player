import styled from "styled-components"
import Img from "gatsby-image"

export const Wrapper = styled.div`
  width: 200px;
  height: 300px;
  position: relative;
  background: white;
  border-radius: 10px;
  flex: 0 0 auto;
  cursor: pointer;
  overflow: hidden;

  & + & {
    margin-left: 15px;
  }
`

export const BgImg = styled(Img)`
  height: 100%;
`

export const BgMask = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 1) 80%
  );
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 1) 80%
  );
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.4) 0%,
    rgba(255, 255, 255, 1) 80%
  );
`

export const InfoWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: calc(100% - 25px);
  padding: 0 10px 20px 15px;
`

export const Name = styled.h1`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 23px;
  font-family: "Helvetica Neue";
`

export const Description = styled.p`
  max-height: 49px;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 12px;
  line-height: 16px;
`
