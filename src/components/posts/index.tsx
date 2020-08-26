import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import axios from '../../axios/axios-jsonplaceholder'


interface Post {
    body: string,
    id: number,
    title: string,
    userId: number,
    username: string
}

const Posts: React.FC = (props) => {

   const [postsList, setPostsList] = useState<Post[]>([])

    useEffect(() => {
       (async () => {
            const [posts, users] = await Promise.all([
                axios.get<any[]>('/posts'),
                axios.get<any[]>('/users'),
            ])
            posts.data.map((item) => {
                let user = _.find(users.data, ['id', item.userId]);
                item['username'] = user.name;
            })
            let { data } : any = posts;
            //console.log(data)
            setPostsList([data, ...postsList])
        })()

    }, [])

    //console.log(postsList)


    return (
        <div className="" id="posts">
            <h1>Posts</h1>
        </div>
    )
}

export default Posts