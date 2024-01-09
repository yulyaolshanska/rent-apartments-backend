import { v2 as cloudinary } from "cloudinary";

if (
  !process.env.CLOUD_NAME ||
  !process.env.CLOUD_KEY ||
  !process.env.CLOUD_SECRET
) {
  throw new Error("Cloudinary environment variables are not set.");
}

const config = {
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
  secure: true,
};

cloudinary.config(config);

const cloudUpload = async (image: string): Promise<string> => {
  const resultOfUpload = await cloudinary.uploader.upload(image, {
    folder: "apartments",
    transformation: { width: 350, height: 350, crop: "fill" },
  });
  const resultUrl = resultOfUpload.url;
  console.log("resultUrl", resultUrl);
  console.log("result.secure_url", resultOfUpload.secure_url);

  return resultOfUpload.secure_url;
};

export default cloudUpload;
