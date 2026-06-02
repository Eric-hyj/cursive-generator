import { buildMetadata } from "@/lib/metadata";
import { KeywordPage } from "@/components/keyword-page";

export const metadata = buildMetadata("home");

export default function HomePage() {
  return <KeywordPage slug="home" />;
}
