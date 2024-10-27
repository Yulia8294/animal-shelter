"use client";

import { HeartFilledIcon, PawIcon } from "@/components/icons";
import { PetCard } from "@/components/pet-card";
import Section from "@/components/section";
import { PETS_CATALOG } from "@/content/pets-catalog";
import { AppText, helpItems, helpOptions } from "@/content/texts";
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
  const content = AppText.MainPage;

  return (
    <div className="flex flex-col gap-16 items-center">
      <Section classOverrides="py-9">
        <div className="w-full rounded-2xl relative transparent-overlay">
          <Image
            removeWrapper
            src="/assets/back.svg"
            className="w-full h-[80vh] object-cover z-0"
          />

          <div className="text-center z-10 absolute bottom-0 left-0 right-0 top-0 flex flex-col items-center justify-end gap-2 p-10">
            <h1 className="text-white font-semibold">{content.title}</h1>
            <h4 className="text-white/90">{content.subtitle}</h4>
            <Button
              as={Link}
              className="px-16 py-10 mt-5 text-lg rounded-full font-semibold text-white bg-accentYellow-500"
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
              className="px-12 py-8 mt-5 text-md rounded-full font-semibold text-white bg-accentPurple-500"
              href={"/catalog"}
              variant="flat"
              size="lg"
            >
              {content.dogsGallery.actionBtn}
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            {PETS_CATALOG.map((pet) => {
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
        <div className="grid grid-cols-2 container">
          <div />
          <Card isBlurred className="bg-background/60 rounded-3xl">
            <CardBody>
              <p
                dangerouslySetInnerHTML={{ __html: content.about.description }}
                className="text-primary-500/80 text-left text-3xl py-20 px-6"
              />
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
          <Card isBlurred className="bg-white/60 rounded-3xl">
            <CardBody>
              <Image
                removeWrapper
                src="assets/bg-5.jpg"
                className="w-full h-full object-cover aspect-square"
              />
            </CardBody>
          </Card>

          <Card isBlurred className="bg-white/60 rounded-3xl">
            <CardBody className="p-8 flex flex-col justify-between">
              <div>
                <h1 className="page-title">{content.help.title}</h1>
                <h4 className="text-primary-500/80 mb-8">
                  {content.help.subtitle}
                </h4>
              </div>

              <div className="flex flex-col gap-7">
                {helpOptions.map((option, index) => (
                  <li
                    key={index}
                    className={`flex gap-2 list-none app-list-item`}
                  >
                    <PawIcon />
                    <div className="text-primary-400 text-2xl font-semibold">
                      {option}
                    </div>
                  </li>
                ))}
              </div>

              <Button
                as={Link}
                className="self-start px-12 py-8 mt-5 text-xl rounded-full font-semibold text-white bg-accentPurple-500"
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
