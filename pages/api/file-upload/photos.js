import aws from "aws-sdk";
import multer from "multer";
import multerS3 from "multer-s3";
import prisma from "../../../lib/prisma";
import formidable from "formidable";
import fs from "fs";

const spaceEndpoint = new aws.Endpoint(process.env.DO_ENDPOINT);
const s3 = new aws.S3({
  endpoint: spaceEndpoint,
  accessKeyId: process.env.DO_SPACE_KEY,
  secretAccessKey: process.env.DO_SPACE_SECRET,
});

const upload = multer({ dest: "uploads/" });

export default async function handler(req, res) {
  try {
    const data = await new Promise((resolve, reject) => {
      const form = formidable({ multiples: true });

      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        resolve({ fields, files });
      });
    });

    console.log("data *** ", data);

    // read file from the temporary path
    const contents = await fs.createReadStream(data?.files?.photo.filepath);
    let name = data?.files?.photo.newFilename;
    let o_name = data?.files?.photo.originalFilename;

    console.log("content *** ", contents);

    const upload = s3.getSignedUrl(
      "putObject",
      {
        Bucket: process.env.DO_BUCKET_NAME,
        Key: name + "_" + o_name,
        Body: contents,
        ACL: "public-read",
      },
      (err, data) => {
        if (err) return err;
        console.log("Your file has been uploaded successfully!", data);
        return res.status(200).json({ message: "success", photo: data });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: "error bad connection" });
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
