import { Nav } from 'react-bootstrap';

export default function nav() {
	return (
		<>
			<Nav className="col-sm-12 d-none d-sm-block sidebar">
			<div className="sidebar-sticky"><img style={{width:"100%"}}src="/images/logo.png" /></div>
      </Nav>
		</>
	);
}