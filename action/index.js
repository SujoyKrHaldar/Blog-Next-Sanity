// sending req to api using swr--->

import useSWR from 'swr'

const fetcher = url => fetch(url)
        .then(res=> res.json())

//send data to api--->
// export const useGetHello = ()=> useSWR('/api/hello', fetcher)

//send blog data --->
export const useGetBlog = () => useSWR("/api/blogs", fetcher)

