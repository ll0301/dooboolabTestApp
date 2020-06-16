import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';


// 전체 컨테이너 
const Container = styled.View`
  flex-direction: column;
  height: 95%;
  width: 95%;
  justify-content: center;
  align-items: center;
`;

/* 헤더 레이아웃 -
가로줄 , 세로줄, 타이틀로 구성되어있음 */
const HeaderWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  height: 100%;
  width: 100%;
  background-color: #f7f7f7;
  justify-content: center;
  align-items: flex-start;
`;
// 금일과 전일 정보를 표시할 뷰
const HeaderInfoView = styled.View`   
  flex-direction: row; 
  height: 100%;
  width: 30%;
  justify-content: space-around;
  align-items: center;
`;

/* 그래프 레이아웃 -
그래프 표시될 구간, 금일과 전일로 나뉘어있음 */
const ChartWrapper = styled.View`
  flex: 5;
  flex-direction: row;
  height: 100%;
  width: 100%;
  background-color: white;
  justify-content: space-around;
  align-items: flex-start;
`;
// 그래프 바 뷰
const GraphBarView = styled.View`   
  flex-direction: row; 
  height: 100%;
  width: 15%;
  background-color: white;
  justify-content: space-between;
  align-items: flex-end;
`;
// 그래프 바 전일
const GraphBarY = styled.View`    
  width: 45%;
  background-color: #6738e6;
`;
// 그래프 바 금일
const GraphBarT = styled.View`    
  width: 45%;
  background-color: #00a0ec;
`;

/* 바텀 레이아웃 -
가로줄 , 세로줄, 글자로 구성되어있음 */
const BottomWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  height:100%;
  width: 100%;
  background-color: white;
  justify-content: center;
  align-items: center;
`;
// 맨 처음 가로줄 
const BottomVerticalLine = styled.View`
flex-direction: row;
height:5%;
width: 95%;
background-color: #626262;
`;
// 세로줄 구분하는 뷰
const BottomLineWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: flex-start;
`;
// 세로줄
const BottomLine = styled.View`  
  height: 100%;
  width: 0.5%;
  background-color: #626262;
`;
// 글자 구분
const BottomTextWrapper = styled.View`
  flex: 5;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: flex-start;
`;

// 글자
const StyledText = styled.Text`
  font-size: 15px;
  line-height: 20px;
  color: #626262;
`;

interface Props {
  indicatorColor?: string;
  activeOpacity?: number;
  text?: string;
}

function ChartEx2(props: Props): React.ReactElement {
  return (
    <Container>
      
      {/* 헤더 */}
      <HeaderWrapper>
        <HeaderInfoView>
          <StyledText>전일</StyledText>
          <GraphBarY style={{ height: 10 }}/>
        </HeaderInfoView>
        <HeaderInfoView>
          <StyledText>금일</StyledText>
          <GraphBarT style={{ height: 10 }}/>
        </HeaderInfoView>
      </HeaderWrapper>

      <View style={{ marginTop: 1 }} /> 

       {/* 그래프가 들어갈 view */}
      <ChartWrapper>
        {/* 매출 */}
        <GraphBarView>
          <GraphBarY style={{ height: 100 }}/>
          <GraphBarT style={{ height: 40 }}/>
        </GraphBarView>
        {/* 취소 */}
        <GraphBarView>
          <GraphBarY style={{ height: 60 }}/>
          <GraphBarT style={{ height: 150 }}/>
        </GraphBarView>
        {/* 송장 */}
        <GraphBarView>
          <GraphBarY style={{ height: 140 }}/>
          <GraphBarT style={{ height: 110 }}/>
        </GraphBarView>
        {/* 배송 */}
        <GraphBarView>
          <GraphBarY style={{ height: 15 }}/>
          <GraphBarT style={{ height: 100 }}/>
        </GraphBarView>
      </ChartWrapper>       
      
       {/* 바텀 view */}   
      <BottomWrapper>    
        {/* 구분선(가로) */}  
        <BottomVerticalLine/> 
        {/* 구분선(세로) */}     
        <BottomLineWrapper>
          <BottomLine/>                  
          <BottomLine/>
          <BottomLine/>
          <BottomLine/>
        </BottomLineWrapper>
        {/* bar 타이틀 */}
        <BottomTextWrapper>
          <StyledText>매출</StyledText>
          <StyledText>취소</StyledText>
          <StyledText>송장</StyledText>
          <StyledText>배송</StyledText>
        </BottomTextWrapper>
      </BottomWrapper>
    </Container>
  );
}

export default ChartEx2;