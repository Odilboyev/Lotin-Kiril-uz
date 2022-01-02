import styled from "styled-components";
const ContainerStyles = styled.div`
  background: #eee;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2 {
    font-family: "Courier New", Courier, monospace !important;
    font-weight: bolder;
  }
  textarea {
    font-size: 20px;
  }
  svg {
    font-size: 25px;
  }
`;
export default ContainerStyles;
