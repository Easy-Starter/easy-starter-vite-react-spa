import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/pricing")({
  component: PricingPage,
});

function PricingPage() {
  return <div></div>;
}
