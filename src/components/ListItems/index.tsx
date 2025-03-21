import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../contexts"
import { NEWSLETTER_ITEMS } from "../../mocks/newsletters"
import { Typography, Container, Box, Divider } from "@mui/material"
import { Item } from "./Item"

const fetchNewsletterData = (): Promise<typeof NEWSLETTER_ITEMS> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(NEWSLETTER_ITEMS)
      }, 1000)
    })
  }

export const ListItems = () => {
  const currentUser = useContext(AuthContext)
  const userSubscriptions = currentUser?.subscriptions || []
  const [data, setData] = useState<typeof NEWSLETTER_ITEMS| null>(null);

  useEffect(() => {
    fetchNewsletterData().then((result) => {
      setData(result)
    })
  }, [])

  if (!data) return <Typography>Loading...</Typography>

  const groupedBySite = data.reduce((acc, item) => {
    if (!acc[item.site]) acc[item.site] = []
    acc[item.site].push(item)
    return acc
  }, {} as Record<string, typeof NEWSLETTER_ITEMS>)

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