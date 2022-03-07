import { useMemo, useEffect, useState } from 'react';
import io from 'socket.io-client';

export const useSocket = ( serverPath ) => {

    const [token, settoken] = useState('null')
    useEffect(() => {
        settoken(localStorage.getItem("token"));
    }, []);
    // console.log(token)
    // const socket = 
    console.log('token',token)
    const socket = useMemo(
      () =>
        io.connect(serverPath, {
          transports: ["websocket"],
          query: {
            "x-token": token,
          },
        }),

      [serverPath]
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
        console.log("connect")

    }, [ socket ])

    useEffect( () => {

        socket.on('disconnect', () => {
            setOnline( false );
        })
        console.log('disconnect')
        

    }, [ socket ])

    return {
        socket,
        online
    }
}