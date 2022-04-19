import { context } from "netlify:edge";

export default async (Request,Context) => {

  const quote = await fetch("https://zenquotes.io/api/random", {
    "headers": {
      "Accept": "application/json"
    }
  });
  const jsonData = await quote.json();
  return context.json(jsonData);
};
