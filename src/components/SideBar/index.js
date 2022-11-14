import styled from "styled-components";
import ToolBar from "../ToolBar";

function SideBar() {
  return (
    <Wrapper>
      <ToolBar />
      <Description>툴바 클릭시 설명</Description>
    </Wrapper>
  );
}

export default SideBar;

const Wrapper = styled.div`
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
