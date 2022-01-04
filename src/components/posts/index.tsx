import React, { useState, useEffect } from 'react'
import SearchInput from '../searchInput';
import DataService from '../../services'

import { PostWithUser } from './interfaces';




const Posts: React.FC = () => {
    const [postsList, setPostsList] = useState<PostWithUser[]>([]);
    const [search, setSearch] = useState<string>('');

    const getSearchData = () => {
        if (!search) {
            return
        }
        return postsList?.filter(post => post.title.toUpperCase().includes(search.toUpperCase()))
    }

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

    const searchData = getSearchData();

    return (
        <div className="posts" id="posts">
            <SearchInput onSearch={searchHandler} />
            <ul className="postsList">
                {
                    searchData ? searchData.map((post, i: number) => (<li key={post.userId + i}>{post.title}/{post.username}</li>))
                        : postsList ?
                            postsList.map((post, i: number) => (
                                <li key={post.userId + i}>{post.title}/{post.username}</li>
                            ))
                            :
                            <h1>Постов не завезли</h1>

                }
            </ul>
        </div>

    )
}

export default Posts