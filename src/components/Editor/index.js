import styled from "styled-components";

function Editor() {
  return (
    <Wrapper>
      <Textarea defaultValue={"코드미러 에디터"} />
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
