import { createFileRoute } from "@tanstack/react-router";
import html from "../original-site/features.html?raw";

export const Route = createFileRoute("/features")({
  server: {
    handlers: {
      GET: async () =>
        new Response(html, {
          headers: { "Content-Type": "text/html; charset=utf-8" },
        }),
    },
  },
});
