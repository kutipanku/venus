import { Col, Row, Tag } from 'antd';
import { CloseCircleOutlined, SyncOutlined, ClockCircleOutlined } from '@ant-design/icons';
import List from '#user-interface/components/List';
import useCheckAutoReply from '#repository/twitter/use-check-auto-reply';
import ActivateButton from '#user-interface/views/twitter/ReplyMention/ActivateButton';
import DeactivateButton from '#user-interface/views/twitter/ReplyMention/DeactivateButton';

import Title from '#user-interface/components/Title';

export default async function Page() {
  const data = await useCheckAutoReply();
  console.log('[LOG] ReplyMention data', data);

  return (
    <>
      <Row>
      <Col span={8}>
        <Title text="Status" level={5} style={{ margin: 0 }} />
        {data.getMentionListenerState.status === 'sleep' && <Tag icon={<CloseCircleOutlined />} color="error">
          {data.getMentionListenerState.status}
        </Tag>}

        {data.getMentionListenerState.status !== 'sleep' && <Tag icon={<SyncOutlined spin />} color="processing">
          {data.getMentionListenerState.status}
        </Tag>}
        
      </Col>
      <Col span={8}>
        <Title text="Update Interval" level={5} style={{ margin: 0 }} />
        <Tag icon={<ClockCircleOutlined />} color="default">
          {data.getMentionListenerState.cronInterval / 1000}s
        </Tag>
      </Col>
      <Col span={8}>
        <Title text="Action" level={5} style={{ margin: 0 }} />
        {data.getMentionListenerState.status === 'sleep' ? <ActivateButton /> : <DeactivateButton />}
      </Col>
    </Row>
    <Row>
      <List />
    </Row>
    </>
  )
}
