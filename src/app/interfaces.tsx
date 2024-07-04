import { ImgHTMLAttributes } from "react";

export interface IPost {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: Array<{
    type: 'paragraph' | 'link';
    content: string;
  }>;
  publishedAt: Date;
}

export interface IComment {
  content: string;
  deleteComment: (comment: string) => void;
}

export interface IPostProps {
  post: IPost
}

export interface IAvatar extends ImgHTMLAttributes<HTMLImageElement> {
  border?: boolean;
  src: string
}