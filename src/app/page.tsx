import { Backend } from "@/components/Backend";
import { Frontend } from "@/components/Frontend";
import { TableOfContents } from "@/components/TableOfContents";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <TableOfContents />
      <Frontend />
      <Backend />
    </main>
  );
}
