<p align="center">
  <a href="https://codely.com">
    <img src="https://user-images.githubusercontent.com/10558907/170513882-a09eee57-7765-4ca4-b2dd-3c2e061fdad0.png" width="300px" height="92px"/>
  </a>
</p>

<h1 align="center">
  🙅‍♀️ Codely's ESLint NO default parameters plugin
</h1>

<p align="center">
    <a href="https://github.com/CodelyTV"><img src="https://img.shields.io/badge/CodelyTV-OS-green.svg?style=flat-square" alt="Codely Open Source"/></a>
    <a href="https://pro.codely.com"><img src="https://img.shields.io/badge/CodelyTV-PRO-black.svg?style=flat-square" alt="CodelyTV Courses"/></a>
</p>

<p align="center">
  A plugin that forbids the use of default parameters in functions, methods and constructors.
  <a href="https://github.com/CodelyTV/eslint-plugin-no-default-parameters/stargazers">Stars are welcome 😊</a>
</p>

## 👀 How to use

1. Install the dependency
   ```bash
   npm install --save-dev eslint-plugin-no-default-parameters
   ```
2. Add the plugin to your `.eslintrc.js` file:
    ```js
    {
      plugins: ["no-default-parameters"],
    }
    ``` 
3. Enable the rule
    ```js
    {
      rules: {
        "no-default-parameters/enforce": ["error"],
      }
    }
    ```

## 👌 Codely Code Quality Standards

Publishing this package we are committing ourselves to the following code quality standards:

- 🤝 Respect **Semantic Versioning**: No breaking changes in patch or minor versions
- 🤏 No surprises in transitive dependencies: Use the **bare minimum dependencies** needed to meet the purpose
- 🎯 **One specific purpose** to meet without having to carry a bunch of unnecessary other utilities
- ✅ **Tests** as documentation and usage examples
- 📖 **Well documented ReadMe** showing how to install and use
- ⚖️ **License favoring Open Source** and collaboration

## 🔀 Related resources

- [🔦 Linting en JavaScript y TypeScript](https://pro.codely.com/library/linting-en-javascript-y-typescript-188432/446893/about/): Used as a template to bootstrap this plugin
- [🤏 Codely's ESLint + Prettier configuration](https://github.com/CodelyTV/eslint-config-codely): Opinionated linting configuration considering modern TypeScript best practices and providing consistency to your import statements. Valid for your JavaScript or TypeScript projects

Opinionated skeletons ready for different purposes:

- [✨🌱 JavaScript Basic Skeleton](https://github.com/CodelyTV/javascript-basic-skeleton)
- [🔷🌱 TypeScript Basic Skeleton](https://github.com/CodelyTV/typescript-basic-skeleton)
- [🔷🕸️ TypeScript Web Skeleton](https://github.com/CodelyTV/typescript-web-skeleton)
- [🔷🌍 TypeScript API Skeleton](https://github.com/CodelyTV/typescript-api-skeleton)
- [🔷✨ TypeScript DDD Skeleton](https://github.com/CodelyTV/typescript-ddd-skeleton)

## 🙌 Thanks

This package is inspired by a [eslint-plugin-es rule](https://github.com/mysticatea/eslint-plugin-es/blob/v1.4.1/lib/rules/no-default-parameters.js).
