import { Card } from 'react-bootstrap';
import { urlFor } from "../../lib/api"
import Link from "next/link"

const CardListItem = ({title,subtitle,date,author,slug}) => {
  return (
    <Card className={`fj-card fj-card-list`}>
      <div className="card-body-wrapper">
        <Card.Header
          className="d-flex flex-row">
          <img
            src={urlFor(author?.profilePic).height(80).url() || "https://via.placeholder.com/150"}  // if we set required validation in the author field then no need to write author?.<property>
            className="rounded-circle mr-3"
            height="50px"
            width="50px"
            alt="avatar"/>
            <div>
              <Card.Title className="font-weight-bold mb-1">{author?.name || 'No name'}</Card.Title>
              <Card.Text className="card-date">{date}</Card.Text>
            </div>
        </Card.Header>
        <Card.Body>
          <Card.Title className="card-main-title">{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
        </Card.Body>
      </div>
      <Link as={`blogs/${slug}`} href="/blogs/[slug]">
        <a className="card-button">Read More</a>  
      </Link>
    </Card>
  )
}

export default CardListItem;