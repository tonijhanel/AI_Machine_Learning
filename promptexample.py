import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const response = await openai.chat.completions.create({
  model: "gpt-4-turbo",
  messages: [
    {
      "role": "system",
      "content": [
        {
          "type": "text",
          "text": "You are an AI analyzing presidential executive orders. Tag the given article using one or more of the following categories, along with a probability score for each assigned category. Output ONLY a valid JSON object strictly adhering to the format below:\n\nCategories:\n- Economy & Business\n- Environment & Energy\n- Healthcare\n- Immigration\n- National Security & Defense\n- Civil Rights & Social Issues\n- Education\n- Government Operations\n- Foreign Policy & International Relations\n- Technology & Innovation\n- Infrastructure\n\nArticle Summary:\n{article_summary}\n\nOutput Format:\n```json\n{{\n  \"categories\": [\n    {{\n      \"category\": \"category_name_1\",\n      \"probability\": probability_score_1\n    }},\n    {{\n      \"category\": \"category_name_2\",\n      \"probability\": probability_score_2\n    }},\n    ...\n\n  ]\n}}"
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "type": "text",
          "text": "The executive order revokes a previous order on enhancing public safety in the interior of the United States and sets new policies and priorities for civil immigration enforcement. The new policy aims to protect national and border security, address humanitarian challenges at the southern border, ensure public health and safety, and safeguard the dignity and well-being of all families and communities. It also emphasizes the importance of due process of law. The order instructs relevant agencies to review and revise guidance to align with the new policy and states that it does not create any enforceable rights against the United States or its entities."
        }
      ]
    },
    {
      "role": "assistant",
      "content": [
        {
          "type": "text",
          "text": "```json\n{\n  \"categories\": [\n    {\n      \"category\": \"Immigration\",\n      \"probability\": 0.95\n    },\n    {\n      \"category\": \"National Security & Defense\",\n      \"probability\": 0.85\n    },\n    {\n      \"category\": \"Civil Rights & Social Issues\",\n      \"probability\": 0.75\n    }\n  ]\n}\n```"
        }
      ]
    }
  ],
  response_format: {
    "type": "text"
  },
  temperature: 1,
  max_completion_tokens: 2048,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
  store: true
});
