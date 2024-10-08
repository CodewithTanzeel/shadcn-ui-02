

import { Accordion } from "@radix-ui/react-accordion";
import Image from "next/image";
import AccordionComp from "./accordion";
import AlertDialogDemo from "./alertdialog";


export default function Home() {
  return (

    
    <div className="text-center p-10  text-white bg-emerald-900 w-screen h-full justify-center">
      <h1 className=" text-2xl "> Shadcn ui</h1>
      {/* Main heading H1 */}
        <AccordionComp />
        {/* Rendering a component same by help of nesting elements of accordion in a function  */}
        <AlertDialogDemo/>
        {/* Rendering a component same by help of nesting elements of accordion in a function  */}
      
    </div>
   


  );
}
