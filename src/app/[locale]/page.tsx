import { useTranslations } from "next-intl";

import { Button } from "@/components/Button/Button";
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
      <Button color={"danger"} size="lg" label="hello" />
    </main>
  );
}
