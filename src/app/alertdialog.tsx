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
import { Button } from "@/components/ui/button"//Here we are importing button component from root ui 


  import React from 'react'
import InputDemo from "./input"
 

// we made a funtion here to nest the content of alert Dialog component
  
  const AlertDialogDemo = () => {
    return (
      <div className="p-5 flex-col pt-45">
        <AlertDialog >
  <AlertDialogTrigger>
  <Button className="bg-amber-800">More..</Button>
    {/* /Here we are using the button component in this case we are nesting it in the component itself */}
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