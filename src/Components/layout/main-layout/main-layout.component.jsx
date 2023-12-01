import { TopNav } from "../top-nav/top-nav.component";
import { Container } from "react-bootstrap";

export function MainLayout({ className, children }) {
	return (
		<div className={className}>
			<TopNav />
			<Container>
				<div className="my-4">{children}</div>
			</Container>
		</div>
	);
}

export default MainLayout;
