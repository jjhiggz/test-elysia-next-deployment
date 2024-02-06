"use client";
import { useEffect, useState } from "react";
import { treaty } from "../../../treaty";

export const Dogs = () => {
  const [dogs, setDogs] = useState<string[]>();

  useEffect(() => {
    treaty.api.elysia.dogs.get().then(({ data }) => {
      if (data) {
        setDogs(data);
      }
    });
  }, []);
  return (
    <ol>
      {dogs?.map((dog) => (
        <li key={dog}>{dog}</li>
      ))}
    </ol>
  );
};
