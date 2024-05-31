import conf from '../conf/conf';
import { Client, ID, Storage, Databases, Query } from "appwrite";


export class Service {
    client = new Client();
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createListing({roomname, slug, roomdetails, featuredimage, status, userid, latitude, longitude, location, username}) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    roomname,
                    roomdetails,
                    featuredimage,
                    status,
                    userid,
                    latitude,
                    longitude,
                    location,
                    username
                }
            )
        } catch (error) {
            console.log("Appwrite :: createListing :: error", error);
        }
    }

    async updateListing(slug, {roomname, roomdetails, featuredimage, status, latitude, longitude, location}) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    roomname,
                    roomdetails,
                    featuredimage,
                    status,
                    latitude,
                    longitude,
                    location
                }
            )
        } catch (error) {
            console.log("Appwrite :: updateListing :: error", error);
        }
    }

    async deleteListing(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite :: deleteListing :: error", error);
            return false;
        }
    }

    async getListing(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite :: getListing :: error", error);
            return false;
        }
    }

    async getListings(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite :: getListings :: error", error);
            return false;
        }
    }

    async searchListings(location) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [Query.search("location", location),
                Query.equal("status", "active")
                ]
            )
        } catch (error) {
            console.log("Appwrite :: getListings :: error", error);
            return false;
        }
    }


    // file upload services
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite :: uploadFile :: error", error);
            return false;
        }
    }

    async deleteFile(fileid) {
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileid
            )
            return true;
        } catch (error) {
            console.log("Appwrite :: deleteFile :: error", error);
            return false;
        }
    }

    getFilePreview(fileid) {
            return this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileid
            )  
    }
}

const appwriteService = new Service;

export default appwriteService;