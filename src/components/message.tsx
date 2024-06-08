interface UserMessageProps {
    name: string;
  }
  
  const Message:React.FC<UserMessageProps> = ({name})=>{
    return <>
    <h2>Hello, {name}</h2>
   
    </>
  };
  
  export default Message;
  