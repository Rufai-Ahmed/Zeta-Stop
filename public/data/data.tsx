import Image from "next/image";
import { iHiwData, iMarketData } from "../utils/interfaces";

export const marketData: iMarketData[] = [
  {
    name: "MTN Data",
    img: "/assets/mtn.png",
  },
  {
    name: "Glo Data",
    img: "/assets/glo.png",
  },
  {
    name: "Airtel Data",
    img: "/assets/airtel.png",
  },
];

export const hiwData: iHiwData[] = [
  {
    b: "Get On The Zepama App",
    p: "Set up your account and begin to walk. Connect with others and co-trekk if you want to. Give or Earn Zepacoins, ZepaMiles, Zepabages to boost your StepPower",
    sm: "View locations on an interactive map",
    img: "/assets/first_hiw.png",
  },
  {
    b: "Find ZepaStops Near You To Rest, Recharge, redeem reward Collection",
    p: "Use your rewards to enjoy essential services such as data for your phone, meals, exclusive discounts with our partner retail businesses across Africa ",
    img: "/assets/second_hiw.png",
  },
  {
    b: "Share and connect",
    p: "Connect with new people in communities on the Zepama app. Organize or participate in group walks and community events to earn more StepPower.",
    sm: "Share your walking achievements and rewards with the network.",
    img: "/assets/third_hiw.png",
  },
];

export const hiwBusinessData: iHiwData[] = [
  {
    b: "Partner with Zepama to integrate ZepaStops to your existing business.",
    p: "Fill out a simple registration form to join the Zepama network. Create a dedicated rest spot within your business, then create a detailed business profile including location, services, and exclusive deals on the app and manage using our user-friendly tools and dashboard. Promote products through Zepama's reward system",

    img: "/assets/wallet.png",
  },
  {
    b: "Attract & Engage Customers on our live Map.",
    p: "Visibility: Your business becomes visible on the ZepaStops map, attracting foot traffic from users nearby. Offer exclusive deals and promotions to ecosystem users, increasing customer engagement and loyalty. Advertising: Utilize our advertising packages to promote your services directly to our user base.",
    img: "/assets/map.png",
  },
  {
    b: "Redeem & Earn.",
    p: "ZepaCoins: Accept ZepaCoins as a form of payment for at least water and any essential services when we launch service. Easily track and manage transactions through the ZepaStops business dashboard. Benefit from increased visibility, foot traffic, and customer loyalty, ultimately driving revenue growth.",
    sm: (
      <div className="flex items-center xl:justify-between  justify-center">
        <Image
          src={"/assets/milk.png"}
          width={50}
          height={50}
          unoptimized
          className="size-[10px] md:size-[10px] scale-50 object-contain"
          alt={"milk"}
        />

        <div className="space-y-4 font-bold text-[20px]">
          <p>
            <b>Amount Earned</b>
          </p>
          <p>3400Zpc</p>
        </div>

        <Image
          src={"/assets/cup.png"}
          width={50}
          height={50}
          unoptimized
          className="size-[10px] md:size-[10px] scale-50 object-contain"
          alt={"cup"}
        />
      </div>
    ),

    img: "/assets/badge.png",
  },
];
