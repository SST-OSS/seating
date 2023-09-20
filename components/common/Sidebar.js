import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Sidebar({ children }) {
  return (
    <Sheet className="dark bg-white">
      {children}
      <SheetContent className="bg-black">
        <SheetHeader className="">
          <SheetTitle className="text-white">SST</SheetTitle>
          <SheetDescription>Still in development</SheetDescription>
        </SheetHeader>

        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Close</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
