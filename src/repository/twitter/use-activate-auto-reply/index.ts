'use client'

import { useMutation } from '@apollo/client';

import ActivateAutoReply from './activateAutoReply.graphql';

const useActivateAutoReply = () => {
  const [activateAutoReply, { data, loading, error }] = useMutation(ActivateAutoReply, { variables: { data:{  action: 'activate' } } });

  return { activateAutoReply, data, loading, error };
};

export default useActivateAutoReply;
