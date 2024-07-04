import { Backend } from "@/components/Backend";
import { BackOfMind } from "@/components/BackOfMind";
import { Frontend } from "@/components/Frontend";
import { General } from "@/components/General";
import { TableOfContents } from "@/components/TableOfContents";

export default function Home() {
  return (
    <main>
      <TableOfContents />
      <General />
      <Frontend />
      <Backend />
      <BackOfMind />
    </main>
  );
}
