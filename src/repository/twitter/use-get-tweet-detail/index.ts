'use client'

import { useLazyQuery } from '@apollo/client';

import GetTweetDetail from './getTweetDetail.graphql';
import { QueryResponsegetTweetDetail, QueryInputgetTweetDetail } from './getTweetDetail.gql-types';

const useGetTweetDetail = (id: string) => {
  const [getTweetDetail, { called, loading, data, error }] = useLazyQuery<QueryResponsegetTweetDetail, QueryInputgetTweetDetail>(GetTweetDetail, { variables: { id } });
  
  return { getTweetDetail, called, data, loading, error };
};

export default useGetTweetDetail;
