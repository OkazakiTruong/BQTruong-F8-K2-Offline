"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import Header from "@/components/Header";
export default function Home() {
  const t = useTranslations("Home");
  return (
    <>
      <Header />
    </>
  );
}
