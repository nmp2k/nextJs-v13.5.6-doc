### 1 check update tag & docs folder from offical github

like : [https://github.com/vercel/next.js/tree/v13.5.6/docs](https://github.com/vercel/next.js/tree/v13.5.6/docs)

### 2 download docs folder by this site 

[download-directory.github.io](https://download-directory.github.io/)

### 3 create local docs site by [docusaurus](https://docusaurus.io/)

- step 1: create docusaurus template
```
pn create docusaurus@latest miDoc classic
```
- step 2: replace contents folder /miDoc/docs by document download from offical site

```
cd ./docs
rm *
cp [download doc path] ./
```
- step 3: in offical doc using custom component in markdown file like ***Check***, ***Cross***, ***Image***, we need fix that for running server.

1 create component:

eg: path ```miDoc/src/components/Check.js```

```
const Check = ({ size }) => {
  return (
    <span className="fa fa-check" style={{ fontSize: size }}>
      ✅
    </span>
  );
};

export default Check;
```

2 install ```@mdx-js/react```

```
pn i @mdx-js/react
```

3 create ```/miDoc/components/MDXProviderWrapper/index.js```
```
import React from "react";
import { MDXProvider } from "@mdx-js/react";
import AppOnly from "/src/components/AppOnly";

const components = {
  AppOnly,
};

const MDXProviderWrapper = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default MDXProviderWrapper;
```
4 create ```miDoc/theme/Root.js```

```
import React from "react";
import MDXProviderWrapper from "/src/components/MDXProviderWrapper";

function Root({ children }) {
  return <MDXProviderWrapper>{children}</MDXProviderWrapper>;
}

export default Root;
```

5 change port if you wan(option)

open ```package.json```
change script ```start``` by this: 
```
 "start": "docusaurus start --port 4004",
```
