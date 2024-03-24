import React from 'react'
import dynamic from 'next/dynamic'

function Main() {
  const Heading = dynamic(() => import('../Navbar/Heading'));
  const CollectionList = dynamic(() => import('../Navbar/CollectionList'));
  return (
    <div>
      <Heading />
      <CollectionList />
    </div>
  )
}

export default Main
