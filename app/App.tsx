/* eslint-disable react-native/no-inline-styles */
import {View} from 'react-native';
import React, {useState} from 'react';
import Video from 'react-native-video';
import Card from './Card';

const App = () => {
  const [activeOfflineVideo, setActiveOfflineVideo] = useState<any>('');
  const [urls] = useState<any>([
    {
      id: 1,
      url: 'https://www.youtube.com/watch?v=hhrQXb8eZ7I',
      downloadedPath: '',
    },
    {
      id: 2,
      url: 'https://www.youtube.com/watch?v=deXAJk6te8c',
      downloadedPath: '',
    },
    {
      id: 3,
      url: 'https://www.youtube.com/watch?v=LL4KKNYpxzw',
      downloadedPath: '',
    },
    {
      id: 4,
      url: 'https://www.youtube.com/watch?v=jYNDgCWmM0k',
      downloadedPath: '',
    },
    {
      id: 5,
      url: 'https://www.youtube.com/watch?v=rkFtP45cEsc',
      downloadedPath: '',
    },
    {
      id: 6,
      url: 'https://www.youtube.com/watch?v=Jcn2LpLsDE0',
      downloadedPath: '',
    },
  ]);

  return (
    <View style={{flex: 1, paddingTop: 100, paddingHorizontal: 24, gap: 20}}>
      {urls.map(({url}: any, index: number) => (
        <Card
          key={index}
          url={url}
          index={index}
          onPress={(dd: string) => setActiveOfflineVideo(dd)}
        />
      ))}

      {activeOfflineVideo && (
        <Video
          muted={true}
          style={{flex: 0.5}}
          source={{uri: `file://${activeOfflineVideo}`}} // Use the file path to play the video
        />
      )}
    </View>
  );
};

export default App;
