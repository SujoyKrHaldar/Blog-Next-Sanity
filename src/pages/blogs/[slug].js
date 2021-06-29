import PageLayout from "../../components/PageLayout"
import { getBlogBySlug, getAllBlogs, urlFor } from "../../../lib/api"
import BlogHeader from '../../components/BlogHeader';
import { Row, Col } from 'react-bootstrap'
import Head from "next/head"
import BlockContent from "@sanity/block-content-to-react"


// all sets but if we want to use cropping the blog images we need a package name < npm install --save @sanity/image-url >
// it helps to handel urls also.

export default function BlogDetails({blog}) {
    //console.log(blog)
    
    // it is used for particularly image styling and image caption etc.
    const serializers={
        
        types:{
            // block:({node})=>{
            //     console.log(node)
                
               
            //         if(node.style == "normal"){
            //            return <p style={{fontSize:"1.15rem", color:"#4c4c4c"}}>{node.children[0].text}</p> 
            //         }
            
                   
            //         else if(node.style == "h1"){
            //             return <h1 style={{fontSize:"3rem"}}><strong>{node.children[0].text}</strong></h1>
            //         }
            //         else 
            //         return <h2><strong>{node.children[0].text}</strong></h2>
                
            // },
            
            image:({node})=>{
                //console.log(node)
                return(
                   <div className="blog-image" style={{margin:"3rem 0"}}>
                        <img loading="lazy" 
                            style={{width:"100%",objectFit:"cover"}} 
                            src={urlFor(node).url()} 
                            alt={node.alt}
                        />
                        <p className="image-alt" style={{textAlign:"left"}}>{node.caption}</p>
                   </div>
                )
            }
        }
        
    }

    return (
        <>
        <Head>
            <title>{blog.title}</title>
        </Head>

      
        <PageLayout className="blog-detail-page">

        <BlogHeader
                title={blog.title}
                subtitle={blog.subtitle}
                coverImage={urlFor(blog.coverImage).url()}
                author={blog.author}
                date={new Date(blog.date).toLocaleDateString('en-Us')}
        />
        <Row>
            <Col md={{ span: 10, offset: 1 }}>
            
            {/* Blog Content Here */}
           
            <BlockContent 
                blocks={blog.content}
                serializers={serializers}  
            />
            <hr/>
            </Col>
        </Row>
        </PageLayout>
        </>
    )
}

// fetching datas---->>>

export async function getStaticProps({params}){

    const blog = await getBlogBySlug(params.slug)
    return{
        props:{blog}
    }
}

export async function getStaticPaths(){

    const blogs = await getAllBlogs()
    const paths = blogs?.map(b=>{
        return {
            params:{slug: b.slug}
        }
    })
    return{
        paths,
        fallback: false
    }
}


// export async function getServerSideProps({params}){

//     const blog = await getBlogBySlug(params.slug)
//     return{
//         props:{blog}
//     }
// }