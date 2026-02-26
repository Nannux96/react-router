import Link from "next/link";

export default function Card({ product, showDetails = false }) {

	return <div className="card">
		<h2>{product.title}</h2>
		<img className="card-image" src={product.image} />
		<ul className="card-information-list">
			<li>price: {product.price}</li>
			<li>category: {product.category}</li>
			{showDetails && <li>description: {product.description}</li> }
			{/* */}
			{/* {Array.isArray(product.awards) && <li>awards: <ol>
				{ product.awards.map((award, i) => <li key={`award_${i}`}>{award}</li>)}
			</ol>
			</li>} */}
		</ul>
			{!showDetails && <Link href={`/products/${product.id}`}>Vai ai dettagli</Link>}
	</div>
}