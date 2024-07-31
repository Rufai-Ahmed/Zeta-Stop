import Hero from "./__components/Hero";
import HIW from "./__components/HIW";
import HIW_Business from "./__components/HIW_Business";
import MarketPlace from "./__components/MarketPlace";
import Subscription from "./__components/Subscription";
import Trending from "./__components/Trending";

const page = () => {
  return (
    <>
      <Hero />
      <Trending />
      <MarketPlace />
      <HIW />
      <HIW_Business />
      <Subscription />
    </>
  );
};

export default page;
