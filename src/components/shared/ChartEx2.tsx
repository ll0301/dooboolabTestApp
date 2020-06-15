import React from 'react';
import styled from 'styled-components/native';
/* SVG란 
Scalable Vector Graphics의 줄임말 
마크업 언어로 벡터 기반의 그래픽을 표현하는 라이브러리이다.
XML의 문법을 그대로 이용할 수 있다. */
import { Svg, G, Rect, Line } from 'react-native-svg';
import * as d3 from 'd3';

const Container = styled.View`
  flex-direction: column;
  height: 95%;
  width: 95%;
  background-color: white;
  justify-content: center;
  align-items: center;
`;
const ChartWrapper = styled.View`
  flex: 6;
  height: 100%;
  width: 100%;
  background-color: blue;
  justify-content: center;
`;
const BottomWrapper = styled.View`
  flex: 1;
  height:100%;
  width: 100%;
  background-color: red;
  justify-content: center;
`;

interface Props {
  indicatorColor?: string;
  activeOpacity?: number;
  text?: string;
}

function ChartEx2(props: Props): React.ReactElement {
  return (
    <Container>
       {/* 그래프가 들어갈 화면 */}
      <ChartWrapper>

      </ChartWrapper>
       {/* 이름과 그래프 시작선이 들어갈 화면 */}
      <BottomWrapper>

      </BottomWrapper>
    </Container>
  );
}

export default ChartEx2;