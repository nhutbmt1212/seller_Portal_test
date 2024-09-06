Storefront GraphQL Code Generation

Code generation means the automatic generation of TypeScript types based on your GraphQL schema and your GraphQL operations. This is a very powerful feature that allows you to write your code in a type-safe manner, without you needing to manually write any types for your API calls.

To do this, we will use Graphql Code Generator.
note

This guide is for adding codegen to your storefront. For a guide on adding codegen to your backend Vendure plugins or UI extensions, see the Plugin Codegen guide.
Installation

Follow the installation instructions in the GraphQL Code Generator Quick Start.

Namely:

_`npm i graphql`
_`npm i -D typescript @graphql-codegen/cli`
_`npx graphql-code-generator init`
_`npm install `

During the init step, you'll be prompted to select various options about how to configure the code generation.

    Where is your schema?: Use http://localhost:3000/shop-api (unless you have configured a different GraphQL API URL)
    Where are your operations and fragments?: Use the appropriate glob pattern for you project. For example, src/**/*.{ts,tsx}.
    Select codegen.ts as the name of the config file.

\!
Codegen just generate code has extension file name like \*`test.graphql.ts`
