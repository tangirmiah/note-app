"use client";

import { HeroImageRight } from "@/components/hero";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return <main>{!session ? <HeroImageRight /> : null}</main>;
}
