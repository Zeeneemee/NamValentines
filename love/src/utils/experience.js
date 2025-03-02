import { useState } from "react";

const API_KEY = "YOUR_OPENAI_API_KEY"; // Replace with your OpenAI API key
const API_URL = "https://api.openai.com/v1/chat/completions";

const useExperienceAI = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getExperience = async (category) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-4-turbo",
          messages: [
            { role: "system", content: "You are an AI that suggests fun experiences for couples." },
            { role: "user", content: `Suggest a unique and fun experience for the category: ${category}.` }
          ],
          temperature: 0.7,
        }),
      });

      const data = await response.json();
      return data.choices?.[0]?.message?.content || "No suggestion available.";
    } catch (err) {
      setError("Error fetching experience.");
      return "Error fetching experience.";
    } finally {
      setLoading(false);
    }
  };

  return { getExperience, loading, error };
};

export default useExperienceAI;
