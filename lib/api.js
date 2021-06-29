import client from "./sanity"
import imageUrlBuilder from "@sanity/image-url";

const blogFields = 
  `'id':_id,
    title,
    subtitle, 
    'slug':slug.current,
    date,
    'author':author->{ name, 'profilePic':profilePic.asset->url},
    coverImage,
    content[]{..., "asset":asset->}
    `

    //coverImage.asset._ref  --> image name and no.
    //coverImage.asset->url  --> image url
    //content[]{..., "asset":asset-> (automatically get url, no need to write url once more)

    // author or coverimage then "->" specifies all its fields


const builder = imageUrlBuilder(client)

export function urlFor(source){
    return builder.image(source)   // helps to fetch images cropping opoerations on it

}

export async function getAllBlogs(){

    const results = await client
        .fetch( `*[_type == "blog"] | order(date desc){${blogFields}}` )
    return results;
}


// get blog data---->
export async function getBlogBySlug(slug){

    const result = await client
        .fetch(`*[_type == "blog" && slug.current == $slug]{
            ${blogFields}
            
        }`, {slug})
        .then(res=>res?.[0])
    
    return result
}

// export async function getBlogBySlug(slug){

//     const result = await client
//         .fetch(`*[_type == "blog" && slug.current == $slug]{
//             ${blogFields}
//             content[]{..., "asset":asset->}     // we can write content here also
//         }`, {slug})
//         .then(res=>res?.[0])
    
//     return result
// }