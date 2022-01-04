
type Address = {
    city: string,
    geo: { lat: string, lng: string }
    street: string,
    suite: string,
    zipcode: string,
}

type Company = {
    bs: string,
    catchPhrase: string,
    name: string,
}

type User = {
    address: Address
    company: Company
    email: string,
    id: number,
    name: string,
    phone: string,
    username: string,
    website: string
}

type Post = {
    body: string,
    id: number,
    title: string,
    userId: number,
}


export type PostWithUser = Post & Pick<User, 'name' | 'username'>
