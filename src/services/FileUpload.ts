import axios from "axios";

export const uploadFile = async (file: any) => {
  if (file === undefined) return;
  const formData = new FormData();
  formData.append("file", file[0]);
  formData.append("upload_preset", `${process.env.NEXT_PUBLIC_PRESET_NAME}`);
  return await axios
    .post(`${process.env.NEXT_PUBLIC_CLOUD_URL}/image/upload`, formData)
    .then((response) => response?.data?.secure_url)
    .catch((error) => error);
};
