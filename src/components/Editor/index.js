import styled from "styled-components";
import { Controlled as CodeMirror } from "react-codemirror2-react-17";
import React, { useEffect, useRef, useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material-darker.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/edit/closebrackets";
import { gutterMarker } from "../../services/gutterMarker";

const INIT_VALUE = `function solution(n) {
  //Code...
}`;

function Editor({ getCode }, ref) {
  // const editorRef = useRef();
  const [code, setCode] = useState(INIT_VALUE);
  const editorState = {
    lastScope: null,
    lastPosition: null,
    lastLine: null,
  };

  const cleanUp = () => {
    const { lastScope, lastPosition, lastLine } = editorState;

    if (lastScope) {
      lastScope.clear();
    }

    if (lastPosition) {
      lastPosition.clear();
    }

    if (lastLine) {
      lastLine.clear();
    }

    if (ref.current) {
      ref.current.clearGutter("breakpoints");
    }
  };

  const disableEditing = () => {
    ref.current.setOption("readOnly", true);
  };

  const enableEditing = () => {
    ref.current.setOption("readOnly", false);
  };

  // useEffect(() => {
  //   // if (editorRef) {
  //   //   ref.current = editorRef.current;
  //   // }
  //   ref.current.focus();
  // });

  const gutterHandler = (cm, lineNumber, gutter, event) => {
    const info = cm.lineInfo(lineNumber);

    cm.setGutterMarker(
      lineNumber,
      "breakpoints",
      info.gutterMarkers ? null : gutterMarker(),
    );
  };
  return (
    <Wrapper>
      <CodeMirror
        ref={ref}
        value={String(code)}
        options={{
          mode: "javascript",
          theme: "material-darker",
          lineNumbers: true,
          lineWrapping: true,
          lint: true,
          matchBrackets: true,
          autoCloseBrackets: true,
          gutters: ["Codemirror-linenumbers", "breakpoints"],
        }}
        onBeforeChange={(editor, data, value) => {
          setCode(value);
        }}
        onChange={() => getCode(code)}
        onGutterClick={gutterHandler}
      />
    </Wrapper>
  );
}

export default React.forwardRef(Editor);

const Wrapper = styled.form`
  background: black;
  color: #f4af1b;
  width: 1480px;
  height: 660px;
  border: 3px solid #f2bc94;
  border-radius: 20px;
  padding: 10px;
`;
