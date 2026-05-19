import fs from "fs";
import path from "path";

const targets = [".next", path.join("node_modules", ".cache")];

for (const target of targets) {
  const full = path.join(process.cwd(), target);
  if (fs.existsSync(full)) {
    fs.rmSync(full, { recursive: true, force: true });
    console.log(`Removed ${target}`);
  }
}
