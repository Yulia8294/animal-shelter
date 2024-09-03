import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

import { dogCards, PetCard } from "@/components/pet-card";
import "./styles.scss";

export default function Home() {
  const dogCardsView = (
    <>
      {dogCards.map((dog, index) => (
        <PetCard key={index} data={dog} />
      ))}
    </>
  );

  return (
    <div className="flex flex-col gap-16">
      <section className="w-full relative h-screen grid grid-cols-2 gap-5">
        {/* bg-gradient  */}
        <div className="text-center flex flex-col items-center justify-center gap-6 font-semibold">
          <h1 className="text-white">Дом</h1>
          <h1 className="text-white">Собачьей</h1>
          <h1 className="text-white">Надежды</h1>
        </div>

        <div className="flex items-center justify-end">
          <Image width={600} src="/assets/dog.png" />
        </div>
      </section>

      <section className="p-8 flex flex-col justify-center">
        <h1 className="text-center text-accentGreen-500 font-bold mb-12">
          Наши хвостики
        </h1>

        <div className="flex gap-8 overflow-auto overflow-visible p-5">
          {dogCardsView}
        </div>
      </section>

      <section className="flex flex-col justify-center">
        <h1 className="text-center text-accentGreen-500 font-bold mb-12">
          О приюте
        </h1>

        <div className="grid overflow-hidden bg-[url('/assets/приют4.jpg')] bg-contain grid-cols-2">
          <div></div>
          <Card isBlurred className="bg-black/60 rounded-none">
            <CardBody>
              <h4 className="text-white text-center py-40">
                Приют Дом собачьей надежды - частный, негосударственный приют. В
                нашем приюте потерявшиеся, брошенные собаки получают шанс и
                надежду обрести семью и новый дом. <br /> <br /> Покупка кормов,
                лечение и уход за животными происходит за счёт материальных и
                финансовых пожертвований неравнодушных людей, подписчиков и
                волонтёров.
              </h4>
            </CardBody>
          </Card>
        </div>
      </section>

      <section className="flex flex-col justify-center">
        <h1 className="text-center text-accentGreen-500 font-bold mb-12">
          Нашли дом
        </h1>

        <div className="flex gap-8 overflow-visible p-5">{dogCardsView}</div>
      </section>
    </div>
  );
}
