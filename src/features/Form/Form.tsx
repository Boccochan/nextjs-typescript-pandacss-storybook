"use client";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import { Button } from "@/components/Button";
import { Select } from "@/components/Select";

type IFormInput = {
  country: string;
  prefecture: string;
};

export const Form = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select
        {...register("country")}
        options={[
          { id: "Japan", value: "Japan" },
          { id: "USA", value: "USA" },
        ]}
      />
      <Button label="Submit" type="submit" />
    </form>
  );
};
