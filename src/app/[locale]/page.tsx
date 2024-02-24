import { Form } from "@/features/Form";
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
      <Form />
    </main>
  );
}
