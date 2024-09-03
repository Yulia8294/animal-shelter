import { Image } from "@nextui-org/image";

import { dogCards, PetCard } from "@/components/pet-card";
import Section from "@/components/section";
import { Card, CardBody } from "@nextui-org/card";
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
      <Section>
        <div className="w-full relative grid grid-cols-2 gap-5">
          <div className="text-center flex flex-col items-center justify-center gap-6 font-semibold">
            <h1 className="text-white">Дом</h1>
            <h1 className="text-white">Собачьей</h1>
            <h1 className="text-white">Надежды</h1>
          </div>

          <div className="flex items-center justify-end">
            <Image width={600} src="/assets/dog.png" />
          </div>
        </div>
      </Section>

      <Section>
        <div>
          <h1 className="text-start w-full text-primary-400 font-semibold mb-8">
            Наши хвостики
          </h1>

          <div className="flex gap-8 overflow-visible">{dogCardsView}</div>
        </div>
      </Section>

      <Section classOverrides="bg-[url(/assets/bg1.png)]">
        <div className="grid grid-cols-2">
          <div></div>

          <Card isBlurred className="bg-black/50 rounded-3xl">
            <CardBody>
              <p className="text-white text-center text-2xl py-40">
                Приют Дом собачьей надежды - частный, негосударственный приют. В
                нашем приюте потерявшиеся, брошенные собаки получают шанс и
                надежду обрести семью и новый дом. <br /> <br /> Покупка кормов,
                лечение и уход за животными происходит за счёт материальных и
                финансовых пожертвований неравнодушных людей, подписчиков и
                волонтёров.
              </p>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section classOverrides="bg-[url(/assets/bg3.png)]">
        <div className="grid grid-cols-3 gap-8">
          <Card isBlurred className="bg-black/50 rounded-3xl h-40">
            <CardBody>Some text</CardBody>
          </Card>

          <Card isBlurred className="bg-black/50 rounded-3xl h-40">
            <CardBody>Some text</CardBody>
          </Card>

          <Card isBlurred className="bg-black/50 rounded-3xl h-40">
            <CardBody>Some text</CardBody>
          </Card>
        </div>
      </Section>

      <Section>
        <h1 className="text-start w-full text-primary-400 font-semibold mb-8">
          Нашли дом
        </h1>

        <div className="flex gap-8 overflow-visible">{dogCardsView}</div>
      </Section>
    </div>
  );
}
