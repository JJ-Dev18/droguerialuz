import { ContentCarouselBaner } from "./carouselStyles";
import Image from 'next/image'
const CarouselBanner = () => {
  return (
    <ContentCarouselBaner>
      <Image src="/index/carousel/banner/banner.webp" alt="banner carousel" layout="intrinsic" width="2000px" height="550px" />
    </ContentCarouselBaner>
  );
}
 
export default CarouselBanner;