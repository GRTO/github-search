# Getting Started with the github search project

This project was bootstrapped with [my current react v18 Boilerplate code](https://github.com/GRTO/react-18-boilerplate). You can use it, and it is in my github repository.
You can take a look how the app works, here is a deployed version of this project [GitHub Search on Vercel](https://github-search-j208yn5ph-grto.vercel.app/).

[![github-Search.png](https://i.postimg.cc/vHNFXQZF/github-Search.png)](https://postimg.cc/CzkQxp8m)

# Before run the project

To run the project, you have to create first you have to update the `.env` file that is provided in the project.

You have something like this

```
GITHUB_GRAPHQL_ENDPOINT=https://api.github.com/graphql
GITHUB_API_TOKEN=<MY_GITHUB_TOKEN>
```

Where your github token has to be obtained from here [Create Github Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

# How to run the project

After creating the `.env` file with you github token, you have to run `npm run start`. This will run project in http://localhost:3000/.

# Testing

If you want to test the project, just run `npm run test`.

# Technologies

Here we are using some of the modern technologies that we will use in a real world project:

- React v18 + typescript
- react-query
- Webpack 5
- Jest & testing-react-library
- TailwindCSS
- Babel
- Prettier
- Husky
- EsLint

# Improvements

- When we do a call to the graphql endpoint we are sending the bearer token, that can be hidden using HttpProxy. I will subject to create BFF (backend for frontend) with httpProxies to get this endpoint and hide the headers.
- We need to add validation to the form, like disabling search when the input value is empty. A good way to do it can be using formik or a simple custom hook to handle this.
- Last but not least, we can improve the UI with more filters when we search the data. We can just search information, but according to github docs, there are more filters for related topics.

# Help

Contact me at gerson.toribio@pucp.pe
