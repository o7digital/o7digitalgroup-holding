import { redirect } from "next/navigation";

export default function Home() {
  redirect("/index-corporate");
  return null;
}
