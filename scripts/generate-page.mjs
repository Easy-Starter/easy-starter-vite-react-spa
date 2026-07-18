import { access, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const [slugArgument, layoutArgument = "app"] = process.argv.slice(2);
const allowedLayouts = new Set(["app", "public"]);

if (!slugArgument) {
  console.error("Usage: pnpm generate:page <kebab-case-name> [app|public]");
  process.exit(1);
}

const slug = slugArgument.trim();
const layout = layoutArgument.trim();

if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  console.error(
    "Page name must be a single kebab-case path segment, for example: user-reports",
  );
  process.exit(1);
}

if (!allowedLayouts.has(layout)) {
  console.error('Layout must be either "app" or "public"');
  process.exit(1);
}

const pascalName = slug
  .split("-")
  .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
  .join("");
const title = slug
  .split("-")
  .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
  .join(" ");

const projectRoot = process.cwd();
const pageDirectory = path.join(projectRoot, "src", "pages", slug);
const pageUiDirectory = path.join(pageDirectory, "ui");
const pageFile = path.join(pageUiDirectory, `${slug}-page.tsx`);
const pageIndexFile = path.join(pageDirectory, "index.ts");
const routeDirectory = path.join(projectRoot, "src", "routes", `_${layout}`);
const routeFile = path.join(routeDirectory, `${slug}.tsx`);
const routeId = `/_${layout}/${slug}`;

async function assertMissing(filePath) {
  try {
    await access(filePath);
    console.error(
      `File already exists: ${path.relative(projectRoot, filePath)}`,
    );
    process.exit(1);
  } catch {
    // Expected: the file does not exist.
  }
}

await Promise.all([assertMissing(pageFile), assertMissing(routeFile)]);
await Promise.all([
  mkdir(pageUiDirectory, { recursive: true }),
  mkdir(routeDirectory, { recursive: true }),
]);

await writeFile(
  pageFile,
  `import { Card, CardContent } from '@/shared/components/ui/card'\nimport { Container } from '@/shared/components/ui/container'\nimport { PageHeader } from '@/shared/components/ui/page-header'\nimport { useDocumentMeta } from '@/shared/hooks/use-document-meta'\n\nexport function ${pascalName}Page() {\n  useDocumentMeta({\n    title: '${title} — Easy Starter React',\n    description: '${title} page.',\n  })\n\n  return (\n    <Container className="py-10">\n      <PageHeader\n        title="${title}"\n        description="Replace this starter content with the page design."\n      />\n      <Card className="mt-8">\n        <CardContent className="p-6">New ${title} page</CardContent>\n      </Card>\n    </Container>\n  )\n}\n`,
);

await writeFile(
  pageIndexFile,
  `export { ${pascalName}Page } from './ui/${slug}-page'\n`,
);

await writeFile(
  routeFile,
  `import { createFileRoute } from '@tanstack/react-router'\n\nimport { ${pascalName}Page } from '@/pages/${slug}'\n\nexport const Route = createFileRoute('${routeId}')({\n  component: ${pascalName}Page,\n})\n`,
);

console.log(`Created page: src/pages/${slug}`);
console.log(`Created route: src/routes/_${layout}/${slug}.tsx`);
console.log(
  "Run pnpm routes:generate or start pnpm dev to update the generated route tree.",
);
