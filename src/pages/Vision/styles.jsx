import styled from "styled-components";

export const Article = styled.article`
  position: relative;
  top: 100px;
  left: 300px;
`;

export const Header = styled.header`
`;

export const Li = styled.li`
  padding: 20px;
  display: inline-block;
  
`;

export const Ul = styled.ul`
  position: relative;
  top: -50px;
  left: -24px;  
`;

export const Button = styled.button`
  background-color:transparent;
  padding: 5px;
  font-size:20px;

  background-color:#0a0a23;
  color: #fff;
  border:none;
  border-radius:10px;
  box-shadow: 0px 0px 2px 2px rgb(0,0,0);

  &:hover{  
    cursor:pointer;
  }
`;

export const P = styled.p`
  position: relative;
  top: 50px;
  font-size:25px;
  white-space: pre-line
`;

export const Img = styled.img`
  width:200px;
  height:200px;
`;