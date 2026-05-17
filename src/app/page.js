import BannerPage from './../components/home/Banner';
import SummaryPage from './../components/home/SummaryCards';
import FriendsSectionPage from './../components/home/FriendsSection';



export default function Home() {
  return (
    <main>
      <BannerPage/>
      <SummaryPage/>
      <FriendsSectionPage/>
    </main>
  );
}
