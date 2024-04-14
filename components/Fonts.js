import * as Font from 'expo-font';
import { useState, useEffect } from 'react';

export default function Fonts() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      async function loadFonts() {
        await Font.loadAsync({
          'test': require('../assets/fonts/PlayfairDisplay-Italic.ttf'),
          // Ajoutez autant de polices que nécessaire
        });
  
        setLoaded(true);
      }
  
      loadFonts();
    }, []);
  
    return loaded;
}