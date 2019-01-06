import { Breadcrumb, Button } from 'antd';
import styled from 'styled-components';

import Container from '../components/layout/container/index';

const PageButton = styled(Button)`
  margin: 8px;
`;

export default () => (
  <Container>
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>Einführung</Breadcrumb.Item>
    </Breadcrumb>
    <h2>Einführung</h2>
    <a href="http://localhost:3000/1">
      <PageButton type="primary">Beispiel 1</PageButton>
    </a>
    <a href="http://localhost:3000/2">
      <PageButton type="primary">Beispiel 2</PageButton>
    </a>
    <a href="http://localhost:3000/3">
      <PageButton type="primary">Beispiel 3</PageButton>
    </a>
  </Container>
);
