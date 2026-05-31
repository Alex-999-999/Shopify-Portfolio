import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Panorama Films — Cinematic Studio" },
      {
        name: "description",
        content:
          "Panorama Films is a cinematic studio crafting commercials, music videos, and short films across LA, NYC, and Tokyo.",
      },
      { property: "og:title", content: "Panorama Films — Cinematic Studio" },
      {
        property: "og:description",
        content: "A 3D film gallery from Panorama Films.",
      },
    ],
  }),
  component: Index,
});
