import Link from "next/link";
import { useRouter } from "next/router"

export default function Header() {

	const router = useRouter()

	const pathname = router.pathname;

	function isActive(rotta) {
		if (rotta != "/" && pathname.startsWith(rotta)) {
			return "active"
		} else if (rotta === pathname) {
			return "active"
		}
		return ""
	}

	return <div className="componente">
		<nav>
			<Link href="/" className={isActive("/")}>Home</Link>
			<Link href="/products" className={isActive("/products")}>Prodotti</Link>
			<Link href="/about" className={isActive("/about")}>Chi siamo</Link>
		</nav>
	</div>
}