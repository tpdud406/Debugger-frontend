import styled from "styled-components";
import { Controlled as CodeMirror } from "react-codemirror2-react-17";
import { useEffect, useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material-darker.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/edit/closebrackets";
import { io } from "socket.io-client";

const INIT_VALUE = `function solution(n) {
  //Code...
}`;

function Editor() {
  const [code, setCode] = useState(INIT_VALUE);

  useEffect(() => {
    const socket = io.connect(process.env.REACT_APP_SERVER_HOST);

    socket.on("aa", (data) => {
      console.log("서버가 보낸 ", data);

      socket.emit("bb", "서버한테 보내는 메세지");
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <Wrapper>
      <CodeMirror
        value={String(code)}
        options={{
          mode: "javascript",
          theme: "material-darker",
          lineNumbers: true,
          lineWrapping: true,
          lint: true,
          matchBrackets: true,
          autoCloseBrackets: true,
        }}
        onBeforeChange={(editor, data, value) => {
          setCode(value);
        }}
      />
    </Wrapper>
  );
}

export default Editor;

const Wrapper = styled.form`
  background: black;
  color: #f4af1b;
  width: 1480px;
  height: 660px;
  border: 3px solid #f2bc94;
  border-radius: 20px;
  padding: 10px;
`;
