import fs from "fs";
import path from "path";
import matter from "gray-matter";

const folder = "./src/routes/blog";

const go = () => {
  const filenames = fs.readdirSync(folder);

  const svxFiles = filenames.filter(
    (filename) => path.extname(filename).toLowerCase() === ".svx"
  );

  const postsMetadata = svxFiles.map((filename) => {
    const file = fs.readFileSync(`${folder}/${filename}`);
    const parsedFile = matter(file);
    return parsedFile.data;
  });

  const jsonString = JSON.stringify(postsMetadata);

  fs.writeFileSync(`${folder}/posts_metadata.json`, jsonString);

  console.log("Wrote metadata for posts to json.");
};

go();
