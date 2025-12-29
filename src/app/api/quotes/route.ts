import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  const res = await fetch("https://zenquotes.io/api/random", {
    cache: "no-store",
  });

  const data = await res.json();
  return NextResponse.json(data[0]);
}
