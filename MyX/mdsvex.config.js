import { defineMDSveXConfig as defineConfig} from "mdsvex";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dirname = path.resolve(fileURLToPath(import.meta.url), "../");

const config = {
  extensions: [".md", ".svx"],
  layout: {
    creation_listing: path.resolve(dirname, "")
  }
};

export default config;