import { redirect } from "next/navigation";
import { defaultLocale, i18n } from "@/lib/i18n";

export default function RootPage() {
  redirect(`/${defaultLocale}/${i18n[defaultLocale].slug}`);
}