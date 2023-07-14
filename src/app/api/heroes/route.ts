import { join } from "path";
import { readFileSync } from "fs";

import { NextResponse } from "next/server";

const filePath = join(process.cwd(), "src/app/api/heroes/heroes.json");
const jsonData = JSON.parse(readFileSync(filePath, "utf8"));

export async function GET() {
return NextResponse.json({ data: jsonData });
}
