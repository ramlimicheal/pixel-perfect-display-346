import { createFileRoute } from "@tanstack/react-router";
import html from "../original-site/privacy-policy.html?raw";

export const Route = createFileRoute("/privacy-policy")({
  server: {
    handlers: {
      GET: async () =>
        new Response(html, {
          headers: { "Content-Type": "text/html; charset=utf-8" },
        }),
    },
  },
});
