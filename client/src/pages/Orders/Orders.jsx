import React from 'react'
import './style.scss'
const Orders = () => {

  return (
    <div className='orders'>
      <div className="orders_wrapper">
        <h2 className="my_orders_header">My orders</h2>
        {/*  */}

        <div className="my_orders">
          <b style={{ fontSize: '1.4rem' }}>1.</b>
          <div className="order_list">

            <div className="orders_q">
              <div className="img">
                <img src="https://m.media-amazon.com/images/I/51FBkjkNmES._SY450_.jpg" alt="" />
              </div>
              <div className="order_details">
                <div className="product_name">Product name should be here</div>
              </div>
            </div>
            <div className="orders_q">
              <div className="img">
                <img src="https://m.media-amazon.com/images/I/51FBkjkNmES._SY450_.jpg" alt="" />
              </div>
              <div className="order_details">
                <div className="product_name">Product name should be here</div>
              </div>
            </div>

          </div>
          <div className="ctc_orders">
            <button className="cancel_order">Cancel order</button>
            <button className="cancel_order view_order">View order</button>
          </div>
        </div>
        <hr />

        {/*  */}

        <div className="my_orders">
          <b style={{ fontSize: '1.4rem' }}>1.</b>
          <div className="order_list">

            <div className="orders_q">
              <div className="img">
                <img src="https://m.media-amazon.com/images/I/51FBkjkNmES._SY450_.jpg" alt="" />
              </div>
              <div className="order_details">
                <div className="product_name">Product name should be here</div>
              </div>
            </div>
            <div className="orders_q">
              <div className="img">
                <img src="https://m.media-amazon.com/images/I/51FBkjkNmES._SY450_.jpg" alt="" />
              </div>
              <div className="order_details">
                <div className="product_name">Product name should be here</div>
              </div>
            </div>

          </div>
          <div className="ctc_orders">
            <button className="cancel_order">Cancel order</button>
            <button className="cancel_order view_order">View order</button>
          </div>
        </div>
        <hr />

        {/*  */}
      </div>
    </div>
  )
}

export default Orders