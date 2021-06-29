import { Card } from 'react-bootstrap';
import Link from "next/link"
import { urlFor } from "../../lib/api"

const CardItem = ({title,subtitle,date,coverImage,author,slug}) => {
  return (
    <Card className={`fj-card`}>
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
        <div className="view overlay">
          <Card.Img
            src={urlFor(coverImage).crop("center").fit("max").height(800).url()}
            alt="Card image cap"
          />

          {/* crop("center").fit("max") ----> if we crop image and dont want to show the
             croped part in list section in home page then we should use theat code, it wont affect the main blog page*/}
        </div>
        <Card.Body>
          <Card.Title className="card-main-title">{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
        </Card.Body>
      </div>

      {/*imp regurding linking of pages*/}
      <Link as={`/blogs/${slug}`} href="/blogs/[slug]">
        <a className="card-button">Read More</a>  
      </Link>
    </Card>
  )
}

export default CardItem;