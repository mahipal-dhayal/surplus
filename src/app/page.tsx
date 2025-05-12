import Image from "next/image";
import Footer from "./components/Footer";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      <Header />
      <div className="flex justify-center items-center ">
      Hii this is home page
      </div>
      <Footer />
      

    </div>
    
  );

}
