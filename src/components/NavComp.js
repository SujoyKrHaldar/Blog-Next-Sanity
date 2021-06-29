import { Navbar, Nav} from 'react-bootstrap'
import Link from "next/link"

export default function NavComp() {
    return (
      <Navbar className="fj-navbar fj-nav-base" bg="transparent" expand="lg" >
          <Navbar.Brand className="fj-navbar-brand">
            <Link href="/"><a>Sujoy</a></Link>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link
                className="fj-navbar-item fj-navbar-link"
                href='/' as="/">Home
              </Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    )
}
