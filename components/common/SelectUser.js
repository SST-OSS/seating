"use client";

import {
  batch1arr,
  batch2arr,
  batch3arr,
  mainBatch1arr,
  mainBatch2arr,
  mainBatch3arr,
} from "@/lib/components/SeatingList";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "../ui/command";
import { useUser } from "@/lib/store/store";

const SelectUser = ({ selectedUser, setSelectedUser }) => {
  const updateBatch = useUser((state) => state.updateBatch);
  const login = useUser((state) => state.login);

  function generateUniqueIdFromString(inputString) {
    const uniqueId = inputString.replace(/\s+/g, "").toLowerCase();
    return uniqueId;
  }

  const handleClick = (currentValue, batch) => {
    login(
      currentValue,
      batch,
      generateUniqueIdFromString(currentValue + batch),
      "not-found"
    );
    updateBatch(1);
  };

  return (
    <Command className="dark overflow-hidden  flex-1 w-full ">
      <CommandInput
        placeholder="Type a name or search..."
        value={selectedUser}
        onValueChange={(value) => {
          setSelectedUser(value);
        }}
      />
      <CommandList className="h-full ">
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Batch 1">
          {mainBatch1arr.map((item, index) => (
            <CommandItem
              onClick={() => {
                console.log(currentValue, "this is ussdsder");
              }}
              onSelect={(currentValue) => {
                const my = mainBatch1arr.filter((item) =>
                  item.toLowerCase().includes(currentValue.toLowerCase())
                );

                console.log(my[0]);

                handleClick(my[0], 1);
              }}
              key={index}
            >
              {item}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />

        <CommandGroup heading="Batch 2">
          {mainBatch2arr.map((item, index) => (
            <CommandItem
              onSelect={(currentValue) => {
                const my = mainBatch2arr.filter((item) =>
                  item.toLowerCase().includes(currentValue.toLowerCase())
                );

                console.log(my[0]);

                handleClick(my[0], 2);
              }}
              key={index}
            >
              {item}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Batch 3">
          {mainBatch3arr.map((item, index) => (
            <CommandItem
              onSelect={(currentValue) => {
                const my = mainBatch3arr.filter((item) =>
                  item.toLowerCase().includes(currentValue.toLowerCase())
                );

                console.log(my[0]);
                handleClick(my[0], 3);
              }}
              key={index}
            >
              {item}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default SelectUser;
