import { Button, TextField } from "@mui/material"
import { BlogCarasoule } from "../../components/carasouel/blog/blogCarasouel"
import { UseCaseCarasoule } from "../../components/carasouel/useCaseCarasouel"
import "../../index.css"
import { NavBar } from "../../components/layouts/navbar"
import { useNavigate } from "react-router"
import { formatT } from "../../util"
import { useTranslation } from "react-i18next"
export const BlogPage = () => {
    const {t} = useTranslation()
    const blogTypes = [
        formatT(["blogPage.sections.latestArticles.categories.0"]),
        formatT(["blogPage.sections.latestArticles.categories.1"]),
        formatT(["blogPage.sections.latestArticles.categories.2"]),
        formatT(["blogPage.sections.latestArticles.categories.3"]),
        formatT(["blogPage.sections.latestArticles.categories.4"]),
    ]
    return (
    <div className="text-center text-white py-[2rem]  ">
      <div className=" topFrame !pb-[5rem]  md:px-[4rem]  md:!pb-[8rem] max-sm:!pb-[8rem] max-md:!pb-[7rem] max-md:!py-[3rem]  max-md:!px-[2rem]  ">
        <div className="font-[Tektur]  md:max-w-[60rem] w-full  text-[28px] font-medium md:font-semibold md:text-[50px] m-auto">
        <span className="text-white">
            {formatT(["blogPage.header.title"])}
        </span>

        </div>
        <div className=" pb-[1rem] pt-[1rem]   mt-3 max-w-[50rem] w-ful font-[Poppins] paragraphText  !font-light text-white  m-auto  ">
        <span>
            {formatT(["blogPage.header.description"])}

        </span>
        </div>
        <div className="grid-container md:mt-[1rem] mt-[1rem] ">
          <div className="blur blur-left"></div>
          <div className="blur blur-right"></div>

        </div>
        
      </div>
        <div className="px-[2rem] w-full  max-sm:!py-[3rem] max-sm:!px-[2rem]   bg-white text-black flex flex-col md:px-[4rem] box-borde gap4 r md:py-[5rem] py-[2rem] justify-center items-center "> 
            <div className=" md:max-w-[68rem] text-[24px] md:text-[32px] mt-[1rem] font-medium font-[Tektur]">
                <div  className="mb-4">   
                    {formatT(["blogPage.intro.mainText"])}                
                </div>
                {formatT(["blogPage.intro.additionalText"])}   
            </div>

        </div>

        <div className=" bg-[#FFF9F2] overflow-hidden  max-sm:!py-[3rem] max-sm:!px-[2rem]  text-black flex w-[100%]  flex-col md:px-[4rem] gap-2 px-[2rem]  box-borde gap4 r md:py-[5rem] py-[2rem] justify-center items-start ">
            <div className=" font-medium md:font-semibold justify-between text-left md:text-[40px] mb-[1rem] text-[28px]  font-[Tektur]">
                {formatT(["blogPage.sections.ourBlogs.title"])}   
            </div>

            <div className=" gap-4 font-semibold items-start justify-start text-left text-[1.5rem] w-full font-[Tektur]">
                <div  className="w-full flex flex-row overflow-auto gap-4 noScrollbar font-semibold items-start justify-start text-left text-[1.5rem]  font-[Tektur]">
                            {[...blogTypes].map((type, ind) => {
                return <div className={ind !== 0? "min-w-fit px-4 py-2 text-[1rem] font-[Poppins] hover:bg-[#FF8200]  cursor-pointer hover:text-white text-black !border-[1px] !border-solid rounded-full !border-[#CCCCCC]" : 
                    "min-w-fit px-4 py-2 text-[1rem] font-[Poppins] bg-[#FF8200]  cursor-pointer hover:text-white text-white !border-[1px] !border-solid rounded-full !border-[#CCCCCC]" }>{type} </div>
                })}
            </div>
            </div>
            <BlogCarasoule/>
        </div>



        <div className=" bg-[white] max-sm:!py-[3rem] max-sm:!px-[2rem]  text-black flex w-[100%]  flex-col md:px-[4rem] gap-2 px-[2rem]  box-border gap4 r md:py-[5rem] py-[2rem] justify-center items-start ">
            <div className=" font-medium md:font-semibold justify-between text-left md:text-[40px] mb-[1rem] text-[28px]  font-[Tektur]">
                {formatT(["blogPage.sections.latestArticles.title"])}   
            </div>

            <div className=" gap-4 font-semibold items-start justify-start text-left text-[1.5rem] w-full font-[Tektur]">
                <div  className="w-full flex flex-row overflow-auto gap-4 noScrollbar font-semibold items-start justify-start text-left text-[1.5rem]  font-[Tektur]">
                            {[...blogTypes].map((type, ind) => {
                return <div className={ind !== 0? "min-w-fit px-4 py-2 text-[1rem] font-[Poppins] hover:bg-[#FF8200]  cursor-pointer hover:text-white text-black !border-[1px] !border-solid rounded-full !border-[#CCCCCC]" : 
                    "min-w-fit px-4 py-2 text-[1rem] font-[Poppins] bg-[#FF8200]  cursor-pointer hover:text-white text-white !border-[1px] !border-solid rounded-full !border-[#CCCCCC]" }>{type} </div>
                })}
            </div>
            </div>
            <BlogCarasoule/>
        </div>


        
        {/* grow your store section*/}
        <div className="flex md:flex-row max-md:!py-[3rem] max-md:!px-[2rem]  flex-col w-full md:pl-[4rem] box-border bg-[#FF8200]  justify-between items-center ">
            <div className=" md:py-[8rem]   w-full flex flex-col justify-center  items-center">
                <div className=" font-medium md:font-semibold text-[28px] md:text-[40px] md:text-center text-left w-full font-[Tektur]  ">
                                    {formatT(["blogPage.subscribeSection.title"])}   

                        </div>  
                <div className=" text-semibold text-[20px]  max-w-[45rem] max-md:text-left   ">
                                    {formatT(["blogPage.subscribeSection.description"])}   
                </div>            
                <div className=" text-semibold text-[20px] mt-[2rem] md:max-w-[45rem] max-md:gap-2 !w-full text-center  flex-col md:flex-row flex gap-2  md:justify-center md:items-center justify-start items-start ">
                    <TextField placeholder={t("blogPage.subscribeSection.form.inputs.fullName")} className="!w-[100%] md:!w-[15rem]"   size="small" slotProps={{input:{sx:{backgroundColor:"white", borderRadius:2}}}}/>
                    <TextField placeholder={t("blogPage.subscribeSection.form.inputs.emailAddress")} className="!w-[100%] md:!w-[15rem]"  size="small" slotProps={{input:{sx:{backgroundColor:"white", borderRadius:2}}}}/>

                <Button className=" !border-none max-md:w-full !border-black !bg-[#030303] !rounded-full !px-4 !normal-case !text-white w-fit !text-[14px]">
                    {formatT(["blogPage.subscribeSection.form.button"])}   
                </Button>
            </div>            
            </div>
        </div>
    </div>
    )
}