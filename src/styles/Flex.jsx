import styled from "styled-components"

const Flex = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify || "center"};
  align-items: ${({ align }) => align || "center"};
  flex-wrap: ${({ wrap }) => wrap || "center"};
`

export default Flex
