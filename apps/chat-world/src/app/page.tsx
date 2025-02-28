import { ChatRoom } from "./components/ChatRoom/chatRoom";
import { ChatProvider } from "./context/ChatContext";
import { SocketProvider } from "./context/SocketContex";

export default function Home() {
  return (
    <SocketProvider>
      <ChatProvider>
        <ChatRoom />
      </ChatProvider>
    </SocketProvider>
  );
}
