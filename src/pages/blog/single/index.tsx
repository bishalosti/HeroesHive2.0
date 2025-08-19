import { Button, TextField } from "@mui/material"
import React from 'react';
import { Box, Typography, Container, Paper, Stack } from '@mui/material';
import { BlogCarasoule } from "../../../components/carasouel/blog/blogCarasouel"
import "../../../index.css"
import { NavBar } from "../../../components/layouts/navbar"
import image from "../../../components/carasouel/blog/0725713b360b80b87567e6e5df7f86b668c11bf3.jpg"
import image1 from "../../../components/carasouel/blog/4b856875c12e812759550cff99930c5da209f62c.png"
import image2 from "../../../components/carasouel/blog/d2844bace69259086d68cad57897200ec172630d.jpg"
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { formatT } from "../../../util";
import { useTranslation } from "react-i18next";

export const BlogPageId = () => {
  const {t} = useTranslation();
    const blogTypes = [
        t("blogPage.sections.ourBlogs.categories.0"),
        t("blogPage.sections.ourBlogs.categories.1"),
        t("blogPage.sections.ourBlogs.categories.2"),
        t("blogPage.sections.ourBlogs.categories.3"),
        t("blogPage.sections.ourBlogs.categories.4"),

    ]

    // MistakesList.tsx

const mistakes = [
  {
    title: 'Lack of a Clear Brand Identity',
    mistake: 'Many startups begin without a consistent logo, color palette, typography, or brand tone. This leads to disjointed marketing materials and user confusion.',
    fix: 'Create a brand style guide early on. Define your logo usage, brand colors, fonts, and tone of voice. This helps keep everything consistent — from your website to pitch decks.'
  },
  {
    title: 'Overcomplicating the User Experience (UX)',
    mistake: 'Trying to be innovative, many startups add too many features or unusual interactions. The result? Confused users who drop off quickly.',
    fix: 'Focus on simplicity. Identify your core user goal, and remove friction in achieving it. Test with real users and get feedback early. Good design is invisible — it just works.'
  },
  {
    title: 'Using Templates Without Customization',
    mistake: 'Relying entirely on website builders or generic UI kits without branding them results in a product that looks like everyone else’s.',
    fix: 'Use templates as a foundation, not a final product. Customize layouts, fonts, icons, and colors to reflect your unique value. Investing a little time in design refinement goes a long way.'
  },
  {
    title: 'Ignoring Mobile-First Design',
    mistake: 'Startups often design for desktop first and only “shrink it down” for mobile — missing mobile-specific usability needs.',
    fix: 'Think mobile-first. Over 60% of users browse from mobile. Prioritize performance, accessibility, and simple interfaces that work flawlessly on small screens.'
  },
];

function MistakesList() {
  return (
    <div className="w-full mt-[3rem]">
      <Stack spacing={4}>
        {mistakes.map(({ title, mistake, fix }) => (
          <div className="shadow-none border-none w-full"  key={title}>
            <Typography mb={2} variant="h6" fontWeight={600} gutterBottom>
              {title}
            </Typography>
            <Typography variant="subtitle1" fontWeight={600}>
              The Mistake:
            </Typography>
            <Typography variant="body1" mb={2}>
              {mistake}
            </Typography>
            <Typography variant="subtitle1" fontWeight={600}>
              The Fix:
            </Typography>
            <Typography variant="body1">{fix}</Typography>
          </div>
        ))}
        <Box mt={4}>
          <Typography variant="h6" fontWeight={600}>
            Final Thoughts
          </Typography>
          <Typography variant="body1" mt={1}>
            Startups that invest in smart, consistent design from the beginning stand out, gain user trust, and scale faster. You don’t need to be a design expert — but avoiding these five mistakes will put you miles ahead.
          </Typography>
        </Box>
      </Stack>
    </div>
  );
}


function Previous() {
  return (
    <div className="w-full mt-[3rem]">
        <Stack direction={"row"} textAlign={"left"} fontWeight={500} gap={6} className="text-wrap bg-[rgb(242,242,242)] hover:bg-[rgb(214,214,214)] cursor-pointer p-5 rounded-lg" >
            <img src={image1} className="w-[30%] md:max-h-[200px] xl:max-h-[120px] object-cover min-w-[100px]"/>
            <Stack direction={"column"} className="w-[80%]  text-lg gap-3 justify-between">
                <div className="flex flex-row gap-2">
                    <KeyboardBackspaceIcon/> {t("blogSingle.previousArticle.label")}
                </div>
                <div className="flex flex-col gap-0 text-base">
                    How to Launch a Brand in 14 Days with a Remote Team
                    <span className="text-[#656565]">Tips from our Squad Leads on executing fast with zero full-time hires.</span>
                </div>
            </Stack>
        </Stack>
    </div>
  );
}

function Next() {
  return (
    <div className="w-full mt-[3rem]">
        <Stack direction={"row-reverse"} textAlign={"right"} fontWeight={500} gap={6} className="text-wrap bg-[rgb(242,242,242)] hover:bg-[rgb(214,214,214)] cursor-pointer p-5 rounded-lg" >
            <img src={image2} className="w-[30%] md:max-h-[200px] xl:max-h-[120px] object-cover min-w-[100px]"/>
            <Stack direction={"column"} className="w-[80%] text-lg gap-3 justify-between">
                <div className="flex flex-row gap-2  justify-end">
                    {t("blogSingle.nextArticle.label")} <KeyboardBackspaceIcon className=" rotate-180"/>
                </div>
                <div className="flex flex-col gap-0 text-base">When to Start Paid Ads — and What to Do Before Spending a Dime   
                    <span className="text-[#656565]">Our internal framework for launching ad-ready creative.</span>
                </div>
            </Stack>
        </Stack>
    </div>
  );
}

    return (
    <div className="text-center text-white py-[0rem]  "> 
            <NavBar/> 

        <div className="px-[2rem] w-full flex gap-10 md:flex-row flex-col mb-10 md:min-h-[80vh] h-full bg-white text-black md:px-[4rem] box-border md:py-[5rem] py-[2rem] justify-center items-start "> 
            <div  className=" md:w-[70%]  text-left flex-col flex">
                <div className={"md:min-w-fit px-4 py-2 text-[1rem] w-fit font-[Poppins] bg-[#FF8200]  cursor-pointer hover:text-white text-white !border-[1px] !border-solid  !border-[#CCCCCC]" }>Startus & Entrepreneurship </div>
                <div className={"md:min-w-fit  py-4 font-semibold text-[1rem] text-2xl max-md:!w-full font-[Poppins]" }>
                    5 Common Startup Design Mistakes (And How to Avoid Them)</div>

                <div>
                    <img src={image} className="w-full h-auto aspect-[16/9] object-cover"/>
                </div>
                  <Stack direction={"row"} textAlign={"left"} alignItems={"center"} mt={2} fontWeight={500} gap={2.5} className="text-wrap">
                    <div className="font-semibold ">By James Doe</div>
                    <div className="font-light"> Jun 29, 2025</div>
                </Stack>
                <div className="mt-5">Design is more than just visuals — it’s how your brand communicates, builds trust, and guides users. Startups often move fast, but skipping thoughtful design can cost time, money, and credibility. Let’s explore five common startup design mistakes — and how to avoid them.</div>
                {MistakesList()}
                {Previous()}
                {Next()}


            </div>

            <div className="md:w-[20%] max-md:hidden md:min-w-[20rem] sticky top-0 bg-[#F2F2F2] p-5 rounded-lg">
                <Stack direction={"column"} textAlign={"left"} fontWeight={500} gap={2.5} className="text-wrap">
                    <div className="text-lg font-semibold ">Categories</div>
                    <div>All Categories</div>
                    {blogTypes.map((data) => {
                      return (<div>{data}</div>)
                    })}


                </Stack>
            </div>
        </div>
    </div>
    )
}