import{ Databases,Client,Account,Storage, Query} from "appwrite"
import conf from "../../conf/conf"

 export class Service{
 client=new Client();
 database;
 bucket;
 constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setEndpoint(conf.appwriteProjectId)
    this.database=new Databases(this.client)
    this.bucket=new Storage(this.client)
 }
 async createPost({title,content,featuredimg,userId,status,slug}){

    try{
           return await this.database.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredimg,
                userId,
                status
            }
           )
    }  
    catch(error)
    {
        throw error;
    }
    

 }
 async updatePost(title,content,featuredimg,slug,status){

        try{
            return await this.database.updateDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
                title,
                content,
                featuredimg,
                status
            }
            )
        }
        catch(error){
            throw error;

        }
 }
async getPost(slug){
    try {
          return await this.database.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )
    } catch (error) {
        throw error;
    }

}
async getPosts(queries=[Query.equal("status","active")]){
    try {
        await this.database.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries
        )
    } catch (error) {
        throw error;
        
    }
}
async deletePost(slug){
    try {
        await this.databases.deleteDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        
        )
        return true
    } catch (error) {
        console.log("Appwrite serive :: deletePost :: error", error);
        return false
    }
}
async uploadFile(file){
      try {
           await this.bucket.createFile(
            conf.appwriteBucketId,
            file)
      } catch (error) {
        throw error;
      }
}
async deleteFile(fileId)
{
    try {
        await this.bucket.deleteFile
        (
            conf.appwriteBucketId,
            fileId
        )
    } catch (error) {
        throw error;
    }
}
getFilePreview(fileId){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
    )
}
 }
const appwriteService=new Service();
export default appwriteService;