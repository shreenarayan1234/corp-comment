import Container from "@/components/Container";
import FeedbackItemsContextProvider from "@/components/FeedbackItemsContextProvider";
import Footer from "@/components/Footer";
import Hashtag from "@/components/Hashtag";

export default function Home() {
  return (
    <div className="relative flex justify-center h-[850px]">
      <Footer />
      <FeedbackItemsContextProvider>
      <Container/>
      <Hashtag/>
      </FeedbackItemsContextProvider>
     
    </div>
  );
}