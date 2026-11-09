import { spawnSync } from "node:child_process";
import { loadEnv } from "vite";
const env = {
  ...process.env,
  ...loadEnv("production", process.cwd(), "VITE_"),
};
const result = spawnSync(
  process.execPath,
  ["--import", "tsx", "scripts/render.tsx"],
  { stdio: "inherit", env },
);
process.exit(result.status ?? 1);
