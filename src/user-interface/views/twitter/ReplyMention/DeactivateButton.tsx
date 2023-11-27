'use client'

import PopconfirmButton from '#user-interface/components/PopconfirmButton';

export default function Page() {
  return (
    <PopconfirmButton
      isDanger
      buttonText="Deactivate"
      title="Deactivate auto reply"
      description="Do you want to deactivate the auto reply on any mentions?"
      onConfirm={console.log}
      onCancel={console.log}
    />
  )
}
