import React, { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

function Dialog(props: IProps) {
  const {children} = props

  return (
    <>
      <div className={'bg-blue-200'}>
        {children}
      </div>
    </>
  )
}

export default Dialog
