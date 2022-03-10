import { useMemo, useEffect, useState } from 'react';
import io from 'socket.io-client';


export const useSocket = ( serverPath ,logged,token) => {

    const socket = useMemo(
      () =>
        io.connect(serverPath, {
              transports: ["websocket"],
              query: {
                "x-token": token,
              },          
        }),
      [serverPath,token]
    );
   

  const [online, setOnline] = useState(false);

  

  useEffect(() => {
    if (!logged) {
      socket.disconnect();
    }
  }, [logged, socket]);

  useEffect(() => {
    if (logged) {
      socket.connect();
    }
  }, [logged, socket]);

  useEffect(() => {
    setOnline(socket.connected);

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  useEffect(() => {
  
      socket.on("connect", () => {
        setOnline(true);
      });
      
    
  }, [socket]);

  useEffect(() => {
    socket.on("disconnect", () => {
      setOnline(false);
    });
   
  }, [socket]);

  return {
    socket,
    online,
  };
}