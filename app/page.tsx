import { Image } from "@nextui-org/image";

import { PawIcon, PresentIcon, VolunteerIcon } from "@/components/icons";
import { PetCard, dogCards } from "@/components/pet-card";
import Section from "@/components/section";
import { Card, CardBody } from "@nextui-org/card";
import "./styles.scss";

const helpItems = [
  {
    title: "Помочь приюту",
    icon: PresentIcon,
  },
  {
    title: "Наши хвостики",
    icon: PawIcon,
  },
  {
    title: "Стать волонтером",
    icon: VolunteerIcon,
  },
];

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

          <Card isBlurred className="bg-background/50 rounded-3xl">
            <CardBody>
              <p className="text-primary-500 text-center text-2xl py-40 px-6">
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

      <Section>
        <div className="grid grid-cols-3 gap-10 items-center justify-center">
          {helpItems.map((item, index) => {
            let Icon = item.icon;

            return (
              <Card
                key={index}
                isBlurred
                className="bg-background/50 rounded-3xl p-6 cursor-pointer hover:scale-105 accent-border"
              >
                <CardBody>
                  <div className="flex flex-col items-center gap-4">
                    <Icon size={80} className="fill-accentYellow-500" />
                    <h4>{item.title}</h4>
                  </div>
                </CardBody>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section classOverrides="bg-[url(/assets/bg3.png)]">
        <div className=" h-[500px]"></div>
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
