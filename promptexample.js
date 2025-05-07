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
          "text": "You are an AI analyzing presidential executive orders. Tag the given article using one or more of the following categories, along with a probability score for each assigned category. Output ONLY a valid JSON object strictly adhering to the format below:\n\nCategories:\n- Economy & Business\n- Environment & Energy\n- Healthcare\n- Immigration\n- National Security & Defense\n- Civil Rights & Social Issues\n- Education\n- Government Operations\n- Foreign Policy & International Relations\n- Technology & Innovation\n- Infrastructure\n\nArticle Summary:\n{article_summary}\n\nOutput Format:\n```json\n{{\n  \"categories\": [\n    {{\n      \"category\": \"category_name_1\",\n      \"probability\": probability_score_1\n    }},\n    {{\n      \"category\": \"category_name_2\",\n      \"probability\": probability_score_2\n    }},\n    ...\n  ]\n}}",
          "type": "text"
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "text": "This executive order revises civil immigration enforcement policies and priorities to protect national and border security, address humanitarian challenges at the southern border, and ensure public health and safety. It revokes a previous executive order and instructs relevant agencies to review and revise actions accordingly. It also clarifies that the order does not create any new rights or benefits enforceable by any party against the United States or its agencies.\n",
          "type": "text"
        }
      ]
    },
    {
      "role": "assistant",
      "content": [
        {
          "text": "```json\n{\"label\": \"Immigration\"}\n```",
          "type": "text"
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "text": "Executive Order 13993, issued on January 20, 2021, revises civil immigration enforcement policies and priorities. The order emphasizes protecting national and border security, addressing humanitarian challenges at the southern border, and ensuring public health and safety. It revokes a previous executive order from 2017 and instructs relevant agencies to review and revise any actions taken under that order to align with the new policy. The order clarifies that it does not create any new rights or benefits enforceable by any party against the United States.\n",
          "type": "text"
        }
      ]
    },
    {
      "role": "assistant",
      "content": [
        {
          "text": "```json\n{\"label\": \"Immigration\"}\n```",
          "type": "text"
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "text": "The executive order revokes a previous order on enhancing public safety in the interior of the United States and sets new policies and priorities for civil immigration enforcement. The new policy aims to protect national and border security, address humanitarian challenges at the southern border, ensure public health and safety, and safeguard the dignity and well-being of all families and communities. It also emphasizes the importance of due process of law. The order instructs relevant agencies to review and revise guidance to align with the new policy and states that it does not create any enforceable rights against the United States or its entities.\npen_sparkGenerate",
          "type": "text"
        }
      ]
    },
    {
      "role": "assistant",
      "content": [
        {
          "text": "```json\n{\"label\": \"Immigration\"}\n```",
          "type": "text"
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "text": "The executive order revokes a previous order on enhancing public safety in the interior of the United States and sets new policies and priorities for civil immigration enforcement. The new policy aims to protect national and border security, address humanitarian challenges at the southern border, ensure public health and safety, and safeguard the dignity and well-being of all families and communities. It also emphasizes the importance of due process of law. The order instructs relevant agencies to review and revise guidance to align with the new policy and states that it does not create any enforceable rights against the United States or its entities.",
          "type": "text"
        }
      ]
    },
    {
      "role": "assistant",
      "content": [
        {
          "text": "```json\n{\n  \"categories\": [\n    {\n      \"category\": \"Immigration\",\n      \"probability\": 0.85\n    },\n    {\n      \"category\": \"National Security & Defense\",\n      \"probability\": 0.75\n    },\n    {\n      \"category\": \"Civil Rights & Social Issues\",\n      \"probability\": 0.65\n    }\n  ]\n}\n```",
          "type": "text"
        }
      ]
    },
    {
      "role": "user",
      "content": [
        {
          "text": "The executive order revokes a previous order on enhancing public safety in the interior of the United States and sets new policies and priorities for civil immigration enforcement. The new policy aims to protect national and border security, address humanitarian challenges at the southern border, ensure public health and safety, and safeguard the dignity and well-being of all families and communities. It also emphasizes the importance of due process of law. The order instructs relevant agencies to review and revise guidance to align with the new policy and states that it does not create any enforceable rights against the United States or its entities.",
          "type": "text"
        }
      ]
    },
    {
      "role": "assistant",
      "content": [
        {
          "text": "```json\n{\n  \"categories\": [\n    {\n      \"category\": \"Immigration\",\n      \"probability\": 0.95\n    },\n    {\n      \"category\": \"National Security & Defense\",\n      \"probability\": 0.85\n    },\n    {\n      \"category\": \"Civil Rights & Social Issues\",\n      \"probability\": 0.75\n    }\n  ]\n}\n```",
          "type": "text"
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
