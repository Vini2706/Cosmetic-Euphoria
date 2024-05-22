import React from 'react'
import Heroine from '../Components/Heroine/Heroine'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/New Collections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'
import Footer from '../Components/Footer/Footer'

const Shop = () => {
  return (
    <div>
      <Heroine/>
      <Popular/>
      <Offers/>
      <NewCollections/>
      <NewsLetter/>
    </div>
  )
}

export default Shop
