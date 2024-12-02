import { ClientOnly } from "@/components/client-only";
import { HeartFilledIcon, PawIcon } from "@/components/icons";
import { PetCard } from "@/components/pet-card";
import Section from "@/components/section";
import { AppText, helpItems, helpOptions } from "@/content/texts";
import { fetchDogs } from "@/repository/api";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import React, { FC } from "react";

const Home: FC = async () => {
  const content = AppText.MainPage;
  const catalog = await fetchDogs();

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
            <h4 className="text-white/90">{content.subtitle}</h4>
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

      <Section classOverrides="container">
        <div>
          <div className="flex justify-between">
            <h1 className="page-title">{content.dogsGallery.title}</h1>

            <Button
              as={Link}
              className="text-md mt-5 rounded-full bg-accentPurple-500 px-12 py-8 font-semibold text-white"
              href={"/catalog"}
              variant="flat"
              size="lg"
            >
              {content.dogsGallery.actionBtn}
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {catalog.map((pet) => {
              return (
                <ClientOnly key={pet.id}>
                  <PetCard data={pet} />
                </ClientOnly>
              );
            })}
          </div>
        </div>
      </Section>

      <Section classOverrides="bg-[url(/assets/bg-blob.svg)] relative w-full">
        <div className="container grid grid-cols-2">
          <div />
          <Card isBlurred className="rounded-3xl bg-background/60">
            <CardBody>
              <p
                dangerouslySetInnerHTML={{ __html: content.about.description }}
                className="px-6 py-20 text-left text-3xl text-primary-500/80"
              />
            </CardBody>
          </Card>
        </div>

        <Image
          width={500}
          height={500}
          src="assets/dog.png"
          className="absolute bottom-0 left-0 mb-[-5rem] ml-[-2.6rem] scale-x-[-1]"
        />
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
                  <h4>{item.title}</h4>
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

      {/* <Section classOverrides="container">
        <h1 className="page-title">{content.foundHome.title}</h1>

        <div className="flex gap-8 overflow-visible">
          <PetsCarousel items={catalog} />
        </div>
      </Section> */}
    </div>
  );
};

export default Home;
