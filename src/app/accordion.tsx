import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const AccordionComp = () => {
    return (
        <Accordion type="single" collapsible>

            <AccordionItem value="item-1">
                <AccordionTrigger>You should sleep?</AccordionTrigger>
                <AccordionContent>
                    why should I.
                </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
                <AccordionTrigger>It will kill you slowly?</AccordionTrigger>
                <AccordionContent>
                    Am i really alive or just playing mimic lmao.....
                </AccordionContent>
            </AccordionItem>


        </Accordion>

    )
}

export default AccordionComp