import styled from "styled-components";

import Editor from "../../components/Editor";
import SideBar from "../../components/SideBar";
import Variables from "../../components/Variables";
import Watch from "../../components/Watch";

function Debugging() {
  return (
    <Wrapper>
      <Editor />
      <SideBar />
      <Bottom>
        <Variables />
        <Watch />
      </Bottom>
    </Wrapper>
  );
}

export default Debugging;

const Wrapper = styled.div`
  display: flex;
`;

const Bottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
