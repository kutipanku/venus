'use client'

import { List } from 'antd';
import Text from '#user-interface/components/Text';

interface Props {
  listItems?: string[];
}

const TitleComponent = (props: Props) => {
  const { listItems = [], ...rest } = props;

  return (
    <List
      header={<div>Log History</div>}
      bordered
      dataSource={listItems}
      style={{ width: '100%', marginTop: '20px' }}
      renderItem={(item) => (
        <List.Item>
          <Text mark>[ITEM]</Text> {item}
        </List.Item>
      )}
    />
  );
};

export default TitleComponent;
