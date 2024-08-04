import { CohereClient } from "cohere-ai";

const cohere = new CohereClient({
  token: "ytJE48cNZM3P2bSt2PpqStZeu5gLIPhJOs8lhXbC",
});

// (async () => {
//     const chat = await cohere.chat({
//         model: "command",
//         message: "Tell me a story in 5 parts!",
//     });

//     console.log(chat);
// })();

export default cohere;
