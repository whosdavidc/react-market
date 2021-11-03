import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem';
import arrowIcon from "@icons/flechita.svg"
import AppContext from '../context/AppContext';
import '../styles/MyOrder.scss';

const MyOrder = () => {
	const {state} = useContext(AppContext); 
	const getTotal = () => {
		const reducer = (accumulator, currentValue) => accumulator + currentValue.price
		const total = state.cart.reduce(reducer, 0);

		return total;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrowIcon} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product => (
					<OrderItem product={product} key={`orderItem-${product.id}`}/>)
				)}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p>${getTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;