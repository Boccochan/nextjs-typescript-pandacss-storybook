"use client";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input/Input";
import { Select } from "@/components/Select";

type IFormInput = {
  country: string;
  name: string;
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
      <Input {...register("name")} width="md" />
      <Button label="Submit" type="submit" />
    </form>
  );
};
