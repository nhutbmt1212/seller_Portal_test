// import type { CodegenConfig } from '@graphql-codegen/cli';

// const config: CodegenConfig = {
//   overwrite: true,
//   schema: "https://dev-vendure-gamora.aegona.net/admin-api",
//   documents: "src/**/*.ts",
//   generates: {
//     "src/generated/graphql.ts": {
//       plugins: ["fragment-matcher", "typescript-apollo-angular"]
//     },
//     "./graphql.schema.json": {
//       plugins: ["introspection"]
//     }
//   }
// };

// export default config;

import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://dev-vendure-gamora.aegona.net/admin-api",
  config: {
    scalars: { Money: "number" },
    namingConvention: { enumValue: "keep" },
  },
  generates: {
    "src/test/src/gql/": {
      preset: "client",
      documents: "src/lib/**/*.graphql.ts",
      presetConfig: {
        frameElement: false,
      },
    },
    "src/gql/generated.ts": {
      plugins: ["typescript"],
    },
  },
};

export default config;
