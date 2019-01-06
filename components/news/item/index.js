import { Button, Card, Divider } from 'antd';
import styled from 'styled-components';

const { Meta } = Card;

const NewsCard = styled(Card)`
  margin: 8px;
`;

const Cover = styled.div`
  background: ${props => (props.imgUrl ? `url(${props.imgUrl})` : '#1890ff')};
  background-size: cover;
  background-position-y: -50px;
  background-position-x: center;
  height: 220px;
  width: 100%;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default ({ data }) => (
  <NewsCard
    style={{ maxWidth: 800 }}
    cover={<Cover imgUrl={data.urlToImage} />}
  >
    <Meta title={data.title} description={data.description} />
    <Divider />
    <Actions>
      <Button>Zum Artikel</Button>
      <h6>Veröffentlicht auf {data.source.name}</h6>
    </Actions>
  </NewsCard>
);
