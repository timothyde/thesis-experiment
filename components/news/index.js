import Item from './item/index';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const News = styled.div`
  width: ${props => (props.ads ? '100%' : 800)};
`;

const Ads = styled.div`
  display: ${props => (props.ads ? 'flex' : 'none')};
  flex-direction: column;
  align-items: flex-start;
  height: calc(100vh - 112px);
  position: fixed;
  top: 88px;
  right: 24px;
  width: 300px;
`;

const Advertisement = styled.div`
  background: red;
  height: 100%;
  width: 100%;
`;

export default ({ ads, news }) => (
  <Container>
    <News ads={ads}>
      <h2>Schlagzeilen</h2>
      {news.map(item => (
        <Item data={item} />
      ))}
    </News>
    <Ads ads={ads}>
      Werbeanzeige
      <Advertisement />
    </Ads>
  </Container>
);
