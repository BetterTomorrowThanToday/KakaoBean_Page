import React from "react";
import image1 from "../../images/image1.jpeg";
import image2 from "../../images/image2.png";
import image3 from "../../images/image3.png";
import image4 from "../../images/image4.png";
import image5 from "../../images/image5.png";
import image6 from "../../images/image6.png";

import {
  Info,
  Left,
  LeftImg,
  Member,
  Right,
  Role,
  TeamSection,
  Wrapper,
} from "./styles";
import He from "styled-components/dist/styled-components.browser.esm";
import HeaderBar from "../../components/HeaderBar";

const MemberList = [
  {
    id: "팀장",
    img: image5,
    name: "김희찬",
    mail: "wsx0239@gmail.com",
    link: "https://github.com/BetterTomorrowThanToday",
    mind: "뭔가는 남기고 죽어야지",
    role: true,
  },
  {
    id: 2,
    img: image4,
    name: "안수빈",
    mail: "asb0711@gmail.com",
    link: "https://github.com/happysubin",
    mind: "1일 1커밋",
    role: false,
  },
  {
    id: 3,
    img: image2,
    name: "김윤호",
    mail: "hkj9909@gmail.com",
    link: "https://github.com/ua1it",
    mind: "피할 수 없으면 즐겨라",
    role: false,
  },
  {
    id: 4,
    img: image3,
    name: "추성준",
    mail: "j949854@gmail.com",
    link: "https://github.com/ChuSeongJun",
    mind: "내 기분이 내 태도가 되지말자",
    role: false,
  },
  {
    id: 5,
    img: image1,
    name: "임인범",
    mail: "@gmail.com",
    link: "https://github.com/lib26",
    mind: "넘어질거면 앞으로 넘어져라",
    role: false,
  },
  {
    id: 6,
    img: image6,
    name: "조연겸",
    mail: "whdusrua@gmail.com",
    link: "https://github.com/jomo34",
    mind: "구겨진 종이가 더 멀리 날아간다",
    role: false,
  },
];

const handleOpenNewTab = (url) => {
  window.open(url, "_blank", "noopener, noreferrer");
};

const Team = () => {
  return (
    <>
      <HeaderBar />
      <Wrapper>
        <Info>팀원 소개</Info>
        <TeamSection>
          {MemberList.map((it) => (
            <Member>
              <Left>
                <LeftImg src={it.img} alt="" />
                {it.role ? <Role>팀장</Role> : <Role>팀원</Role>}
              </Left>
              <Right>
                <div>이름: {it.name}</div>
                <div>이메일: {it.mail}</div>
                <div onClick={() => handleOpenNewTab(it.link)}>
                  GitHub: {it.link}
                </div>
                <div>좌우명: {it.mind}</div>
              </Right>
            </Member>
          ))}
        </TeamSection>
      </Wrapper>
    </>
  );
};

export default Team;
