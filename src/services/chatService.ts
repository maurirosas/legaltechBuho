export const sendMessage = async (message: string) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message }),
  });

  if (!response.ok) {
    throw new Error("Error al conectar con el chatbot.");
  }

  return await response.json();
};
