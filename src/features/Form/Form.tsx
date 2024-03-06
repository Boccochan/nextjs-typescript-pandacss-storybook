"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTranslations } from "next-intl";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input/Input";
import { Select } from "@/components/Select";

export const basicFormSchema = () =>
  z.object({
    name: z.number(),
    country: z.string(),
    // password: z
    //   .string()
    //   .min(8, { message: "8桁以上のパスワードを入力してください" })
    //   .regex(/^[a-zA-Z0-9]+$/, {
    //     message: "英大文字、英小文字、数字で入力してください",
    //   }),
  });

//https://stackoverflow.com/questions/77367244/a-solution-to-translating-zod-error-messages-using-next-intl
// export type BasicFormSchemaType = z.infer<typeof basicFormSchema>;

export const Form = () => {
  const t = useTranslations();
  const schema = basicFormSchema();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = (data) =>
    console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Select
        {...register("country")}
        options={[
          { id: "", value: "Select", hidden: true },
          { id: "Japan", value: "Japan" },
          { id: "USA", value: "USA" },
        ]}
      />
      {errors.country?.message}
      <Input {...register("name")} width="md" />
      {errors.name?.message}
      <Button label={t("hello")} type="submit" />
    </form>
  );
};
