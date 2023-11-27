import { getClient } from '#lib/apollo-server';

import CheckAutoReply from './checkAutoReply.graphql';

const useCheckAutoReply = async () => {
  const { data } = await getClient().query({ query: CheckAutoReply, variables: {
    data: {
      action: 'check'
    }
  } });

  return data;
};

export default useCheckAutoReply;
