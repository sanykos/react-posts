import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import axios from '../../axios/axios-jsonplaceholder'
import SearchInput from '../searchInput'


interface Post {
    body: string,
    id: number,
    title: string,
    userId: number,
    name: string,
    username: string
}

const Posts: React.FC = () => {

  const [postsList, setPostsList] = useState<Post[]>([])
  const [search, setSearch] = useState<string>('')

  const getSearchData = () => {
    if(!search) {
        return
    }
    if(postsList.length > 0) {
        return postsList.filter(item => {
            return item['username'].toLowerCase().includes(search.toLowerCase())
        })
    }
}

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
                let user = _.find(users, ['id', item.userId])
                item['name'] = user.name
                item['username'] = user.name
            })

            setPostsList(posts)
        }
        fetchData()
    }, [])

    const searchHandler = (search : string) => {
        setSearch(search)
    }

   const data  = getSearchData()
 
    return (
        <>
            <SearchInput onSearch={searchHandler}/>
            <div className="" id="posts">
                <ul>
                {
                    data ? 
                    data.map((post, i) => (
                        <li key={post.id + i}>{post.title}</li>
                    ))
                    :
                    postsList.length > 0 && 
                    postsList.map((post, i) => (
                    <li key={post.id + i}>{post.title}</li>
                    ))
                } 
                </ul>
            </div>
        </>
    )
}

export default Posts