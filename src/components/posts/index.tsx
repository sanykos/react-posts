import React, { useState, useEffect } from 'react'
import SearchInput from '../searchInput';
import DataService from '../../services'

import { Post, User, PostWithUser } from './interfaces';




const Posts: React.FC = () => {

    const [postsList, setPostsList] = useState<PostWithUser[]>([]);
    // const [usersList, setUsersList] = useState<(Post | User)[]>([])
    const [search, setSearch] = useState<string>('')

    // const getPosts = (userId: number) => {
    //     return DataService.getById<Post>('/posts?userId', userId);
    // }


    useEffect(() => {
        DataService.getAll<PostWithUser>().then(response => {
            const [posts, users] = response
            const newPosts = posts.data.map((post) => {
                const findUser = users.data.find(user => user.id === post.userId)
                return {
                    ...post,
                    name: findUser?.name || '',
                    username: findUser?.username || '',
                }
            })
            setPostsList(newPosts);
        });
    }, []);

    const searchHandler = (search: string) => {
        setSearch(search)
    }

    // console.log('postsList', postsList)

    return (
        <>
            <SearchInput onSearch={searchHandler} />
            <div className="" id="posts">
                <ul>
                    {
                        postsList?.map((post: PostWithUser, i: number) => (
                            <li key={post.userId + i}>{post.title}/{post.username}</li>
                        ))

                    }
                </ul>
            </div>
        </>
    )
}

export default Posts