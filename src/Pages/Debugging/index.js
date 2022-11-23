import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import Editor from "../../components/Editor";
import Variables from "../../components/Variables";
import Watch from "../../components/Watch";
import ToolBar from "../../components/ToolBar";

import { useContext } from "react";
import { SocketContext } from "../../context/socket";

function Debugging() {
  const socket = useContext(SocketContext);
  const editorRef = useRef(null);
  const [code, setCode] = useState("");
  const [buttonName, setButtonName] = useState(null);
  const isPlaying = useRef(false);
  console.log("buttonName", buttonName);
  const [watchList, setWatchList] = useState(
    window.localStorage.getItem("kodes-watch"),
  );
  // const [watchResult, setWatchResult] = useState(
  //   watchList.map((watch) => ({ name: watch, value: "undefined" })),
  // );
  const [watchResult, setWatchResult] = useState({
    name: watchList,
    value: "undefined",
  });
  const [localVariablesResult, setLocalVariablesResult] = useState([]);

  useEffect(() => {
    if (buttonName === "start") {
      const script = document.createElement("script");
      script.setAttribute("type", "javascript");
      script.src =
        "https://cdnjs.cloudflare.com/ajax/libs/react-is/18.2.0/cjs/react-is.development.js";
      document.body.appendChild(script);

      console.log("시작");
      isPlaying.current = true;
      socket.emit("beginDebug", JSON.stringify(code));
      window.localStorage.setItem("kodes-code", code);
    }

    if (buttonName === "stepInto") {
      socket.emit("stepInto", "stepInto");
      console.log("stepInto");
    }
    if (buttonName === "stepOut") {
      socket.emit("stepOut", "stepOut");
      console.log("stepOut");
    }
    if (buttonName === "stepOver") {
      socket.emit("stepOver");
    }

    if (buttonName === "stop") {
      isPlaying.current = false;
      socket.emit("stopDebug", "stop");
      console.log("stop");
    }

    setButtonName(null);
  }, [buttonName]);

  useEffect(() => {
    socket.off("Debugger.paused").on("Debugger.paused", (data) => {
      const { callFrameId, location, scope, variables } = JSON.parse(data);
      console.log("scope", scope);
      console.log("location", location);
      console.log("callFrameId", callFrameId);
      // const scopefrom = { line: scope.startLocation.lineNumber, ch: 0 };
      // const scopeto = {
      //   line: scope.endLocation.lineNumber,
      //   ch: scope.endLocation.columnNumber,
      // };
      socket.emit(
        "eval",
        JSON.stringify({ callFrameId, expressions: watchList }),
      );
      const localVariables = variables.result || [];
      console.log("Debugger.paused data", data);
      console.log("localVariables", localVariables);
      setLocalVariablesResult(
        localVariables.map((variable) => {
          return {
            name: variable.name,
            value:
              variable.value?.value ||
              variable.value?.description ||
              "undefined",
          };
        }),
      );

      if (isPlaying.current) {
        setTimeout(() => {
          socket.emit("stepInto");
        }, 500);
      }
    });

    const popuplateResult = (data) => {
      const results = JSON.parse(data).result;
      let output = results.map((e) => {
        return { name: e.name, value: e.result.value || "undefined" };
      });

      setWatchResult(output);
    };

    socket.off("Debugger.evalResult").on("Debugger.evalResult", (data) => {
      popuplateResult(data);
    });

    socket.off("Debugger.stop").on("Debugger.stop", () => {
      console.log("디버거 자동 종료");
      isPlaying.current = false;
    });
  });

  return (
    <Wrapper>
      <Editor ref={editorRef} getCode={setCode} />
      <SideBar>
        <ToolBar getButtonName={setButtonName} />
        <Description>툴바 클릭시 설명</Description>
      </SideBar>
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

const SideBar = styled.div`
  background: #00154f;
  color: #f4af1b;
  width: 400px;
  height: 100%;
  border: 3px solid #f2bc94;
  border-radius: 20px;
  position: fixed;
  right: 0;
  padding: 10;
`;

const Description = styled.p`
  padding: 10px;
`;
