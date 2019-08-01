import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  padding-top: 19px;
  margin-bottom: 29px;
  height: 50px;
  display: flex;
  align-items: center;
  opacity: .85;
`

const Header = styled.h2`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 26px;
  line-height: 32px;
  color: white;
  font-family: "Helvetica Neue";
`

const Greeting = () => {
  const getGreetingMessage = (curHour) => {
    if (5 <= curHour && curHour < 12) {
      return "Good morning"
    } else if (12 <= curHour && curHour < 5) {
      return "Good afternoon"
    } else {
      return "Good evening"
    }
  }
  // [TODO] to get the real user name after login
  const getUserName = () => "Guest"

  const greetingText = getGreetingMessage() + ", " + getUserName()

  return (
    <Wrapper>
      <Header>
        {greetingText}
      </Header>
    </Wrapper>
  )
}

export default Greeting
