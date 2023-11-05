"use client";

import {
  batch1arr,
  batch2arr,
  batch3arr,
  batch4arr,
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
    <Command className="dark bg-gradient-to-b from-gray-700 via-gray-900 to-black overflow-hidden  flex-1 w-full ">
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
          {batch1arr.map((item, index) => (
            <CommandItem
              onClick={() => {
                console.log(currentValue, "this is ussdsder");
              }}
              onSelect={(currentValue) => {
                const my = batch1arr.filter((item) =>
                  item.name.toLowerCase().includes(currentValue.toLowerCase())
                );

                console.log(my[0]);

                handleClick(my[0].name, 1);
              }}
              key={index}
            >
              {item.name}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />

        <CommandGroup heading="Batch 2">
          {batch2arr.map((item, index) => (
            <CommandItem
              onSelect={(currentValue) => {
                const my = batch2arr.filter((item) =>
                  item.name.toLowerCase().includes(currentValue.toLowerCase())
                );

                console.log(my[0].name);

                handleClick(my[0].name, 2);
              }}
              key={index}
            >
              {item.name}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Batch 3">
          {batch3arr.map((item, index) => (
            <CommandItem
              onSelect={(currentValue) => {
                const my = batch3arr.filter((item) =>
                  item.name.toLowerCase().includes(currentValue.toLowerCase())
                );

                console.log(my[0]);
                handleClick(my[0].name, 3);
              }}
              key={index}
            >
              {item.name}
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Batch 4">
          {batch4arr.map((item, index) => (
            <CommandItem
              onSelect={(currentValue) => {
                const my = batch4arr.filter((item) =>
                  item.name.toLowerCase().includes(currentValue.toLowerCase())
                );

                console.log(my[0]);
                handleClick(my[0].name, 4);
              }}
              key={index}
            >
              {item.name}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </Command>
  );
};

export default SelectUser;
