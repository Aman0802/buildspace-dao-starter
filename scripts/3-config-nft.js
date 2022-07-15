import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
  "0x6541A05E96e6890EbCb8aC4d0793d705E715b933"
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Sasuke's Katana",
        description: "This NFT will give you access to NarutoDAO!",
        image: readFileSync("scripts/assets/katana.jpeg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
