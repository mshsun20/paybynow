import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Items from '../pages/Items'
import Itemdtl from '../pages/Itemdtl'
import Cartdet from '../pages/Cartdet'
import Successpg from '../pages/Successpg'
import Cancelpg from '../pages/Cancelpg'

const Router = () => {
  return (
    <>
        <Header />
        <Routes>
            <Route path='/' element={<Items />} />
            <Route path='/itemdet/:itmnm' element={<Itemdtl />} />
            <Route path='/cartdet/:id' element={<Cartdet />} />
            <Route path='/success' element={<Successpg />} />
            <Route path='/cancel' element={<Cancelpg />} />
        </Routes>
        <Footer />
    </>
  )
}

export default Router