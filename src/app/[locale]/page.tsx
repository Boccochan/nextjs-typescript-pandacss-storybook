import { useTranslations } from "next-intl";
import { MdEmail } from "react-icons/md";
import { MdOutlineThumbUpAlt } from "react-icons/md";

import { Button, IconButton } from "@/components/Button";
import { Select } from "@/components/Select";
import { css } from "#/styled-system/css";

export default function Home() {
  const t = useTranslations();

  return (
    <main
      className={css({
        fontSize: "2xl",
        fontWeight: "bold",
        textAlign: "center",
      })}
    >
      {t("products.cart")}
      <Button color={"danger"} size="lg" label="こんにちわ" Icon={MdEmail} />
      <IconButton Icon={MdOutlineThumbUpAlt} aria-label={t("Good button")} />
      <Select
        options={[
          { id: "Apple", value: "Apple" },
          { id: "Apple", value: "Microsoft" },
        ]}
        width="auto"
      />
    </main>
  );
}
