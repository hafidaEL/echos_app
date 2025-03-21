import { Item } from './Item/type'

export type ItemProps = {
    item: Item
    userSubscriptions: string[]
}

export type AccumulatorType = Record<string, Item[]>