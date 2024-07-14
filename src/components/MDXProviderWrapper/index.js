import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Image from "/src/components/Image";
import AppOnly from "/src/components/AppOnly";
import PagesOnly from "/src/components/PagesOnly";
import { ComponentCreator } from "@docusaurus/ComponentCreator";
import Check from "../Check";
import Cross from "../Cross";

const components = {
  Image,
  AppOnly,
  PagesOnly,
  Check,
  Cross,
};

const MDXProviderWrapper = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MDXProviderWrapper;
