import DealForm from "@/app/(main)/_DealForm/DealForm";
import Slider from "@/app/(main)/_Slider/Slider";
import ForYou from "./_ForYou/ForYou";
import ListEndow from "./_Endow/ListEndow";
import Service from "./_Service/Service";
import LibImg from "./_LibImg/LibImg";
import Rate from "./_Rate/Rate";

export default function Home() {
  return (
    <main>
      <Slider />
      <DealForm />
      <ForYou />
      <ListEndow />
      <Service />
      <LibImg />
      <Rate />
    </main>
  );
}
