# dooboolab
>블로그 : <https://jroomstudio.tistory.com/>    
>Email : <jhhh171224@gmail.com>   
>dooboo-cli : <https://github.com/dooboolab/dooboo-cli>   
>web-expo : <https://docs.expo.io/>   
>dooboo-cli를 이용하여 expo 프로젝트 생성하여 expo web으로 개발    
><img src="./Image/dooboolab-web-expo.gif"></img>
* * *
### 화면 
  > #### 완성
  > <img src="./Image/testapp1.jpg" width="30%" height="25%"></img>
  > <img src="./Image/testapp2.jpg" width="30%" height="25%"></img>
  > <img src="./Image/testapp3.jpg" width="30%" height="25%"></img>   
* * *
  > #### 1번 그래프
  > <img src="./Image/chart1.JPG" width="30%" height="25%"></img>
    import React from 'react';
import styled from 'styled-components/native';
import { View, Dimensions } from 'react-native';

/* SVG란 
Scalable Vector Graphics의 줄임말 
마크업 언어로 벡터 기반의 그래픽을 표현하는 라이브러리이다.
XML의 문법을 그대로 이용할 수 있다. */
import { Svg, G, Line, Text, Circle } from 'react-native-svg';

/* 데이터 시각화 프레임워크
SVG를 통하여 다양한 화면 해상도에서 깨짐없는 Visualizing이 가능하다. */
import * as d3 from 'd3';

// 전체 컨테이너
const Container = styled.View`
  flex-direction: column;
  height: 95%;
  width: 95%;
  justify-content: center;
  align-items: flex-end;
`;
/* 헤더 레이아웃 -
가로줄 , 세로줄, 타이틀로 구성되어있음 */
const HeaderWrapper = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  background-color: #f7f7f7;
  justify-content: center;
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
  align-items: flex-end;
`;

/* 바텀 레이아웃 -
가로줄 , 세로줄, 글자로 구성되어있음 */
const BottomWrapper = styled.View`
  flex: 1;
  flex-direction: column;
  height: 100%;
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

const GRAPH_MARGIN = 1
const data = [
  { label: 1, value: 400 },
  { label: 2, value: 500 },
  { label: 3, value: 400 },
  { label: 4, value: 200 },
  { label: 5, value: 400 },
  { label: 6, value: 300 },
  { label: 7, value: 600 }
]
// Circle의 x좌표
const circleVectorX = new Array
// Circle의 y좌표
const circleVectorY = new Array

// Dimensions
const SVGHeight = Dimensions.get('screen').height * 0.2
const SVGWidth = Dimensions.get('screen').width * 1.1
const graphHeight = SVGHeight - 2 * GRAPH_MARGIN
const graphWidth = SVGWidth - 2 * GRAPH_MARGIN

// X scale point
const xDomain = data.map(item => item.label)
const xRange = [0, graphWidth]
const x = d3.scalePoint()
  .domain(xDomain)
  .range(xRange)
  .padding(1)

// Y scale linear
const yDomain = [0, d3.max(data, d => d.value)]
const yRange = [0, graphHeight]
const y = d3.scaleLinear()
  .domain(yDomain)
  .range(yRange)

interface Props {
  indicatorColor?: string;
  activeOpacity?: number;
  text?: string;  
}

function ChartEx1(props: Props): React.ReactElement {
  // d3 라이브러리를 활용한 circle의 x,y 좌표 추출하여 저장 
  data.map(
    item => circleVectorX.push(x(item.label))    
  );
  data.map(
    item => circleVectorY.push(y(item.value)*-0.7)
  );
  // 마지막에 X,Y 값을 동일하게 추가하면서 자기 자신을 지목하여 끝나도록 함 
  circleVectorX.push(circleVectorX[6]);
  circleVectorY.push(circleVectorY[6]);
  //console.log(circleVectorX);
  //console.log(circleVectorY);
  
  return (    
    <Container>

       {/* 헤더 */}
      <HeaderWrapper>
        <StyledText>장기지연</StyledText>
      </HeaderWrapper>

      <View style={{ marginTop: 1 }} /> 

      {/* 그래프가 들어갈 view */}
      <ChartWrapper>
      <Svg width={SVGWidth} height={SVGHeight}>
        <G y={graphHeight}>                                                         
          {/* Text -> 지연된 장기 수 */}
          {data.map(item => (
            <Text                        
            x={x(item.label)}
            y={y(item.value) * -0.9}
            fill="#00a0ec">{item.value/100}</Text>
          ))}         
          {/* Line */} 
          {data.map(item => (
            <Line 
            x1={x(item.label)} 
            y1={y(item.value) * -0.7} 
            x2={circleVectorX[item.label]} y2={circleVectorY[item.label]} stroke="#00a0ec" strokeWidth="2" />            
          ))} 
          {/* Circle */}
          {data.map(item => (            
            <Circle              
            cx={x(item.label)}
            cy={y(item.value) * -0.7}
            r={4}
            fill="white" stroke="#00a0ec" strokeWidth="3"                            
          />
          ))}                  
        </G>
      </Svg>
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
          <BottomLine/>
          <BottomLine/>
          <BottomLine/>
        </BottomLineWrapper>
        {/* bar 타이틀 */}
        <BottomTextWrapper>
          <StyledText>6일차</StyledText>
          <StyledText>5일차</StyledText>
          <StyledText>4일차</StyledText>
          <StyledText>3일차</StyledText>
          <StyledText>2일차</StyledText>
          <StyledText>1일차</StyledText>
          <StyledText>금일</StyledText>
        </BottomTextWrapper>
      </BottomWrapper>
    </Container>
  );
}

export default ChartEx1;
* * *
  > #### 2번 그래프
  > <img src="./Image/chart2.JPG" width="30%" height="25%"></img>
* * *
