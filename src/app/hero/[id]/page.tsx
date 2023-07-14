import Carousel from "@/components/Carousel";
import { IHeroData } from "@/interfaces/heroes";

interface IProps {
  params: {
    id: string;
  };
}

export default function Hero({ params: { id } }: IProps) {
  const heroes: IHeroData[] = require("@/app/api/heroes/heroes.json");

  return <Carousel heroes={heroes} activeId={id} />;
}
