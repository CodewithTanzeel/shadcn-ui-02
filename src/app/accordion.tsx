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

            <AccordionItem value="item-3">
                <AccordionTrigger>Enough of your nonsense ughhh</AccordionTrigger>
                <AccordionContent>
                  Yeah what ever...
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>Whats your motive?</AccordionTrigger>
                <AccordionContent>
                  To be at peace
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger>I guess thats it for today cya.</AccordionTrigger>
                <AccordionContent>
                  hasta la vista 
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
                <AccordionTrigger>waiiiit.</AccordionTrigger>
                <AccordionContent>
                  what?
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
                <AccordionTrigger>Opps i forget about it .</AccordionTrigger>
                <AccordionContent>
                  ughhh dont bother me .......
                </AccordionContent>
            </AccordionItem>


        </Accordion>

    )
}

export default AccordionComp