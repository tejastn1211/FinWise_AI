import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "FinWise- AI Financial Analys", // Unique app ID
  name: "FinWise- AI Financial Analys",
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});
