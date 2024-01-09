import { IncomingForm, Fields, Files } from "formidable";
import { IncomingMessage } from "http";

interface FormData {
  fields: Fields;
  files: Files;
}

const parseFormData = (req: IncomingMessage): Promise<FormData> => {
  const form = new IncomingForm();

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
      } else {
        resolve({ fields, files });
      }
    });
  });
};

export default parseFormData;
