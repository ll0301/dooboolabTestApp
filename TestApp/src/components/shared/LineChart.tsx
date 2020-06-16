import React from 'react';
import styled from 'styled-components/native';
// 사용안함
const Container = styled.View`
  height: 100%;
  width: 100%;  
  flex-direction: row;  
  background-color: #f7f7f7;
  justify-content: space-between;
  align-items: flex-end;
`;

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
