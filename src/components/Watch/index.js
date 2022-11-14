import styled from "styled-components";

function Watch() {
  return (
    <Wrapper>
      <Title>Watch Expressions</Title>
      <input />
      <Contents>input에 표현식 입력시 표현식, 값 보일 곳</Contents>
    </Wrapper>
  );
}

export default Watch;

const Wrapper = styled.div`
  background: #00154f;
  color: #f4af1b;
  width: 39%;
  height: 300px;
  border: 3px solid #f2bc94;
  border-radius: 20px;
`;

const Title = styled.div`
  height: 50px;
  text-align: center;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  border-bottom: 3px solid #f2bc94;
  padding-top: 20;
`;

const Contents = styled.div`
  font-size: 15px;
  padding: 10;
`;
