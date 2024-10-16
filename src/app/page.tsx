import Header from "./components/Header";
import FeaturedProducts from "./components/FeaturedProducts";
import Benefits from "./components/Benefits/indesx";
import Testimonials from "./components/Testimonials";
import SpecialOffers from "./components/SpecialOffers";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <>
     <Header />
     <FeaturedProducts />
     <Benefits />
     <Testimonials />
     <SpecialOffers />
     <AboutUs />
    </>
    
  );
}
