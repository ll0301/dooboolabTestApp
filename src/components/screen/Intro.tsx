import React from 'react';
import { RootStackNavigationProps } from '../navigation/RootStackNavigator';
import styled from 'styled-components/native';
import ChartEx1 from '../shared/ChartEx1';
import ChartEx2 from '../shared/ChartEx2';

/* style 컴포넌트를 활용하여 View의 속성을 조금 더 편리하게 설정할 수 있다. */
// 현재 스크린의 전체화면
const Container = styled.View`
  flex: 1;  
  flex-direction: column;
  justify-content: center;
  align-items: center;  
`;
// 1번 차트가 표시 될 View
const ChartWrapper1 = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
// 2번 차트가 표시 될 View
const ChartWrapper2 = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;


interface Props {
  navigation: RootStackNavigationProps<'Intro'>;
}

/* 해당 함수를 통해 뷰가 표시된다. */
function Intro(props: Props): React.ReactElement {

  return (  
    // intro 전체 화면 
    <Container>

      {/* 1번 그래프 */}
      <ChartWrapper1>    
        <ChartEx1/>
      </ChartWrapper1>

      {/* 2번 그래프 */}
      <ChartWrapper2>
        <ChartEx2/>
      </ChartWrapper2>     

    </Container>
  );
}

export default Intro;
