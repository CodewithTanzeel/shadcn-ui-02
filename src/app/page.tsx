

import { Accordion } from "@radix-ui/react-accordion";
import Image from "next/image";
import AccordionComp from "./accordion";

export default function Home() {
  return (

    
    <div className="text-center p-5  text-white bg-emerald-900">
      <h1 className=" text-2xl "> Analysis</h1>
      <div>
        <AccordionComp/>
      </div>
    </div>
   


  );
}
