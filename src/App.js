import React from 'react';
import HomeInfo from './components/HomeInfo';
import HeaderWithMarquee from './components/HeaderWithMarquee';
import LeaderboardCarousel from './components/LeaderboardCarousel';
import SocialMediaTasks from './components/SocialMediaTasks';
import ReferralBanner from './components/ReferralBanner';
import FooterNav from './components/FooterNav';
import ShareReferral from './components/ShareReferral';
import Connect from './components/Connect';

import './App.css';

function App() {

  return (
    <div className={'app'}>
      <HomeInfo />
      <HeaderWithMarquee />
      <LeaderboardCarousel />
      <SocialMediaTasks />
      <ReferralBanner />
      <ShareReferral />
      <Connect />
      <FooterNav />
    </div>
  );
}

export default App;
