import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export default function Sidebar({ children }) {
  return (
    <Sheet className="dark bg-white">
      {children}
      <SheetContent className="bg-black">
        <SheetHeader className="">
          <SheetTitle className="text-white">SST</SheetTitle>
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
