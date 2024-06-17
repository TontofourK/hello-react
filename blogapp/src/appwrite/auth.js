/* eslint-disable no-useless-catch */
/* eslint-disable no-empty */
import conf from "../conf/conf.js";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount(email, password, name) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  async login(email, password) {
    try {
        return await this.account.createEmailPasswordSession
    } catch (error) {
        throw error
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("appwrite service :: getCurrentUser() :: ", error);
    }
    return null;
  }
  
  async logout() {
    try {
        await this.account.deleteSessions
    } catch(error){  
      console.log("appwrite service :: Logout() :: ", error);
    }
    return null;
  }
}

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject("<PROJECT_ID>"); // Your project ID

const account = new Account(client);
