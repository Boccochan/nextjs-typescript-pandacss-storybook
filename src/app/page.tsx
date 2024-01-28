import { css } from "@/styled-system/css";

export default function Home() {
  return (
    <main
      className={css({
        fontSize: "2xl",
        fontWeight: "bold",
        textAlign: "center",
      })}
    >
      <h1>Hello World</h1>
    </main>
  );
}
