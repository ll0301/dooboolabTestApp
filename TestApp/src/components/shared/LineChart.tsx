import React from 'react';
import styled from 'styled-components/native';
import { View, Dimensions } from 'react-native';

/* SVG란 
Scalable Vector Graphics의 줄임말 
마크업 언어로 벡터 기반의 그래픽을 표현하는 라이브러리이다.
XML의 문법을 그대로 이용할 수 있다. */
import { Svg, G, Rect, Line } from 'react-native-svg';

/* 데이터 시각화 프레임워크
SVG를 통하여 다양한 화면 해상도에서 깨짐없는 Visualizing이 가능하다. */
import * as d3 from 'd3';

const Container = styled.View`
  height: 100%;
  width: 100%;  
  flex-direction: row;  
  background-color: #f7f7f7;
  justify-content: space-between;
  align-items: flex-end;
`;
const GRAPH_MARGIN = 1
const GRAPH_BAR_WIDTH = 10
const colors = {
  axis: '#E4E4E4',
  bars: '#6738e6'
}
const data = [
  { label: '6day', value: 400 },
  { label: '5day', value: 500 },
  { label: '4day', value: 400 },
  { label: '3day', value: 200 },
  { label: '2day', value: 400 },
  { label: '1day', value: 300},
  { label: 'today', value: 200 }
]

// Dimensions
const SVGHeight = Dimensions.get('screen').height * 0.2
const SVGWidth = Dimensions.get('screen').width
const graphHeight = SVGHeight - 2 * GRAPH_MARGIN
const graphWidth = SVGWidth - 2 * GRAPH_MARGIN


interface Props {
  indicatorColor?: string;
  activeOpacity?: number;
  text?: string;
}

function LineChart(props : Props): React.ReactElement{

  return(
    <Container>
      
    </Container>
  );
}

export default LineChart;
