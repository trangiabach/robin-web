import { redirect } from "next/navigation";
import { clientRoutes } from "./lib/routes";

export default function Home() {
  redirect(clientRoutes.dashboard);
}
