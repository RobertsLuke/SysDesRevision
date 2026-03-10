import { weeks, moduleInfo } from "@/data/weeks";
import WeekPageClient from "./WeekPageClient";

export function generateStaticParams() {
  // Generate pages for all possible weeks (available + locked)
  const params = [];
  for (let i = 0; i <= moduleInfo.totalWeeks; i++) {
    params.push({ id: String(i) });
  }
  return params;
}

export default function WeekPage({ params }) {
  return <WeekPageClient />;
}
