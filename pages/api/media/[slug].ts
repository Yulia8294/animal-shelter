import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";

// This function will handle requests to `/api/media/[slug]`
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("--------- HANDLER CALLED");
  // Extract the slug from the request query (e.g., /api/media/eva)
  const { slug } = req.query;

  // Ensure the slug is valid (not missing or an array)
  if (!slug || Array.isArray(slug)) {
    return res.status(400).json({ error: "Invalid slug" });
  }

  // Construct the path to the pet's media folder
  const folderPath = path.join(
    process.cwd(),
    "public",
    "assets",
    "media",
    slug,
  );

  try {
    // Read the files in the folder (this will only work at build-time, not runtime)
    const files = fs.readdirSync(folderPath);

    // Filter out the files that don't end with ".png"
    const imageFiles = files.filter((file) => file.endsWith(".png"));

    // Construct the URLs for each image (e.g., /media/eva/eva1.png)
    const imageUrls = imageFiles.map(
      (file) => `${process.env.URL}/assets/media/${slug}/${file}`,
    );

    // Return the image URLs as a JSON response
    res.status(200).json(imageUrls);
  } catch (error) {
    // If there's an error (e.g., folder not found), return an error response
    res.status(404).json({ error: "Folder not found" });
  }
}
