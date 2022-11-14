import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BiBug, BiSearchAlt2 } from "react-icons/bi";

function Start() {
  const navigate = useNavigate();

  return (
    <>
      <Wrapper>
        <Title>Easy Debugging</Title>
        <button
          onClick={() => {
            navigate("/debugging");
          }}
        >
          Let's Start!
        </button>
        <BiBug className="bugIcon" />
        <BiSearchAlt2 className="searchIcon" />
      </Wrapper>
    </>
  );
}

export default Start;

const Wrapper = styled.div`
  background: #00154f;
  height: 100%;
  background-size: cover;
  color: #f4af1b;

  & button {
    display: block;
    margin: 0 auto;
    border: none;
    background: #00154f;
    color: #f4af1b;
    font-size: 50px;
    cursor: pointer;
  }

  & button:hover {
    scale: 1.2;
    transition: 0.5s;
  }

  .bugIcon {
    display: inline;
    font-size: 100px;
    margin-left: 70%;
  }

  .searchIcon {
    display: inline;
    font-size: 160px;
    margin-right: 0;
  }
`;

const Title = styled.h1`
  font-size: 90px;
  font-weight: 600;
  text-align: center;
  padding: 200;
`;
