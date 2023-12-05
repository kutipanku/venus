'use client'

import { useRef } from 'react';
import { Button, Col, Input, Row, Form, Card, Image, Avatar, Divider } from 'antd';

import Title from '#user-interface/components/Title';
import InputTextArea from '#user-interface/components/InputTextArea';
import useGetTweetDetail from '@/repository/twitter/use-get-tweet-detail';

const { Item } = Form;
const { Meta } = Card;

export default function Page() {
  const inputRefs = useRef({ id: '', extraContext: '' });
  const { getTweetDetail, called, data, loading } = useGetTweetDetail('');

  const handleCheckTweet = ({ id }: { id: string }) => {
    inputRefs.current.id = id;
    getTweetDetail({ variables: { id } });
  }

  return (
    <>
      <Title text="Tweet URL" level={5} />
      <Form
          name="id"
          autoComplete="off"
          onFinish={handleCheckTweet}
        >
        <Row gutter={[8, 0]}>
          <Col span={20}>
            <Item name="id" rules={[{ required: true, message: 'Please input tweet id!' }]}>
              <Input />
            </Item>
          </Col>
          <Col span={4}>
            <Item>
              <Button block type="primary" htmlType="submit">Check Tweet</Button>
            </Item>
          </Col>
        </Row>
      </Form>
      {loading && <>Loading...</>}
      {called && !loading &&
          <Card>
            <Row>
              <Meta
                avatar={<Avatar src={data?.getTweetDetail.profile?.image} />}
                title={data?.getTweetDetail.profile?.name}
                description={'@' + data?.getTweetDetail.profile?.id + ' | ' + data?.getTweetDetail.profile?.description}
              />
              <Divider />
              {data?.getTweetDetail?.content}
            </Row>
            <Row>
              {data?.getTweetDetail?.media?.map(mediaUrl => <Image key={mediaUrl} src={mediaUrl} width={200} alt={mediaUrl} />)}
            </Row>
          </Card>}
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
