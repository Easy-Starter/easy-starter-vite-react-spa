import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/contact")({
  component: ContactPage,
});

function ContactPage() {
  return <div></div>;
}
