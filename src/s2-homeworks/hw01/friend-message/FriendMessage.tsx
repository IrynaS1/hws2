import s from "./FriendMessage.module.css";

type MessageProps = {
  message: {
    id: number;
    message: {
      text: string;
      time: string;
    };
    user: {
      avatar: string;
      name: string;
    };
  };
};

// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: MessageProps) => {
  return (
    <div
      id={"hw1-friend-message-" + props.message.id}
      className={s.friendMessage}
    >
      <div className={s.friendImageAndText}>
        <img
          id={"hw1-friend-avatar-" + props.message.id}
          // создаёт студент
          src={props.message.user.avatar}
          //
        />
        <div className={s.friendText}>
          <div
            id={"hw1-friend-name-" + props.message.id}
            className={s.friendName}
          >
            {/*создаёт студент*/}
            {props.message.user.name}
            {/**/}
          </div>
          <pre
            id={"hw1-friend-text-" + props.message.id}
            className={s.friendMessageText}
          >
            {/*создаёт студент*/}
            {props.message.message.text}
            {/**/}
          </pre>
        </div>
      </div>
      <div id={"hw1-friend-time-" + props.message.id} className={s.friendTime}>
        {/*создаёт студент*/}
        {props.message.message.time}
        {/**/}
      </div>
    </div>
  );
};

export default FriendMessage;
