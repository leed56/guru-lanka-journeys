import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/concepts")({
  component: ConceptsLayout,
});

function ConceptsLayout() {
  return <Outlet />;
}
