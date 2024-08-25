import {useState} from 'react';
import {
  download,
  completeHandler,
  directories,
} from '@kesha-antonov/react-native-background-downloader';

const useDownload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [downloadedPath, setDownloadedPath] = useState('');
  const downloadsPath = `${directories.documents}/Downloads`;

  const jobId = (Math.random() * 1000).toString() + new Date().getTime();
  const downloadNow = async (data: any) => {
    const videoPath = `${downloadsPath}/${jobId}.mp4`;

    download({
      id: jobId,
      url: data,
      destination: videoPath,
      metadata: {},
    })
      .begin(({expectedBytes}) => {
        console.log(`Going to download ${expectedBytes} bytes!`);
      })
      .progress(({bytesDownloaded, bytesTotal}) => {
        console.log(`Downloaded: ${(bytesDownloaded / bytesTotal) * 100}%`);
        setProgress(bytesDownloaded / bytesTotal / 100);
      })
      .done(({bytesDownloaded, bytesTotal}) => {
        console.log('Download is done!', {bytesDownloaded, bytesTotal});
        setDownloadedPath(videoPath);
        setIsLoading(false);
        completeHandler(jobId);
      })
      .error(({error, errorCode}) => {
        console.log('Download canceled due to error: ', {error, errorCode});
      });
  };

  return {
    downloadNow,
    progress,
    downloadedPath,
    isLoading,
    setIsLoading,
  };
};

export default useDownload;
