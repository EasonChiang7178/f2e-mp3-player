import styled from "styled-components"

import RawPlayListBlock from "./PlayListBlock"
import { YELLOW_2 } from "../../constants/COLORS"

export const PlayListBlock = styled(RawPlayListBlock)``

export const Container = styled.div`
  display: flex;
  overflow: auto;
  width: 100vw;
  margin-left: -30px;

  & > ${PlayListBlock} {
    &:first-of-type {
      border-left: 30px solid ${YELLOW_2};
    }
    &:last-of-type {
      border-right: 30px solid ${YELLOW_2};
    }
  }
`
