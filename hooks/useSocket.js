import { useMemo, useEffect, useState } from 'react';
import io from 'socket.io-client';

export const useSocket = ( serverPath ) => {

    const [token, settoken] = useState('null')
    useEffect(() => {
        settoken(localStorage.getItem("token"));
    }, []);
    // console.log(token)
    // const socket = 
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

    const [ online, setOnline ] = useState(false);


    // useEffect(() => {
    //     console.log(logged)
    //    if(logged){
    //        socket.connected
    //    }else{ socket.disconnect}

    // }, [logged]);

    useEffect(() => {
      
        setOnline( socket.connected );
       
        return () => {
          socket.disconnect();
        };
        
    }, [ socket ])

    useEffect( () => {
        socket.on('connect', () => {
            setOnline( true );
        })
       

    }, [ socket ])

    useEffect( () => {

        socket.on('disconnect', () => {
            setOnline( false );
        })
        

    }, [ socket ])

    return {
        socket,
        online
    }
}