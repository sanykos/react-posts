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

const Posts: React.FC = () => {

  const [postsList, setPostsList] = useState<Post[]>([])

    useEffect(() => {
        async function fetchData() {
            const [posts, users] = await Promise.all([
                axios.get<Post[]>('/posts'),
                axios.get<any>('/users'),
            ]).then((response => {
               return [
                   response[0].data,
                   response[1].data
               ]               
            }))
    
            posts.map((item : any) => {
                let user = _.find(users, ['id', item.userId]);
                item['username'] = user.name;
            })

            setPostsList(posts)
        }

        fetchData()

    }, [])

    return (
        <div className="" id="posts">
            {
                postsList.length > 0 && 
                postsList.map(post => {
                    console.log(post)
                })
            } 
        </div>
    )
}

export default Posts