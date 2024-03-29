
import { Box, Typography, styled } from '@mui/material'

import { navData } from '../../Constants/data'

const Component = styled(Box)`
    display : flex;
    margin : 55px 20px 0 20px;
    justify-content : space-between;

`

const Container = styled(Box)`
    padding : 12px 8px;
    text-align : center;
`
const Text = styled(Typography)`
    font-size : 14px;
    font-weight : 600;
    font-family : inherit;
`


const NavBar = () => {
    return(
        <Component>
            
            {
                navData.map(data => (
                    <Container>
                        <img src = {data.url} alt = "Category"/>
                        <Text>{data.text}</Text>
                    </Container>
                    )
                )
            }

        </Component>
    )
}

export default NavBar;