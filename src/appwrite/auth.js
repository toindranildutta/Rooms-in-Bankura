import conf from '../conf/conf';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

   
    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            
            if (userAccount){
                // call a method
                return this.login({email, password});
            } else {
                return userAccount;
            }
        } catch (error) {
            console.log(error);
            throw error;
        }

    }

    async createVerification() {
        alert("Verification mail sent");
        return await this.account.createVerification(import.meta.env.VITE_VERIFICATION_PATH);
    }

    async login({email, password}) {
        try {
       
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log(error);
        }
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log(error);
        }
    }
}
    
const authService = new AuthService;

export default authService;
