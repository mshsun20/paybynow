import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import Cardsdata from '../data/CardData'
// import { loadStripe } from '@stripe/stripe-js'

const Items = () => {
    const [itm, setItm] = useState(Cardsdata)
    
  return (
    <>
        <div className="wbpg">
            <div className="main">
                <div className="hdr">All Items</div>
                <div className="cardgrp">
                    <div className="cards row row-cols-1 row-cols-md-2 g-4">
                        {
                            (itm)&&itm.map((elm, i) => (
                                <div className="cardelm col" key={i}>
                                    <div className="card">
                                        <img src={elm.imgdata} className="card-img-top" alt="Card-Item" />
                                        <div className="card-body">
                                            <NavLink className="card-title" to={`/itemdet/${elm.dish}`}>{elm.dish}</NavLink>
                                            <p className="card-text">{elm.somedata}</p>
                                            <div className="crdvl">
                                                <div className='crdcst'>Price:&nbsp;<span className='prc'>{elm.price}</span><span className='unt'>₹</span></div>
                                                <div className="crdrt">Rating:&nbsp;<span className='rt'>{elm.rating}</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Items