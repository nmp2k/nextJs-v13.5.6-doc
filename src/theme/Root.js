import React from "react";
import MDXProviderWrapper from "/src/components/MDXProviderWrapper";

function Root({ children }) {
  return <MDXProviderWrapper>{children}</MDXProviderWrapper>;
}

export default Root;
