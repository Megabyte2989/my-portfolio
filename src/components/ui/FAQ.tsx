"use client";

import React, { useState } from "react";
import { m } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon?: string;
  iconPosition?: string;
}

interface FaqSectionProps {
  data: FAQItem[];
}

export default function FaqSection({ data }: FaqSectionProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div className="mx-auto w-full max-w-3xl p-6 bg-transparent text-white shadow-lg rounded-2xl">
      <h2 className="mb-6 text-center text-6xl font-chocolate">FAQ</h2>
      <Accordion.Root
        type="single"
        collapsible
        value={openItem || ""}
        onValueChange={(value) => setOpenItem(value)}
      >
        {data.map((item) => (
          <Accordion.Item
            key={item.id}
            value={item.id.toString()}
            className="mb-3 rounded-lg border border-gray-200 bg-transparent p-3 transition hover:shadow-md"
          >
            <Accordion.Header>
              <Accordion.Trigger className="flex w-full items-center justify-between p-3 text-left font-medium focus:outline-none">
                <div className="flex items-center gap-3">
                  {item.icon && <span className="text-xl">{item.icon}</span>}
                  {item.question}
                </div>
                <span className="text-gray-300 transition-transform duration-300" style={{ transform: openItem === item.id.toString() ? "rotate(180deg)" : "rotate(0)" }}>
                  ▼
                </span>
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content asChild>
              <m.div
                initial={{ opacity: 0, height: 0 }}
                animate={openItem === item.id.toString() ? { opacity: 1, height: "auto" } : { opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden px-5 py-3 text-white bg-transparent rounded-md"
              >
                {item.answer}
              </m.div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  );
}
