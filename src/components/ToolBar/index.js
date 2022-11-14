import styled from "styled-components";
import {
  VscDebugStart,
  VscDebugPause,
  VscDebugStepInto,
  VscDebugStepOut,
  VscDebugStepOver,
} from "react-icons/vsc";

function ToolBar() {
  return (
    <Wrapper>
      {<VscDebugStart /> || <VscDebugPause />}
      <VscDebugStepInto />
      <VscDebugStepOut />
      <VscDebugStepOver />
    </Wrapper>
  );
}

export default ToolBar;

const Wrapper = styled.div`
  display: flex;
  flex-basis: auto;
  background: #00154f;
  color: #f4af1b;
  width: 100%;
  height: 60px;
  border: 3px solid #f2bc94;
  border-radius: 20px;
  justify-content: space-evenly;
  padding-top: 10px;
  font-size: 50px;
`;
