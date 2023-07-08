import * as yup from "yup";

export const validationSchema = yup.object().shape({
  message: yup
    .string()
    .max(125, "Message must be at least 3 characters long")
    .required("Message is required"),
  instance: yup
    .string()
    .oneOf([
      "1page",
      "1tudien",
      "2tudien",
      "BMW Deeper Blue",
      "BeyondEl",
      "Career Academy",
      "Your Virtual Event",
      "Zoom Testing Event",
    ])
    .required(),
  world: yup
    .string()
    .oneOf([
      "asda",
      "1tuasfgfdien",
      "asda",
      "aaaaaaaaaa",
      "aaaaaaaaaa2",
      "aaaaaaaaa3",
      "bbbb",
      "bbbbbbbb2",
    ])
    .required(),
  position: yup.number().min(0).max(100),
});
