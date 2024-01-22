export interface CreateContData {
  userName: string;
  mobile: number;
  profession: string;
  address: string;
  imageURL: string;
}

export interface CreateMessageData {
  text: string;
}

// Contact  data
export interface GetAllContacts {
  address: string;
  created_at: string;
  deleted_at: string;
  imageURL: string;
  mobile: number;
  profession: string;
  updated_at: string;
  userId: number;
  userName: string;
}
export interface GetAllMessage{ 
  id: number;
  text: string;
  userId: number;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}[]
export interface GetMessage {
  messages: Messages[];
}

export interface Messages {
  id: number;
  text: string;
  userId: number;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  user: {
    userId: number;
    userName: string;
    mobile: number;
    profession: string;
    address: string;
    imageURL: string;
    created_at: string;
    updated_at: string;
    deleted_at: string;
  };
}
