import { useEffect, useState } from "react";
import axios from "axios";
import Card from "@/components/Card"


export default function ProductList({products}) {

	

	return <div className="componente">
		<div className="card-list">
		{products.map(product => <Card key={`product_${product.id}`} product={product}/>)}
		</div>
	</div>
}