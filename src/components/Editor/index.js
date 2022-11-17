import styled from "styled-components";
import { Controlled as CodeMirror } from "react-codemirror2-react-17";
import { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material-darker.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/edit/closebrackets";

const INIT_VALUE = `function solution(n) {
  //Code...
}`;

function Editor() {
  const [code, setCode] = useState(INIT_VALUE);

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
