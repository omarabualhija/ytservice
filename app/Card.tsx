/* eslint-disable react-native/no-inline-styles */
import {Button, Text, View} from 'react-native';
import React from 'react';
import useDownload from './useDownload';

const Card = ({url, onPress}: any) => {
  const {downloadNow, downloadedPath, isLoading, progress, setIsLoading} =
    useDownload();

  const downloadVideo = async (youtubeURL: string) => {
    setIsLoading(true);
    let data = await fetch(`http://localhost:3000?url=${youtubeURL}`);
    data = await data.json();
    downloadNow(data);
  };

  return (
    <View style={{flexDirection: 'row', alignItems: 'center'}}>
      <Text style={{flex: 1}}>{`Video ${1}`}</Text>
      <Button
        disabled={isLoading}
        title="download"
        onPress={() => downloadVideo(url)}
      />
      {!!progress && isLoading && <Text>{`${progress}%`}</Text>}
      {downloadedPath && (
        <Button title="watch offline" onPress={() => onPress(downloadedPath)} />
      )}
    </View>
  );
};

export default Card;
