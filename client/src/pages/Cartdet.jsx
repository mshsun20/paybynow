import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Cardsdata from '../data/CardData'
import { loadStripe } from '@stripe/stripe-js'

const Cartdet = () => {
    const { id } = useParams()
    const [itm, setItm] = useState()

    const getDta = () => {
        Cardsdata.forEach((elm, i) => {
            if (String(elm.id) === String(id)) {
                setItm(elm)
            }
        })
    }
    useEffect(() => {
      // console.log(id)
        getDta()
    }, [])

    const makePayment = async () => {
        try {
            const stripe = await loadStripe("pk_test_51NkrY2SIWidzutwnkbgI76yefQmQMsy3WSIT8JlcE83b67t0yb6YKAaUJEK32Nvz6MEBJAMhp9rDCJMlrEgkwMYc00INqHkirr")
            // console.log(itm)

            const res = await axios.post("http://localhost:5500/api/create-checkout-session", {product:itm&&itm})
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
                <div className="btn">
                    <button onClick={makePayment}>Finalize</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cartdet