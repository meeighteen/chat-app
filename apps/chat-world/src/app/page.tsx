import { ChatRoomContainer } from "./components/ChatRoomContainer/ChatRoomContainer";
import { ChatProvider } from "./context/ChatContext";
import { SocketProvider } from "./context/SocketContex";

export default function Home() {
  return (
    <SocketProvider>
      <ChatProvider>
        <ChatRoomContainer />
      </ChatProvider>
    </SocketProvider>
  );
}
