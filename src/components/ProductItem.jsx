import React, {useState} from 'react';
import '../styles/ProductItem.scss';
import icon from "@icons/bt_add_to_cart.svg";

const ProductItem = () => {
	const [cart, setCart] = useState()
	const handleClick = () => {
		setCart("Hello there");
	} 

	return (
		<div className="ProductItem">
			<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
			<div className="product-info">
				<div>
					<p>$120,00</p>
					<p>Bike</p>
				</div>
				<figure onClick={handleClick}>
					<img src={icon} alt="" />
				</figure>
				{cart}
			</div>
		</div>
	);
}

export default ProductItem;