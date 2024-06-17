import Image from "next/image";
import imageBannerMobile from '@/public/images/image-web-3-mobile.jpg';


export default function Home() {
   return (
      <div className="px-2">
         <Image
            src={imageBannerMobile}
            alt="image banner for  mobile screen"
         />
         <h1 className="font-bold text-4xl">The Bright Future of Web 3.0?</h1>
         <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
      </div>
   );
}
