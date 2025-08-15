import React from 'react'
import Page from './page'

function layout({children}:any) {
  return (
    
    <div>
      <Page />
      <div>{children}</div>
    </div>
  )
}

export default layout