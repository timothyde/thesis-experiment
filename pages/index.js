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
    <p>
      <b>Liebe Probandin, lieber Proband,</b>
    </p>
    <p>
      vielen Dank für Ihre Teilnahme an dieser Studie. Wir würden Sie bitten,
      sich die folgenden drei Beispielseiten anzusehen. Es handelt sich um drei
      verschiedene Versionen der selben Seite mit grob dem gleichen Inhalt.
      Auch, wenn Sie keine großen Unterschiede feststellen, nehmen Sie sich
      bitte für jede Seite etwas Zeit. <br />
      <b>
        Sie sollten insgesamt jedoch nicht länger als 5 Minuten mit dieser
        Aufgabe verbringen.
      </b>
    </p>
    <p>
      Im Anschluss werden wir Sie bitten, uns ihre Erfahrungen in einem Gespräch
      mitzuteilen.
    </p>
    <p>
      Mit den blauen Buttons unten gelangen Sie zur jeweiligen Beispielseite.
      Mit einem Klick auf "Zur Startseite" (rechts oben) oder auf "News Blog"
      (links oben) gelangen Sie zurück zu dieser Seite und können die nächste
      Seite auswählen. <br />
      <b>
        Bitte gehen Sie die Seiten der Reihenfolge nach durch, also zuerst
        Beispiel 1, dann Beispiel 2, dann Beispiel 3.
      </b>
    </p>
    <p>Klicken Sie nun auf den Button "Beispiel 1", um zu beginnen.</p>
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
