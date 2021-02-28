export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}


export interface User {
  id: string;
  name: string;
  designation: string;
  url: string;
  desc:string;
}