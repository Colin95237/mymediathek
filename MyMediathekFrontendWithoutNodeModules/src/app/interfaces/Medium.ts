import { Type } from './Type';
export interface Medium{
  id?:number;
  name:string;
  type:Type;
  author?:string;
  description:string;
  imageLink?: string;
  publishedDate?:string;
  link:string;
  wasRead:boolean;
  priority:number;
  comment?:string;
  iLikeIt?:boolean;
  rating?:number;
}
