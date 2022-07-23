import React from 'react';
import AdSense from 'react-adsense';

const MyLeaderBoardAd = () => {
  return (
    <>
      // ads with no set-up
      <AdSense.Google client="ca-pub-4506543043046983" />
      // ads with custom format
      <AdSense.Google
        client="ca-pub-4506543043046983"
        
        style={{ width: 500, height: 300, float: "left" }}
        format=""
      />
      // responsive and native ads
      <AdSense.Google
        client="ca-pub-4506543043046983"
        
        style={{ display: "block" }}
        layout="in-article"
        format="fluid"
      />
      // auto full width responsive ads
      <AdSense.Google
        client="ca-pub-4506543043046983"
        
        style={{ display: "block" }}
        format="auto"
        responsive="true"
      />
    </>
  );
}

export default MyLeaderBoardAd