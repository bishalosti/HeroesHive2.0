import React from "react";
import { HTMLMotionProps } from "framer-motion";
import * as motion from "motion/react-client"

type Props = {children:React.ReactNode} & HTMLMotionProps<"div">

export const EnterFromBottomAnimate = ({children, ...props}:Props) => {
    return (
          <motion.div
            initial={{ y:200 }}
            whileInView={{ y:0 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.4,},
            }}
            {...props}
            ref={props.ref as any}
        >
            {children}
            </motion.div>
    )
}