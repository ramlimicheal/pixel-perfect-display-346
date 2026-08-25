import { createFileRoute } from "@tanstack/react-router";
import html from "../original-site/pricing.html?raw";

export const Route = createFileRoute("/pricing")({
  server: {
    handlers: {
      GET: async () =>
        new Response(html, {
          headers: { "Content-Type": "text/html; charset=utf-8" },
        }),
    },
  },
});
