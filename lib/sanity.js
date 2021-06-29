import sanityClient from "@sanity/client"

const options = {

    dataset : process.env.NEXT_PUBLIC_SANITY_DATASET_NAME,
    projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    useCdn : process.env.NODE_ENV === "production",
    apiVersion: '2021-06-13'
    //useCdn === false --> gives little bit slow response, but get latest data
    //useCdn === true --> gives fast response, it will get you cached data
}

export default sanityClient(options)