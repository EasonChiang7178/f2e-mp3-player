import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  overflow: auto;
  width: 100vw;
  margin-left: -30px;

  &::before, &::after {
    display: block;
    width: 30px;
    height: 1px;
    background-color: transparent;
    content: "";
    position: relative;
    flex: 0 0 auto;
  }
`
