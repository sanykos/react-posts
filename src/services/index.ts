import axios from '../axios';
// import { Post, User } from '../components/posts/interfaces';

class DataService {

    async getAll<T>(posts: string = 'posts', users: string = 'users') {
        return await Promise.all([
            this.getList<T>(posts),
            this.getList<T>(users)
        ])
    }

    getList<T>(target: string) {
        return axios.get<T[]>(target);
    }

    getById<T>(target: string, id: number) {
        return axios.get<T>(`${target}/${id}`)
    }
}

export default new DataService()



