import React from 'react';
import styled from 'styled-components/native';
import { View, Dimensions } from 'react-native';

/* SVG란 
Scalable Vector Graphics의 줄임말 
마크업 언어로 벡터 기반의 그래픽을 표현하는 라이브러리이다.
XML의 문법을 그대로 이용할 수 있다. */
import { Svg, G, Rect, Text, Circle } from 'react-native-svg';

/* 데이터 시각화 프레임워크
SVG를 통하여 다양한 화면 해상도에서 깨짐없는 Visualizing이 가능하다. */
import * as d3 from 'd3';
import { line, curveMonotoneX } from 'd3-shape';
import { extent } from 'd3-array';
import { transition } from 'd3-transition';
import { scaleLinear, scaleBand } from 'd3-scale';

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
const GRAPH_BAR_WIDTH = 1
const colors = {
  axis: '#E4E4E4',
  bars: '#6738e6'
}
const data = [
  { label: '6일차', value: 400 },
  { label: '5일차', value: 500 },
  { label: '4일차', value: 400 },
  { label: '3일차', value: 200 },
  { label: '2일차', value: 400 },
  { label: '1일차', value: 300 },
  { label: '금일', value: 200 }
]

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
          {/* Text */}
          {data.map(item => (
            <Text                        
            x={x(item.label)-3}
            y={y(item.value) * -0.9}
            fill="#00a0ec">{item.value/100}</Text>
          ))}
          {/* circle */}
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
