import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    isolate: false,
    pool: "threads",
    environment: "node",
    include: ["src/**/*.test.ts"],
    coverage: {
      include: ["src/**/*.{ts,tsx}"],
      enabled: false,
    },
  },
});
