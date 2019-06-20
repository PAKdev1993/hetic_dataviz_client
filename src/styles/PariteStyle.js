import styled from "styled-components";

export default styled.div`
  width: 80%;
  height: 60%;
  margin: 0 auto;
  margin-top: 2%;
  color: white;
  position: relative;

  .title-parite {
    font-size: 3em;
    font-weight: 700;
  }

  .value-parite {
    font-size: 1em;
    font-weight: 300;
    letter-spacing: 0.3em;
    text-transform: uppercase;
  }

  .title-parite {
    font-size: 3em;
    font-weight: 500;
    margin-bottom: -1%;
  }

  .gender {
    width: 100%;
    padding: 0 4%;
    position: absolute;
  }

  .women {
    top: 0;
    left: 0;
    background-color: ${props => props.theme.color4};
    height: 100%;
  }
  .men {
    z-index: 1;
    bottom: 0;
    right: 0;
    background-color: ${props => props.theme.color1};
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    transition: 0.4s ease-out;
  }
`;
