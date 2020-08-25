import React, {useEffect} from 'react'
//import { get } from 'lodash'
import axios from '../../axios/axios-jsonplaceholder'



const Posts: React.FC = (props) => {

   // const [postsList, setPostsList] = useState([])

    useEffect(() => {
       (async () => {
            const [posts, users] = await Promise.all([
                axios.get<any[]>('/posts'),
                axios.get<any[]>('/users'),
            ])
            console.log(posts)     
        })()

        

    }, [])


    return (
        <div className="" id="posts">
            <h1>Posts</h1>
        </div>
    )
}

export default Posts