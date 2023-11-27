import { Button, Col, Input, Row } from 'antd';

import Title from '#user-interface/components/Title';
import InputTextArea from '#user-interface/components/InputTextArea';

export default async function Page() {
  return (
    <>
      <Title text="Tweet URL" level={5} />
      <Row gutter={[8, 0]}>
        <Col span={20}>
          <Input />
        </Col>
        <Col span={4}>
          <Button block type="primary">Check Tweet</Button>
        </Col>
      </Row>
      <Title text="Add More Context" level={5} />
      <Row>
        <InputTextArea rows={4} />
      </Row>
      <Row gutter={[8, 0]}>
        <Col span={12}>
          <Button block ghost type="primary">Generate Response</Button>
        </Col>
        <Col span={12}>
          <Button block type="primary">Send Tweet</Button>
        </Col>
      </Row>
    </>
  )
}
