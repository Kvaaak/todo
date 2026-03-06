import { Client, Databases } from "react-native-appwrite";

// Hardcoded Appwrite configuration
export const client = new Client()
  .setProject("69a54caa0012c7be8b52")
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setPlatform("com.kvak.todo");

export const databases = new Databases(client);
