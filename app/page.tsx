import { ClientOnly } from "@/components/client-only";
import { Blob1, DogIcon, HeartFilledIcon, PawIcon } from "@/components/icons";
import { PetCard } from "@/components/pet-card";
import PetsCarousel from "@/components/pets-carousel";
import Section from "@/components/section";
import { AppText, helpItems, helpOptions } from "@/content/texts";
import { fetchCatalog } from "@/repository/api";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import React, { FC } from "react";
import { PetStatus } from "./models";

const Home = async () => {
  const content = AppText.MainPage;
  const catalog = await fetchCatalog([PetStatus.SHELTER], 6);
  const foundHomeCatalog = await fetchCatalog([PetStatus.HOME])

  const catalogButton = (title: string) => (
    <Button
      as={Link}
      className="text-lg self-center rounded-full bg-accentYellow-500 px-20 py-12 font-semibold text-white"
      href={"/catalog"}
      variant="flat"
      endContent={<DogIcon fill="white" />}
    >
      {title}
    </Button>
  )

  const petIntro =
    (
      <div className="flex justify-center items-center w-full m-auto">
        <div className="relative flex flex-col items-center w-full md:w-[60%]">

          <div className="flex flex-row items-center gap-10 relative">

            <Image src="/assets/dog2.png" className="z-20 w-48 border-gray-900"
              style={{ transform: "translateY(37.5%)" }}
            />

            <h1 className="page-title w-fit text-end text-3xl font-bold mt-[30%] tracking-wide">
              Наши хвостики
            </h1>
          </div>



          {/* Subtext */}
          <div className="z-10 bg-accentGreen-400 px-6 py-8 w-full rounded-full">
            <p className="pl-40 text-xl font-semibold text-white text-center">
              Давайте знакомиться!
            </p>
          </div>
        </div>
      </div>
    )

  return (
    <div className="flex flex-col items-center gap-16">
      <Section classOverrides="py-9">
        <div className="transparent-overlay relative w-full rounded-2xl">
          <Image
            removeWrapper
            src="/assets/back.svg"
            className="z-0 h-[80vh] w-full object-cover"
          />

          <div className="absolute bottom-0 left-0 right-0 top-0 z-10 flex flex-col items-center justify-end gap-2 p-10 text-center">
            <h1 className="font-semibold text-white">{content.title}</h1>
            <h4 className="text-white/90 font-semibold">{content.subtitle}</h4>
            <Button
              as={Link}
              className="mt-5 rounded-full bg-accentYellow-500 px-16 py-10 text-lg font-semibold text-white"
              href={"/catalog"}
              startContent={<PawIcon fill="white" />}
              variant="flat"
              size="lg"
            >
              {content.actionBtn}
            </Button>
          </div>
        </div>
      </Section>

      <Section classOverrides="container pt-0">
        <div className="flex flex-col gap-8">

          <div className="mb-8">
            {petIntro}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {catalog.map((pet) => {
              return (
                <ClientOnly key={pet.id}>
                  <PetCard data={pet} />
                </ClientOnly>
              );
            })}
          </div>

          <div className="m-auto">
            {catalogButton(content.dogsGallery.actionBtnBottom)}
          </div>
        </div>
      </Section>

      <Section classOverrides="bg-[url(/assets/bg-blob.svg)] relative w-full">
        <div className="flex flex-col lg:flex-row gap-8">

          <div className="hidden lg:flex relative flex-1 max-w-[40%]">
            <Image
              width={500}
              height={500}
              removeWrapper
              src="assets/dog.png"
              className="absolute bottom-0 left-0 mb-[-5rem] ml-[-2.6rem] scale-x-[-1] object-cover"
            />
          </div>



          <Card className="rounded-3xl flex-1 bg-accentGreen-400">
            <CardBody>
              <div>
                <Image
                  removeWrapper
                  className="lg:hidden"
                  src="assets/приют3.png"
                />

                <p
                  dangerouslySetInnerHTML={{ __html: content.about.description }}
                  className="px-6 py-10 text-left text-3xl leading-10 text-white"
                />
              </div>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section classOverrides="container">
        <div className="grid grid-cols-1 items-center justify-center gap-10 md:grid-cols-2 lg:grid-cols-3">
          {helpItems.map((item, index) => {
            return (
              <Card
                key={index}
                isBlurred
                className="h-full cursor-pointer rounded-3xl p-6 hover:scale-105"
              >
                <CardBody>
                  <Image src={item.icon} />
                </CardBody>

                <CardFooter>
                  <h3 className="w-full text-center font-semibold">{item.title}</h3>
                  <p>{item.subtitle}</p>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section classOverrides="bg-[url(/assets/bg-circle.svg)] w-full items-center">
        <div className="container grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card isBlurred className="rounded-3xl bg-white/60">
            <CardBody>
              <Image
                removeWrapper
                src="assets/bg-5.jpg"
                className="aspect-square h-full w-full object-cover"
              />
            </CardBody>
          </Card>

          <Card isBlurred className="rounded-3xl bg-white/60">
            <CardBody className="flex flex-col justify-between p-8">
              <div>
                <h1 className="page-title">{content.help.title}</h1>
                <h4 className="mb-8 text-primary-500/80">
                  {content.help.subtitle}
                </h4>
              </div>

              <div className="flex flex-col gap-7">
                {helpOptions.map((option, index) => (
                  <li
                    key={index}
                    className={`app-list-item flex list-none gap-2`}
                  >
                    <PawIcon />
                    <div className="text-2xl font-semibold text-primary-400">
                      {option}
                    </div>
                  </li>
                ))}
              </div>

              <Button
                as={Link}
                className="mt-5 self-start rounded-full bg-accentPurple-500 px-12 py-8 text-xl font-semibold text-white"
                href={"/help"}
                endContent={<HeartFilledIcon fill="white" />}
                variant="flat"
                size="lg"
              >
                {content.help.actionBtn}
              </Button>
            </CardBody>
          </Card>
        </div>
      </Section>

      <Section classOverrides="container">
        <h1 className="page-title">{content.foundHome.title}</h1>

        <div className="flex gap-8 overflow-visible">
          <PetsCarousel items={foundHomeCatalog} />
        </div>
      </Section>
    </div>
  );
};

export default Home;
