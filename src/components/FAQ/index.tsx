import { useEffect, useState } from "react"
import { formatT } from "../../util";

export const FAQComponent = ({props}:{props:{question:any, answer:any}[]}) => {
    const [open, setOpen] = useState<number|null>(0);
    return (
    <div className="flex flex-col w-full justify-center items-center bg-white text-black  md:px-[4rem] gap-[2rem]  px-[2rem] max-sm:!py-[3rem]  max-sm:!px-[2rem]  py-20">
        <span  className="max-sm:text-[16px] font-medium">{formatT(["pricing.faq.title"])}</span>
        <div className=" md:w-[50%] w-full md:text-[35px]  text-[30px] mt-2 font-[Tektur] font-semibold ">
                {formatT(["pricing.faq.subTitle"])}
        </div>

        <div className="w-full flex-col flex mt-[2rem] justify-center items-center rtl:text-right ">
        {props.map((data, ind) => {
            return (
            <details className="  group border-b py-4 rounded-md  !w-full md:w-[80%]"  open={ind === open}  onClick={(e) => {ind !== open ? setOpen(() => ind) : setOpen(null);e.preventDefault() }} key={ind} >
                <summary className="flex justify-between gap-2  text-left cursor-pointer ">
                    <span className="text-lg font-semibold rtl:text-right ">{data.question}</span>
                    <div className=" w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 border-black flex items-center justify-center transition-transform duration-300 group-open:rotate-180">
                        <svg
                            className="w-5 h-5 transition-transform duration-300 group-open:rotate-45"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                        </svg>
                    </div>
                </summary>

                <div className="mt-5 text-left text-gray-600  rtl:text-right ">
                    {data.answer}
                </div>
            </details>
            )
        })}
            </div>  


        </div>
    )
}