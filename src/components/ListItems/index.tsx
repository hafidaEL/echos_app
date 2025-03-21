import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts"

import { Typography, Container, Box, Divider } from "@mui/material"
import { Item } from "./Item"
import { Item as ItemType } from "./Item/type"
import { AccumulatorType } from "./type"

export const ListItems = () => {
  const currentUser = useContext(AuthContext)
  const userSubscriptions = currentUser?.subscriptions || []
  const [data, setData] = useState<ItemType[]|null>(null)

  useEffect(() => {
    fetch("http://localhost:3000/data")
    .then((response) => {
      return response.json() 
    })
    .then((json) => { 
      setData(json) 
       })
  }, [])

  if (!data) return <Typography>Loading...</Typography>

  const groupedBySite = data.reduce((acc: AccumulatorType, item: ItemType) => {
    if (!acc[item.site]) acc[item.site] = []
    acc[item.site].push(item)
    return acc
  }, {} as Record<string, ItemType[]>)

  return (
    <Container data-testid="listItems">
      {Object.entries(groupedBySite).map(([site, items]) => (
        <Box key={site} mb={4}>     
          <Typography variant="h4" fontWeight="bold" textAlign="left">
            {site}
          </Typography>
          <Divider sx={{ backgroundColor: "red", height: 4, width: 50, mb: 2 }} />

          <Box 
            display="flex" 
            flexWrap="wrap" 
            gap={2} 
            sx={{ justifyContent: "flex-start" }}
          >
            {items.map((item) => (
                <Item key={item.id} item={item} userSubscriptions={userSubscriptions} />
            ))}
          </Box>
        </Box>
      ))}
    </Container>
  )
}