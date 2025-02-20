import {FC, useEffect, useState} from "react";
import { AccordionWrapper, AccordionHeader, AccordionFooter, AccordionContent } from "./Accordion.styles";


export const Accordion: FC<{title: string, children: any, open?: boolean }> = ({title, children, open= false}) => {
    const [opened, setOpened] = useState(false);

    useEffect(() => {
        setOpened(open)
    }, [open])

    return (
        <AccordionWrapper onClick={() => setOpened(prev => !prev)} isOn={opened}>
            <AccordionHeader isOn={opened}>
                <span>{title}</span>
            </AccordionHeader>
            <AccordionContent isOn={opened}>
                {children}
            </AccordionContent>
            <AccordionFooter isOn={opened}/>
        </AccordionWrapper>
    )
}