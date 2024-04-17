import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "../styles/banner";
import logo from "../IMG/logo1.png";


export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer >
      <BannerImage src={logo} alt="logo" />
      <BannerContent>
        {/* <Typography variant="h6">חנות סטוקים לגן ולבית</Typography> */}
        <BannerTitle variant="h5">               </BannerTitle>
                <BannerDescription variant="subtitle">
                חנות סטוקים גדולה עם מחלקות נרחבות לחומרי יצירה וכלי כתיבה
                <br></br>  הנחות מיוחדות לגננות ומוסדות

        </BannerDescription>

        <BannerShopButton color="primary">התחל לקנות</BannerShopButton>
      </BannerContent>
    </BannerContainer>
  );
}