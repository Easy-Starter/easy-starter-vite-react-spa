import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_public/register")({
  component: RegisterPage,
});

function RegisterPage() {
  return <div></div>;
}
