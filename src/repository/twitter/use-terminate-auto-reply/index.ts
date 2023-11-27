'use client'

import { useMutation } from '@apollo/client';

import TerminateAutoReply from './terminateAutoReply.graphql';

const useTerminateAutoReply = async () => {
  const [terminateAutoReply, { data, loading, error }] = useMutation(TerminateAutoReply, { variables: { data:{  action: 'activate' } } });
  
  return { terminateAutoReply, data, loading, error };
};

export default useTerminateAutoReply;
