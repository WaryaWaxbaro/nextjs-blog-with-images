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

export default async function handler(req, res) {
  try {
    console.log("req ", req.body);
    const upload = s3.getObject(
      {
        Bucket: process.env.DO_BUCKET_NAME,
        Key: '"82136f14d784206941a289bc75780c4d"',
      },
      (err, data) => {
        if (err) return err;
        console.log("Your file has been uploaded successfully!", data);
        console.log("Your file has been uploaded successfully! upload", upload);
        return res.status(200).json({ message: "success", photo: data });
      }
    );

    return res.status(200).json({ message: "last message" });
  } catch (error) {
    console.log(error);
    res.status(200).json({ message: "error bad connection" });
  }
}

/*   try {
    if (req.method === "POST") {
      let data = req.file;
      upload(req, res, function (error) {
        if (error) {
          console.log(error);
          return res.status(200).json({ message: "error bad connection" });
        }
        console.log("File uploaded successfully.");
        res.status(200).json({ message: "success" });
      });

      console.log("data ** ", req);
    }
  } catch (error) {
    res.status(200).json({ message: "error bad connection" });
  } */

export const config = {
  api: {
    bodyParser: false,
  },
};
