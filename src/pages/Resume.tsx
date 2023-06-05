import styled from '@emotion/styled';

const Title = styled.h1`
  font-size: 1.5rem;
  line-height: 1;
  letter-spacing: -0.004em;
  margin-top: 0px;
  font-weight: 800;
  color: #212529;
  margin-bottom: 1rem;
  word-break: keep-all;
`;

const Info = styled.div`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: #495057;
`;

const Link = styled.a`
  color: blue;
`;

const Img = styled.img`
  height: 200px;
  width: 200px;
`;

const Resume = () => {
  return (
    <div style={{ margin: '5.5rem auto', width: '700px' }}>
      <div style={{ margin: '2.5rem auto', width: '700px' }}>
        <Title>실전코딩 수강</Title>
        <Info>2023.03 ~ 2023.06</Info>
        <Info>React, SprintBoot 등 다양한 실무 관련 지식 수강</Info>
      </div>

      <div style={{ margin: '2.5rem auto', width: '700px' }}>
        <Title>데이터 통신 텀프 제작</Title>
        <Info>2023.03 ~ 2023.06</Info>
        <Info>Frame을 이용하여 통신하는 간단한 HDLC 프로토콜 구현</Info>
        <Link>https://github.com/haijun9/2023_3-1_DataCommunication</Link>
      </div>

      <div style={{ margin: '2.5rem auto', width: '700px' }}>
        <Title>충남대학교 마스코트 차차</Title>
        <Info>은근 귀엽다</Info>
        <Img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTglUMgnStOSOgPjNwKI3Nkhcws34qS5RSR5Ch3malyp_4CFE7I0WRB_sHxzCclRa-WjXM&usqp=CAU"></Img>
      </div>
    </div>
  );
};

export default Resume;
