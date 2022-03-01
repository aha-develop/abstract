import React from "react";
import { EmbeddedContentAttribute } from "@aha-develop/aha-develop-react";
import { ensureEmbedFlags } from "../ensureEmbedFlags";

aha.on("abstractAttribute", ({ record, fields }, { identifier }) => {
  return (
    <EmbeddedContentAttribute
      identifier={identifier}
      record={record}
      fields={fields}
      product="Abstract"
      placeholder="https://app.goabstract.com/embed/..."
      onLinkUpdated={ensureEmbedFlags}
    />
  );
});