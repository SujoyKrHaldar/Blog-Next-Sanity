import { Container } from 'react-bootstrap';
import Navbar from './NavComp';

export default function PageLayout({children, className}) {
  return (
    <Container>
      <Navbar />
      <div className={`page-wrapper ${className}`}>
        {children}
      </div>
      <footer className="page-footer">
        <p>copyright 2021 | All right reserved.</p>
      </footer>
    </Container>
  )
}