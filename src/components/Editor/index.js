import styled from "styled-components";
import { Controlled as CodeMirror } from "react-codemirror2";
import { useState } from "react";
require("codemirror/mode/javascript/javascript");
require("codemirror/lib/codemirror.css");

const INIT_VALUE = `function solution(n) {
  //Code...
}`;

function Editor() {
  const [value, setValue] = useState(INIT_VALUE);
  const onChange = (editor, data, value) => {
    setValue({
      value,
    });
  };
  return (
    <Wrapper>
      <Textarea defaultValue={"코드미러 에디터"} />
      <CodeMirror
        value={value}
        options={{
          mode: "javascript",
          lineNumbers: true,
          lint: true,
        }}
        onBeforeChange={(editor, data, value) => {
          setValue({
            value,
          });
        }}
        onChange={onChange}
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

const Textarea = styled.textarea`
  width: 500px;
`;
