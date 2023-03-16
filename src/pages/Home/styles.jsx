import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: "";
  align-items: center;
  overflow: hidden;
`;

export const Landing = styled.div`
  width: 100%;
  height: 95vh;
  box-sizing: border-box;
  margin-top: 5rem;
  padding: 0;
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: #fffffd;
  position: relative;
`;

export const LandingFont = styled.div`
  width: fit-content;
  height: fit-content;
  text-align: center;
  margin-top: 2rem;
  font-size: 50px;
  font-weight: 700;
  line-height: 0.5;
  color: #222222;
`;

export const MainImg = styled.img`
  margin: 2rem;
  margin-top: 5vh;
  width: 18%;
  height: 50%;
  justify-content: center;
  align-items: center;
`;

export const AngleDown = styled.img`
  width: 5rem;
  height: 5rem;
  position: absolute;
  bottom: 0.7rem;
`;

export const Frame = styled.div`
  margin: 3rem 20vw 3rem 30vw;
  align-self: center;
  text-align: right;
  width: 50vw;
  height: 100%;
  min-width: 40rem;
  display: flex;
  flex-direction: row;
  -webkit-box-shadow: 8px 6px 14px -6px #edecea;
  box-shadow: 8px 6px 14px -6px #edeceb;
`;

export const Title = styled.div`
  width: 100%;
  height: fit-content;
  margin: 3rem;
  text-align: left;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ExImg = styled.img`
  width: 30vh;
  height: 30vh;
  margin: 2rem;
  .left {
    align-self: left;
  }
  .right {
    align-self: right;
  }
  -webkit-box-shadow: 8px 6px 14px -6px #dddddd;
  box-shadow: 8px 6px 14px -6px #dddddd;
`;

export const Desc = styled.div`
  float: right;
  width: 50%;
  height: auto;
  padding: 5rem;
  text-align: left;
  text-indent: 1.3rem;
  line-height: 200%;
`;
