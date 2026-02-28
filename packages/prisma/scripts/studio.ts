import { executePrismaCommand } from "./executeCommand";

process.env.BROWSER = "none";
executePrismaCommand("prisma studio --port 5566", {
  includeSchema: false,
});
