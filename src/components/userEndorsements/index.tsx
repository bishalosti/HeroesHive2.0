import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import PolylineIcon from '@mui/icons-material/Polyline';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';import { IconButton, Stack } from "@mui/material"
import userImage from '../../assets/unsplash_pAtA8xe_iVM.png';
import { formatT } from '../../util';

    
            


export const UserEndorsements = () => {
    return (
      <div className="userEndorsements  max-md:!py-[3rem]  max-md:!px-[2rem] ">
        <div className="userEndorsementCard  md:!py-[80px] max-md:!px-5  max-md:!py-10 ">
           <div className="text-[29px] sm:text-[40px] sm:font-medium font-[Tektur]">{formatT(["home.endorsement.title"])}</div>
            <div className="mt-1  sm:max-w-[35rem] paragraphText">
              {formatT(["home.endorsement.description"])}           
            </div>

            <Stack  gap={2}  justifyContent={"center"} alignItems={"center"}  className="  flex !flex-col md:!flex-row w-full">
              <div className="insideCard gap-2 w-full">
                <FormatQuoteIcon className="rotate-180 !text-[5rem]  text-[#FF8200]" fontSize="large"/>

                <div className="max-w-[45rem]">
                  {formatT(["home.endorsement.quote"])}
                </div>

                <Stack direction={"row"} gap={2} justifyContent={"center"} alignItems={"center"} mt={1}  >
                  <img src={userImage} draggable={false}/>
                    <Stack direction={"column"} gap={0}>
                        <div>{formatT(["home.endorsement.name"])}</div>
                      <div>{formatT(["home.endorsement.location"])}</div>

                    </Stack>
                </Stack>
              </div>
              <div className="tertiaryButtonWhite flex flex-row justify-center  items-center   md:flex-col md:!w-[3rem] md:!h-[5rem] md:rounded-2xl rounded-2xl w-[4rem]" >
                <IconButton className="!p-0 !rounded-full !text-inherit md:!block !hidden"><ArrowUpwardIcon/></IconButton>
                <IconButton className="!p-0  !rounded-full !text-inherit md:!block !hidden"><ArrowDownwardIcon/></IconButton>
                <IconButton className="!p-0 !rounded-full !text-inherit md:!hidden !block"><ArrowLeftIcon/></IconButton>
                <IconButton className="!p-0  !rounded-full !text-inherit md:!hidden !block"><ArrowRightIcon/></IconButton>
              </div>
            </Stack>

          </div>    

        </div>
    )
}