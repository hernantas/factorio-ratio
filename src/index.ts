import { readFile, writeFile } from "node:fs/promises";
import { FactorioData } from "./schema";

const file = "./data/space-age-2.0.55.json";
const data = await readFile(file, "utf8");

const parsedData = FactorioData.json().decode(data);

await writeFile("./output.json", JSON.stringify(parsedData, null, 2), "utf8");
