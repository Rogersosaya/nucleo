'use client'
import { Select as SelectNextUI, SelectItem } from "@nextui-org/react";

interface PropsOptions {
    label: string;
    value: string;
}

interface Props{
    title: string;
    options: PropsOptions[];
}
const animals = [
    {label: "Cat", value: "cat", description: "The second most popular pet in the world"},
    {label: "Dog", value: "dog", description: "The most popular pet in the world"},
    {label: "Elephant", value: "elephant", description: "The largest land animal"},
    {label: "Lion", value: "lion", description: "The king of the jungle"},
    {label: "Tiger", value: "tiger", description: "The largest cat species"},
    {label: "Giraffe", value: "giraffe", description: "The tallest land animal"},
    {
      label: "Dolphin",
      value: "dolphin",
      description: "A widely distributed and diverse group of aquatic mammals",
    },
    {label: "Penguin", value: "penguin", description: "A group of aquatic flightless birds"},
    {label: "Zebra", value: "zebra", description: "A several species of African equids"},
    {
      label: "Shark",
      value: "shark",
      description: "A group of elasmobranch fish characterized by a cartilaginous skeleton",
    },
    {
      label: "Whale",
      value: "whale",
      description: "Diverse group of fully aquatic placental marine mammals",
    },
    {label: "Otter", value: "otter", description: "A carnivorous mammal in the subfamily Lutrinae"},
    {label: "Crocodile", value: "crocodile", description: "A large semiaquatic reptile"},
  ];
function Select({title, options}: Props) {
  return (
    <SelectNextUI 
        label={title} 
        className="max-w-xs" 
      >
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectNextUI>
  )
}

export default Select
