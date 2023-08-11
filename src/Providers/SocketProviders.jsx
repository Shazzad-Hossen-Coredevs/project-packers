import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { BASE_URL } from "../Util/apiCall";
export const SocketContext = createContext(null);

const SocketProviders = ({ children }) => {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (!socket) {
      const newSocket = io(BASE_URL, {
        withCredentials: true,
      });
      newSocket.on("connect", () => {
        console.log("Connected to server via socket");
      });

      newSocket.on("disconnect", () => {
        console.log("Disconnected from server via socket");
      });
      setSocket(newSocket);
    }
  }, []);

  const data = {
    socket,
  };
  return (
    <SocketContext.Provider value={data}>{children}</SocketContext.Provider>
  );
};

export default SocketProviders;
