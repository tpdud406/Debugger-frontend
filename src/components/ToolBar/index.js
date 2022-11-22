import styled from "styled-components";
import {
  VscDebugStart,
  VscDebugPause,
  VscDebugStepInto,
  VscDebugStepOut,
  VscDebugStepOver,
  VscDebugStop,
} from "react-icons/vsc";
import { useContext } from "react";
import { SocketContext } from "../../context/socket";

function ToolBar({ getButtonName }) {
  const socket = useContext(SocketContext);
  const emitHandler = (e) => {
    const { name } = e.currentTarget;

    getButtonName(name);

    socket.emit(`${name}`, `hi I'm ${name}`);
    if (name === "start") {
      socket.emit(`${name}`);
    }
  };

  return (
    <Wrapper>
      <Button type="button" name="start" onClick={emitHandler}>
        <VscDebugStart />
      </Button>
      <Button type="button" name="stop" onClick={emitHandler}>
        <VscDebugStop />
      </Button>
      <Button type="button" name="paused" onClick={emitHandler}>
        <VscDebugPause />
      </Button>
      <Button type="button" name="stepInto" onClick={emitHandler}>
        <VscDebugStepInto />
      </Button>
      <Button type="button" name="stepOut" onClick={emitHandler}>
        <VscDebugStepOut />
      </Button>
      <Button type="button" name="stepOver" onClick={emitHandler}>
        <VscDebugStepOver />
      </Button>
    </Wrapper>
  );
}

export default ToolBar;

const Wrapper = styled.div`
  display: flex;
  flex-basis: auto;
  width: 100%;
  height: 60px;
  border: 3px solid #f2bc94;
  border-radius: 20px;
  justify-content: space-evenly;
  padding-top: 10px;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 15px;
  background: #00154f;
  color: grey;
  font-size: 40px;
  cursor: pointer;

  &:hover {
    color: #f4af1b;
  }

  &:active {
    transform: translateY(4px);
  }
`;
