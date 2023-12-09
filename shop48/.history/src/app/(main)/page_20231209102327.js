import DealForm from "@/app/(main)/_DealForm/DealForm";
import Slider from "@/app/(main)/_Slider/Slider";
import ForYou from "./_ForYou/ForYou";

export default function Home() {
  return (
    <main style={{ height: "2000px" }}>
      <Slider />
      <DealForm />
      <ForYou />
    </main>
  );
}
