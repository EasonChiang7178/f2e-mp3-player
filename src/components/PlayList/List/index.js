import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Item from "./Item"

const Container = styled.div`
  padding-left: 30px;
  padding-right: 30px;
  max-height: 100%;
  overflow: auto;
`

const List = ({ items }) => {
  return (
    <Container>
      {items.map(item => (
        <Item
          key={item.name}
          name={item.name}
          author={item.author}
          duration={item.duration}
        />
      ))}
    </Container>
  )
}

List.propTypes = {
  items: PropTypes.array
}

export default List
