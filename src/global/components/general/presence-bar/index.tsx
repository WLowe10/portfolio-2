import { useStyles } from "./styles";
import { motion } from "framer-motion";
import { useLocalTime } from "@global/hooks";

export const PresenceBar = () => {
    const classes = useStyles();
    const { time } = useLocalTime();

    return (
        <div className={classes.presence}>
            <div style={{display: "flex", alignItems: "center", gap: 10}}>
                {/* <Image src={usflagGif} height={24} alt={"united states"}/>                     */}
                {/* <StaticImage src={usFlag} alt={"US-FLAG"} /> */}
                <p className={classes.presenceText}>
                    United States
                </p>
            </div>
            <div style={{display: "flex", alignItems: "center", gap: 10}}>
                <motion.p initial={{opacity: 0}} animate={{opacity: 1}} className={classes.presenceText}>
                    {
                        time
                    }
                </motion.p>
                <p className={classes.presenceText}>
                    &#8226;
                </p>
                <p className={classes.presenceText}>
                    in Kansas
                </p>
            </div>
        </div>
    )
};