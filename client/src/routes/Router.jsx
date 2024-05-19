import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Items from '../pages/Items'
import Itemdtl from '../pages/Itemdtl'
import Cartdet from '../pages/Cartdet'
import Updtitm from '../pages/Updtitm'
import Successpg from '../pages/Successpg'
import Cancelpg from '../pages/Cancelpg'

const Router = () => {
  return (
    <>
        <Header />
        <Routes>
            <Route path='/' element={<Items />} />
            <Route path='/itemdet/:itmnm' element={<Itemdtl />} />
            <Route path='/cartdet' element={<Cartdet />} />
            <Route path='/edtdet/:itmnm' element={<Updtitm />} />
            <Route path='/success' element={<Successpg />} />
            <Route path='/cancel' element={<Cancelpg />} />
        </Routes>
        <Footer />
    </>
  )
}

export default Router