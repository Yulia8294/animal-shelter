"use client";

import { HeartFilledIcon, PawIcon } from "@/components/icons";
import { PetCard } from "@/components/pet-card";
import Section from "@/components/section";
import { PETS_CATALOG } from "@/content/pets-catalog";
import { helpItems, helpOptions } from "@/content/texts";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import "./styles.scss";
import { ClientOnly } from "@/components/client-only";
import { Carousel } from "primereact/carousel";
import React from "react";
import { PetDetails } from "./models";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <Section classOverrides="py-9">
        <div className="w-full rounded-2xl relative transparent-overlay">
          <Image
            removeWrapper
            src="/assets/back.svg"
            className="w-full h-[80vh] object-cover z-0"
          />

          <div className="text-left z-10 absolute bottom-0 left-0 flex flex-col items-start justify-start gap-2 p-10">
            <h2 className="text-white font-semibold">Дом Собачьей Надежды</h2>
            <p className="text-white/80">Каждый хвостик заслуживает свой дом</p>
            <Button
              as={Link}
              className="px-12 py-8 mt-5 text-md rounded-full font-semibold text-white bg-accentYellow-500"
              href={"/catalog"}
              startContent={<PawIcon fill="white" />}
              variant="flat"
              size="lg"
            >
              Найти друга!
            </Button>
          </div>
        </div>
      </Section>

      <Section classOverrides="container">
        <div>
          <div className="flex justify-between">
            <h1 className="page-title">Наши хвостики</h1>

            <Button
              as={Link}
              className="px-12 py-8 mt-5 text-md rounded-full font-semibold text-white bg-accentPurple-500"
              href={"/catalog"}
              variant="flat"
              size="lg"
            >
              Смотреть всех
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {PETS_CATALOG.map((pet) => (
              <ClientOnly key={pet.id}>
                <PetCard data={pet} />
              </ClientOnly>
            ))}
          </div>
        </div>
      </Section>

      <Section classOverrides="bg-[url(/assets/bg-blob.svg)] relative w-full">
        <div className="grid grid-cols-2 container">
          <div />
          <Card isBlurred className="bg-background/50 rounded-3xl">
            <CardBody>
              <p className="text-primary-500/80 text-left text-2xl py-20 px-6">
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

        <Image
          width={500}
          height={500}
          src="assets/dog.png"
          className="scale-x-[-1] absolute bottom-0 left-0 ml-[-2.6rem] mb-[-5rem]"
        />
      </Section>

      <Section classOverrides="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center justify-center">
          {helpItems.map((item, index) => {
            return (
              <Card
                key={index}
                isBlurred
                className="rounded-3xl p-6 h-full cursor-pointer hover:scale-105"
              >
                <CardBody>
                  <Image src={item.icon} />
                </CardBody>

                <CardFooter>
                  <h4>{item.title}</h4>
                  <p>{item.subtitle}</p>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section classOverrides="bg-[url(/assets/bg-circle.svg)] w-full items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 container">
          <Card isBlurred className="bg-white/50 rounded-3xl">
            <CardBody>
              <Image
                removeWrapper
                src="assets/bg-5.jpg"
                className="w-full h-full object-cover aspect-square"
              />
            </CardBody>
          </Card>

          <Card isBlurred className="bg-white/50 rounded-3xl">
            <CardBody className="p-10 flex flex-col justify-between">
              <div>
                <h1 className="page-title">Как помочь?</h1>
                <p className="text-primary-500/80 mb-10">
                  Помоги хвостикам любым удобным способом
                </p>
              </div>

              <div className="flex flex-col gap-7">
                {helpOptions.map((option, index) => (
                  <li key={index} className={`flex gap-2 list-none`}>
                    <PawIcon />
                    <div className="text-xl">{option}</div>
                  </li>
                ))}
              </div>

              <Button
                as={Link}
                className="self-start px-12 py-8 mt-5 text-md rounded-full font-semibold text-white bg-accentPurple-500"
                href={"/help"}
                endContent={<HeartFilledIcon fill="white" />}
                variant="flat"
                size="lg"
              >
                Узнать больше
              </Button>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section classOverrides="container">
        <h1 className="page-title">Нашли дом</h1>

        <div className="flex gap-8 overflow-visible">
          <Carousel
            value={[...PETS_CATALOG, ...PETS_CATALOG, ...PETS_CATALOG]}
            circular
            numVisible={4}
            numScroll={1}
            showNavigators={false}
            autoplayInterval={3000}
            showIndicators={false}
            itemTemplate={(item: PetDetails) => (
              <div className="p-5">
                <PetCard
                  detailsOnClick={false}
                  hoverEffect={false}
                  data={item}
                  showFavoriteIcon={false}
                />
              </div>
            )}
          />
        </div>
      </Section>
    </div>
  );
}
