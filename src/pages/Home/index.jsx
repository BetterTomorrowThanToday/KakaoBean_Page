import mascot from "../../images/beanSolo.png"
import arrow from "../../images/angleDown.svg"
import web from "../../images/web.png"
import sys from "../../images/sysArch.png"
import database from "../../images/database.png"

import React from "react";
import { Link } from 'react-scroll';
import "./floating.css";
import {
  Landing,
  LandingFont,
  MainImg,
  AngleDown,
  Frame,
  Wrapper,
  ExImg,
  Title,
  Desc
} from "./styles";
import HeaderBar from "../../components/HeaderBar";

const desc=[
  {id:1, title:"차세대 쳇봇 LAB", imgSrc:web, description:"응용 시스템 개발 프로세스 학습 및 개발 프로세스에 기반한 응용 개발 실습 · React.js(또는 Vue.js) 프론트엔드, Spring Boot 백엔드, MySQL을 이용한 설문 시스템 개발 · 클라우드 네이티브 환경의 웹 서비스 개발"},
  {id:2, title:"데이터 관리 기술 LAB", imgSrc:database, description:"CDC(Change Data Capture)와 Transformation을 통한 데이터 분석 시스템 파일럿 개발을 위한 데이터 처리 및 관리 기술의 실무 역 량을 강화하는 강의입니다. 1) 기본적으로 데이터베이스 시스템에 대하여 기본적인 사항을 알고, 실제 DBMS를 사용하는 역량 개발 2) 데이터 CDC(Change Data Capture)와 ELT(Extract Load Transform) 및 분석 시스템 파일럿 개발 3) 설문조사 시스템(차세대챗봇 강의 설문 시스템) -> CDC 시스템 구축 -> Druid(OLAP시스템) 구축 -> Superset(Data Visualization)"},
  {id:3, title:"시스템 아키텍처 LAB", imgSrc:sys, description:"Web application is one of imperative systems for enterprise business. Therefore, a lot of applications have been developed by web basis and DevOps. The web application is generally developed based on 3 tier architecture and cloud platform. Because 3 tier layer for web application is more stable architecture. And cloud service becomes more popualr and eaiser way to develop information systems. This course focuses on planning, designing, implementing and testing web applicaton based on the 3 tier architecture. Therefore, all students can get more valuable guideline through this course. - 3 tier web applicaton system design and development, CI/CD, Monitoring systems(Obserability)"}
]
const Home = () => {
  return (
    
    <Wrapper>
      <HeaderBar />
      <Landing>
        <LandingFont>
          <h5 style={{textAlign:"left", fontSize: "1.5rem", marginLeft:"1rem"}}>작은 콩에서 한 그루의 나무로</h5>
          <h2>Kakao Bean</h2>
        </LandingFont>
        <MainImg src={mascot} />      
        <Link to="1" spy={true} smooth={true}>
          <AngleDown src={arrow} className="floating"/>
        </Link>
      </Landing>

      <div id="1"></div>
      <div style={{flexDirection:"row"}}>
        <Title style={{marginLeft:"25%", marginTop:"8rem", fontSize:"2rem"}}>우린 이런 과목을 배워요!</Title>
      </div>

            {/* TODO: AOS implementation */}

      {desc.map((props)=>
        <Frame>
          <div>
            <Title key={props.id}>{props.title}</Title>
            <ExImg key={props.id} src={props.imgSrc}/>
          </div>
          <Desc key={props.id}>{props.description}</Desc>
        </Frame>
      )}
      <div style={{alignContent:"center", display:"grid", justifyContent: "space-around", marginTop:"10rem", background:"#ffffff"}}>
        <h3 style={{marginLeft:"10rem", marginTop:"5rem", width:"fit-content", fontWeight:"lighter"}}>Gachon Uni. X Kakao Enterprise</h3>
        <h3 style={{marginLeft:"15rem", marginBottom:"3rem", width:"fit-content", fontWeight:"lighter"}}>SW Academy</h3>
      </div> 
    </Wrapper>
  );
};
export default Home;
