import axios from "axios";
import { GetAllContacts, CreateContData, GetAllMessage, GetMessage  } from "../typing";



const api_root ="http://localhost:3000/"

console.log("api_root", api_root);

class API {
  protected api = axios.create({
    baseURL: api_root,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
}

class GetApis extends API {
  constructor() {
    super();
  }

  async getAllContacts():Promise<GetAllContacts[]|undefined>{
    try{
        const response = await this.api.get("/contacts/");
        return response.data;
    }catch(error){
        console.log(error)
    }
  }

  async getContactById(id:number): Promise<GetAllContacts|undefined>{
    try{
        const response = await this.api.get(`/contacts/${id}/`);
        return response.data;
    }catch(error){
        console.log(error)
    }
  }

  async getMessages(id:number): Promise<GetMessage | undefined>{
    try{
        const response = await this.api.get(`/message/user/${id}/`);
        return response.data;
    }catch(error){
        console.log(error)
    }
  }

  async getAllMessages(): Promise<GetAllMessage[] | undefined>{
    try{
        const response = await this.api.get(`/message/`);
        return response.data;
    }catch(error){
        console.log(error)
    }
  }

}

export class PostApis extends API {
  constructor() {
    super();
  }

  async createContact(Createdata: CreateContData) {
    try {
      const postData = {
        userName: Createdata.userName,
        mobile: Createdata.mobile,
        profession: Createdata.profession,
        address: Createdata.address,
        imageURL: Createdata.imageURL
      };
      const response= await this.api.post("/contacts/", postData);
      return response.data;
    } catch (error) {
        console.log(error)
    }
  }


  async createMessages(id: number, Createdata: string) {
    try {
      const postData = {
        text: Createdata
      };
      const response= await this.api.post(`/message/create/${id}`, postData);
      return response.data;
    } catch (error) {
        console.log(error)
    }
  }

}
export class UpdateApis extends API {
  constructor() {
    super();
  }
  async updateContact(id:number, Data: CreateContData){
    try {
      const updateData = {
        userName: Data.userName,
        mobile: Data.mobile,
        profession: Data.profession,
        address: Data.address,
        imageURL: Data.imageURL
      };
      const response= await this.api.put(
        `/contacts/update/${id}/`,
        updateData
      );
      return response.data;
    } catch (error) {
      console.log(error)
    }
  }
}
export class DeleteApis extends API {
  constructor() {
    super();
  }
  async deleteContact(id: number) {
    try {
      const response = await this.api.delete(
        `/contacts/delete/${id}/`,
      );
      return response;
    } catch (error) {
      return error;
    }
  }
}

export const getApis = new GetApis();
export const postApis = new PostApis();
export const updateApis = new UpdateApis();
export const deleteApis = new DeleteApis();
