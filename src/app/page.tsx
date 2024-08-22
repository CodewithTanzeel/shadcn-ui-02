

import { Accordion } from "@radix-ui/react-accordion";
import Image from "next/image";
import AccordionComp from "./accordion";

export default function Home() {
  return (
    <div>
      <h1 className="text-center text-3xl "> Shadcn ui</h1>
      <div className=" p-20 pt-20 justify-center flex-col">
        <AccordionComp />
      </div>


    </div>
  );
}
