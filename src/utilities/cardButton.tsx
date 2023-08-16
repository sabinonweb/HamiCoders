import {
    CommentOutlined,
    LikeOutlined,
    ShareAltOutlined,
  } from "@ant-design/icons";

interface CardButton {
    icon: React.ReactNode;
    color: string;
    value?: number;
  }
  
  const createCardButton = (
    icon: React.ReactNode,
    color:string,
    value?: number,
  ): CardButton => {
    return { icon, value,color };
  };
  
  const LikeButton = createCardButton(<LikeOutlined></LikeOutlined>,'#39e58c',6);
  const CommentButton = createCardButton(<CommentOutlined />,'#8d62f4',9);
  const ShareButton = createCardButton(<ShareAltOutlined />,'#8d62f4');
  export {LikeButton,CommentButton,ShareButton};