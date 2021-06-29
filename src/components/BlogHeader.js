import Image from "next/image"   // use Image instead of img, we need to create a config and specify a domain {cdn.sanity.io}

export default function BlogHeader({title, subtitle, coverImage, date, author}) {
    return (
      <div className="blog-detail-header">
        {/* <p className="lead mb-0">
          <img
            src={author?.profilePic}
            className="rounded-circle mr-3"
            height={50}
            width={50}
            alt="avatar"/>
          {author?.name}
          {', '} {date}
        </p> */}

         {/* Check if contains cover image */}
        {/* <img
            className="img-fluid rounded" style={{width:"100%", height:"auto", marginBottom:"2rem"}}
            src={coverImage} alt="TODO: provide alt"/> */}

        <h1 className="font-weight-bold blog-detail-header-title mb-0">{title}</h1>
        <h2 className="blog-detail-header-subtitle mb-3">{subtitle}</h2>
         
          <style jsx>{`
            .blog-detail-header {
              position: relative;
              width: 100%;
              height: 660px;
              background: url(${coverImage});
              background-size:cover ;
              z-index: 1;
              display: flex;
              color: white;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              margin-bottom:5rem
            }
            /* img.img-fluid.rounded {
              position: absolute;
              z-index: -1;
            } */
          `}</style>
      </div>
    )
  }