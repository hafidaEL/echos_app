
import { Box, Button, Card, CardContent, Typography } from "@mui/material"
import type { ItemProps } from './type'

const getButton = (subscriptions: string[], userSubscriptions: string[]) => {
    if (subscriptions.length === 0) return null
  
    const isSubscribed = subscriptions.some(sub => userSubscriptions.includes(sub))
    return (
      <Button variant="contained" color={isSubscribed ? "error" : "warning"}>
        {isSubscribed ? "S'inscrire" : "S'abonner"}
      </Button>
    )
  }

export const Item = ({item, userSubscriptions}: ItemProps) => {
  
    return (
        <Box 
            key={item.id} 
            sx={{ 
                width: { xs: "100%", sm: "48%", md: "30%" }, 
                display: "flex",
                flexDirection: "column",
        }}
        >
        <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
             <Box
                sx={{
                    width: '100%',
                    height: 200,
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',    
                    backgroundPosition: 'center', 
                    position: 'relative',     
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                >
                <Typography variant="h4" component="h1" color="white">{item.title}</Typography>
            </Box>
            <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="body2" color="textSecondary" mt={1}>
                    {item.description}
                </Typography>
                <Box mt={2}>{getButton(item.subscriptions, userSubscriptions)}</Box>
            </CardContent>
        </Card>
        </Box>
    )
}