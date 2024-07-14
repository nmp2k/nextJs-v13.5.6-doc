import { imgRoot } from "../constant";
const root = imgRoot;

export default function (path) {
  return root + encodeURIComponent(path);
}
