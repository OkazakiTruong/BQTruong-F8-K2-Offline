import DealForm from "@/app/(main)/_DealForm/DealForm";
import Slider from "@/app/(main)/_Slider/Slider";
import ForYou from "./_ForYou/ForYou";
import ListEndow from "./_Endow/ListEndow";

export default function Home() {
  return (
    <main>
      <Slider />
      <DealForm />
      <ForYou />
      <ListEndow />
    </main>
  );
}
