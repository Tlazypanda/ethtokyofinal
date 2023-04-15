import { useHuddle01 } from '@huddle01/react';
import { useLobby } from '@huddle01/react/hooks';
 
const App = () => {
  const { initialize, isInitialized } = useHuddle01();
  const { joinLobby } = useLobby();
 
  useEffect(() => {
    // its preferable to use env vars to store projectId
    initialize('K');
  }, []);
 
  return <div>{isInitialized ? 'Hello World!' : 'Please initialize'}<button 
  disabled={joinLobby.isCallable} 
  onClick={() => joinLobby('YOUR_ROOM_ID');
}>
  Join Lobby
</button></div>;
};
