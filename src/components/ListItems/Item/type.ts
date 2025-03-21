export type Item = {
    id: string
    title: string
    description: string
    site: string
    image: string
    subscriptions: string[]
}

export type ItemProps = {
    item: Item
    userSubscriptions: string[]
}