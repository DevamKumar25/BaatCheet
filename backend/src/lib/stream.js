import { StreamChat } from "stream-chat";
import "dotenv/config";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.error("❌ Stream API key or secret key is missing");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

export const upsertStreamUser = async ({ id, name, image }) => {
  try {
    await streamClient.upsertUser({
      id,
      name,
      image,
    });
    console.log(`✅ Stream user created/updated: ${name}`);
    return { id, name, image };
  } catch (error) {
    console.error("❌ Error creating/updating Stream user", error);
  }
};

export const generateStreamToken = (userId) => {
  try {
    //ensure userId is a string
    const userIdStr = userId.toString();
    return streamClient.createToken(userIdStr); 
  } catch (error) {
    console.error("Error generating Stream token:", error);
  }
}
