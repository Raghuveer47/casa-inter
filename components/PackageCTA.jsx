"use client";

import Button from "./ui/Button";
import { useEnquiry } from "./EnquiryProvider";

export default function PackageCTA({ featured, label = "Get a Quote" }) {
  const { openEnquiry } = useEnquiry();
  return (
    <Button variant={featured ? "gold" : "outlineDark"} onClick={openEnquiry} className="mt-10 w-full">
      {label}
    </Button>
  );
}
