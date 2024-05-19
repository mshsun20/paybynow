import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../style/Cart.css'
import axios from 'axios'
import { loadStripe } from '@stripe/stripe-js'
import { useSelector, useDispatch } from 'react-redux'
import { rmvItm, dltAllItm } from '../rtk/slices/CartSlice'
import { RiEditBoxFill } from "react-icons/ri";
import { IoIosRemoveCircle } from "react-icons/io"
import { FaCartArrowDown } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md"


const Cartdet = () => {
    const dispatch = useDispatch()
    const cartState = useSelector((state) => state.prstreduc.carts)
    const [netItm, setNetItm] = useState(0)
    const [netCost, setNetCost] = useState(0)
    let qty = 0, cst = 0

    const getDta = () => {
        for (let i=0; i<cartState.length; i++) {
            qty += parseInt(cartState[i].quantity)
            cst += parseInt(cartState[i].totalCost)
        }
        setNetItm(qty/2)
        setNetCost(cst/2)
    }

    useEffect(() => {
      getDta()
    }, [])
    
    const rmvFrmCart = (e) => {
        dispatch(rmvItm(e))
    }

    const makePayment = async () => {
        try {
            const stripe = await loadStripe("pk_test_51NkrY2SIWidzutwnkbgI76yefQmQMsy3WSIT8JlcE83b67t0yb6YKAaUJEK32Nvz6MEBJAMhp9rDCJMlrEgkwMYc00INqHkirr")

            const res = await axios.post("http://localhost:5500/api/create-checkout-session", {products:cartState&&cartState})
            const dta = await res.data
            const result = stripe.redirectToCheckout({
                sessionId:dta.id
            })

            if(result.error){
                console.log(result.error)
            }
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <>
        <div className="wbpg">
            <div className="main">
                <div className="cartcnt">
                    <div className="crthdr">Your Cart Details</div>
                    <div className="crtdtl">
                        <div className="crttbl">
                            {
                                cartState&&(cartState.length>0) ? (
                                    <table className='crt table table-striped table-hover'>
                                        <thead>
                                            <tr>
                                                <th>Sl. No.</th>
                                                <th>Item Details</th>
                                                <th>Cost of Each</th>
                                                <th>Quatity</th>
                                                <th>Total Cost</th>
                                                <th>Edit</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartState.map((elm, i) => (
                                                    <tr key={i}>
                                                        <td>{i+1}</td>
                                                        <td>{elm.item&&(
                                                            <div className='itmdtl'>
                                                                <div className="itmimg">
                                                                    <img src={elm.item.imgdata} alt="Item_Image" />
                                                                </div>
                                                                <div className="itmcntnt">
                                                                    <div className="itmnm">{elm.item.dish}</div>
                                                                    <div className="itminfo">{elm.item.somedata}</div>
                                                                    <div className="itmratng"><span className='lbl'>Rating:</span>&nbsp;<span className='vlu'>{elm.item.rating}</span></div>
                                                                </div>
                                                            </div>
                                                        )}</td>
                                                        <td>{elm.item&&elm.item.price}</td>
                                                        <td>{elm.quantity}</td>
                                                        <td style={{fontWeight:'bold'}}>{elm.totalCost}</td>
                                                        <td><NavLink to={`/edtdet/${elm.item&&elm.item.dish}`}><RiEditBoxFill className='edtbtn' /></NavLink></td>
                                                        <td><button onClick={() => rmvFrmCart(elm.item&&elm.item.id)}><IoIosRemoveCircle className='rmvbtn' /></button></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                ) : null
                            }
                        </div>
                        <div className="crtinfo">
                            <div className="crtsumry">
                                <div className="frmgrp">
                                    <label htmlFor="netamt">Net Amount</label>
                                    <input type="text" name="netamt" id="netamt" value={netItm&&netItm} readOnly disabled />
                                </div>
                                <div className="frmgrp">
                                    <label htmlFor="netcst">Net Cost</label>
                                    <input type="text" name="netcst" id="netcst" value={netCost&&netCost} readOnly disabled />
                                </div>
                            </div>
                            <div className="crtbtn">
                                <button className='pybtn' onClick={makePayment}><FaCartArrowDown className='payr' /></button>
                                <button className='dltbtn' onClick={() => dispatch(dltAllItm())}><MdDeleteForever className='dltr' /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cartdet