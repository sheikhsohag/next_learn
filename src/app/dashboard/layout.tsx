import React from 'react'
import Navbar from '@/app/_components/navbar'
function layout({children}:any) {
  return (
    
    <div>
      <Navbar/>
      <div>{children}</div>
    </div>
  )
}

export default layout