"use client";

import logo from "@/public/assets/img/logo.svg";
import { MendableFloatingButton } from "@mendable/search";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";

const icon = (
  <div className="flex flex-col items-center">
    <Image width="50" height="50" priority src={logo} alt="Logo" />
    <span className="text-xs font-extrabold">Ctrl+J</span>
  </div>
);

const AIAssistant = () => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <MendableFloatingButton
        icon={icon}
        style={{ accentColor: "#123456", darkMode: theme !== "light" }}
        anon_key={process.env.NEXT_PUBLIC_MENDABLE_ANON_KEY!}
        dialogPlaceholder={"What is the main aim of the Network Canvas project?"}
        messageSettings={{ prettySources: true, openSourcesInNewTab: true }}
        popupText={"Hi, how can I help you?"}
        welcomeMessage="Hi, I'm an AI assistant trained on documentation. Ask me anything about Network Canvas."
        cmdShortcutKey="j"
      />
    )
  );
};

export default AIAssistant;
