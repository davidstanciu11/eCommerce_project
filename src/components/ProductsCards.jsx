import "./TrendingProducts.style.css";
import { Col, Button } from "reactstrap";
import { Link } from "react-router-dom";

function ProductsCards({ product }) {
	return (
		<Col className='mt-4'>
			<div className='card'>
				<img
					src={product.image}
					alt='products images'
					className='cards_photos'
				/>
				<div className='bg'>
					<h2 className='product_title'>{product.title}</h2>
					<p className='product_desc'>${product.price}</p>
					<Link to={"/produse"}>
						<button type='button' class='btn btn-outline-dark' id="product_button">
							Find Out
						</button>
					</Link>
				</div>
			</div>
		</Col>
	);
}

export default ProductsCards;
