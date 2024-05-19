import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Cardsdata from '../data/CardData'
import { useSelector, useDispatch } from 'react-redux'
import { loadCnt, cntrInc, cntrDec } from '../rtk/slices/UpdtCntSlice'
import { edtItm } from '../rtk/slices/CartSlice'

const Updtitm = () => {
    const {itmnm} = useParams()
    const [itm, setItm] = useState()
    const itmState = useSelector((state) => state.prstreduc.updtcnts.value)
    const cartState = useSelector((state) => state.prstreduc.carts)
    const dispatch = useDispatch()

    const getDta = () => {
        Cardsdata.forEach((elm, i) => {
            if (String(elm.dish) === String(itmnm)) {
                setItm(elm)
            }
        })
    }
    const getCrt = () => {
        for (let i=0; i<cartState.length; i++) {
            if (String(itmnm) === String(cartState[i].item.dish)) {
                // setCrt(cartState[i].quantity)
                dispatch(loadCnt(cartState[i].quantity))
            }
        }
    }
    useEffect(() => {
        getCrt()
        getDta()
        // console.log(itmState)
    }, [])

    const edtCrt = async (e) => {
        e.preventDefault()
        dispatch(edtItm({item:itm, quantity:itmState, totalCost:(parseInt(itm.price)*parseInt(itmState))}))
    }

  return (
    <>
        <div className="wbpg">
            <div className="main">
                <div className="hdr">Item Details</div>
                <div className="cardgrp">
                    <div className="carddtls row row-cols-1 row-cols-md-2 g-4">
                        {
                            (itm)&&(
                                <div className="cardelm col">
                                    <div className="card">
                                        <img src={itm.imgdata} className="card-img-top" alt="Card-Item" />
                                        <div className="card-body">
                                            <h3 className="card-title">{itm.dish}</h3>
                                            <p className="card-text">{itm.somedata}</p>
                                            <div className="crdvl">
                                                <div className='crdcst'>Price:&nbsp;<span className='prc'>{itm.price}</span><span className='unt'>₹</span></div>
                                                <div className="crdrt">Rating:&nbsp;<span className='rt'>{itm.rating}</span></div>
                                            </div>
                                            <div className="crdact">
                                                <button onClick={() => dispatch(cntrDec())}>-</button>
                                                <input type="text" name="" id="" value={itmState&&itmState} readOnly />
                                                <button onClick={() => dispatch(cntrInc())}>+</button>
                                            </div>
                                            <div className="crdbtn">
                                              <button onClick={edtCrt}>Update Cart</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Updtitm