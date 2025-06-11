"use client";
 import NavLayout from "@/components/NavLayout/NavLayout";
 import { Box, Typography } from "@mui/material";

 //import { Button, Typography } from '@mui/material';
// 
//import BasicForm from "@/components/BasicForm/BasicForm";
import ContactForm from "@/components/ContactForm/ContactForm";
export default function Home() {
  return (
    <div>
      {/* <Typography component="h1"> welcome
      </Typography> */}
      {/* <Button variant="contained" color="primary"> contained button</Button>
      <Button variant="text" color="primary"> text button</Button>
      <Button variant="outlined" color="primary"> outlined button</Button> */}
      {/* <MUIBox/>
      <MUIContainer/>
      <MUIGrid/> */}
      {/* <MUIStack/> */}
      {/* <MUISx/> */}
       
      {/* <NavLayout>
        <Box>
          <Typography> Nav Layout Children Content</Typography>
        </Box>
        </NavLayout> */}
        {/* <BasicForm/> */}
        <ContactForm/>
    </div>
  );
}