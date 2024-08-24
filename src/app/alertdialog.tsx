import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"


  import React from 'react'
import InputDemo from "./input"
  
  const AlertDialogDemo = () => {
    return (
      <div className="p-5 flex-col pt-45">
        <AlertDialog >
  <AlertDialogTrigger>
    <Button className="bg-amber-800">More..</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>This will only filter the exsisting page .</AlertDialogTitle>
      <AlertDialogDescription className="text-red-950">
      <InputDemo/>
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>

      </div>
    )
  }
  
  export default AlertDialogDemo