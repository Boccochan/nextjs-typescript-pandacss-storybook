import { Button } from "@/components/Button/Button";
import { css } from "#/styled-system/css";

export default function Home() {
  return (
    <main
      className={css({
        fontSize: "2xl",
        fontWeight: "bold",
        textAlign: "center",
      })}
    >
      <Button color={"danger"} size="lg" label="hello" />
    </main>
  );
}
