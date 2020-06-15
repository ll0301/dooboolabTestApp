import React from 'react';
import styled from 'styled-components/native';
/* SVG란 
Scalable Vector Graphics의 줄임말 
마크업 언어로 벡터 기반의 그래픽을 표현하는 라이브러리이다.
XML의 문법을 그대로 이용할 수 있다. */
import { Svg, G, Rect, Line } from 'react-native-svg';
import * as d3 from 'd3';

const Container = styled.View`
  flex-direction: row;
  height: 95%;
  width: 95%;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

interface Props {
  indicatorColor?: string;
  activeOpacity?: number;
  text?: string;
}

function ChartEx1(props: Props): React.ReactElement {
  return (
    <Container>
      
    </Container>
  );
}

export default ChartEx1;
