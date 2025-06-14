import s from "./Message.module.css";

// нужно создать правильный тип вместо any

export type User = {
  avatar: string;
  name: string;
};

export type MessageType = {
  text: string;
  time: string;
};

export type MessageTypeProps = {
  message: {
    id: number;
    user: User;
    message: MessageType;
  };
};

// нужно отобразить приходящие данные
const Message = (props: MessageTypeProps) => {
  return (
    <div id={"hw1-message-" + props.message.id} className={s.message}>
      <div className={s.imageAndText}>
        <img
          id={"hw1-avatar-" + props.message.id}
          // создаёт студент
          src={props.message.user.avatar}
          //
        />
        <div className={s.text}>
          <div id={"hw1-name-" + props.message.id} className={s.name}>
            {/*создаёт студент*/}
            {props.message.user.name}
            {/**/}
          </div>
          <pre id={"hw1-text-" + props.message.id} className={s.messageText}>
            {/*создаёт студент*/}
            {props.message.message.text}
            {/**/}
          </pre>
        </div>
      </div>
      <div id={"hw1-time-" + props.message.id} className={s.time}>
        {/*создаёт студент*/}
        {props.message.message.time}
        {/**/}
      </div>
    </div>
  );
};

export default Message;
