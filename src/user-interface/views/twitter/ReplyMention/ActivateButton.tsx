'use client'

import PopconfirmButton from '#user-interface/components/PopconfirmButton';
import useActivateAutoReply from '@/repository/twitter/use-activate-auto-reply';

export default function Page() {
  const { activateAutoReply } = useActivateAutoReply();
  const onConfirm = (e?: React.MouseEvent<HTMLElement>) => {
    activateAutoReply();
  }

  return (
    <PopconfirmButton
      buttonText="Activate"
      title="Activate auto reply"
      description="Do you want to activate the auto reply on any mentions?"
      onConfirm={onConfirm}
      onCancel={console.log}
    />
  )
}
