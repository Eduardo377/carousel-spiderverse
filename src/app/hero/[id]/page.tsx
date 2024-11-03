import Carousel from "@/components/Carousel";
import { IHeroData } from "@/interfaces/heroes";

interface IProps {
  params: {
    id: string;
  };
}

export default async function Hero({ params }: { params: { id: string } }) {
  const { id } = await params; // Aguarde os params

  const heroes: IHeroData[] = require("@/app/api/heroes/heroes.json");

  return <Carousel heroes={heroes} activeId={id} />;
}