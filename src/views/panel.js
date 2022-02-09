import React from "react";
import { EmbeddedContent } from "@aha-app/aha-develop-react";

const AhaPanel = aha.getPanel("aha-develop.abstract", "abstractPanel", { name: "Abstract" });

AhaPanel.on("render", ({ props }) => {
  const { panel } = props;

  return <EmbeddedContent src={panel.settings.url} />;
});

// Settings
AhaPanel.on({ action: "settings" }, () => {
  return [
    {
      key: "url",
      type: "Text",
      title: "Embed url"
    },
  ];
});