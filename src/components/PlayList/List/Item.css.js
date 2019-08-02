import styled from "styled-components"
import { GREY, YELLOW_1 } from "../../../constants/COLORS"

export const Wrapper = styled.div`
  padding-top: 10px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  & + & {
    border-top: 1px solid ${YELLOW_1};
  }
`

export const InfoWrapper = styled.div``

export const Name = styled.h6`
  margin: 0;
  margin-bottom: 4px;
  font-size: 14px;
  font-family: Montserrat;
  line-height: 17px;
`

export const Author = styled.div`
  font-size: 12px;
  font-family: "Helvetica Neue";
  line-height: 14px;
  color: ${GREY};
`

export const Duration = styled.div`
  padding-top: 1px;
  font-size: 12px;
  font-family: "Helvetica Neue";
  line-height: 14px;
  color: ${GREY};
`
