import { PawIcon } from "@/components/icons";
import Section from "@/components/section";
import { AppText } from "@/content/texts";
import "./page.scss";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";

const Help = () => {
  const pageContent = AppText.HelpPage;

  const listItems = (items: string[]) => (
    <div className="flex flex-col gap-5">
      {items.map((i, idx) => (
        <li key={idx} className="app-list-item flex gap-4 list-none">
          <PawIcon className="flex-shrink-0 w-[15px] self-center" />
          <div className="text-xl text-primary-500">{i}</div>
        </li>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col items-stretch">
      <Section classOverrides="py-8 flex-col items-center">
        <h1 className="page-title text-center">{AppText.HelpPage.title}</h1>

        <Image
          removeWrapper
          src="/assets/art2.svg"
          className="h-[500px] object-cover self-center mb-10"
        />

        <div className="section-card group flex flex-col">
          <h2>{pageContent.volunteer.title}</h2>
          {listItems(pageContent.volunteer.list)}

          <div className="mt-12 text-primary-400 text-lg">
            {pageContent.volunteer.contactPrompt}
          </div>

          <Button
            className="group-hover:animate-bounce px-12 py-8 mt-5 text-md rounded-full font-semibold text-white bg-accentYellow-500 self-center"
            variant="flat"
            size="lg"
          >
            {pageContent.volunteer.contactBtn}
          </Button>
        </div>
      </Section>

      <Section classOverrides="py-8 flex-col items-center">
        <div className="section-card group flex flex-col">
          <h2>{pageContent.items.title}</h2>
          <h4 className="mb-6">{pageContent.items.subtitle}</h4>
          {listItems(pageContent.items.list)}

          <div className="mt-12 text-primary-400 text-lg">
            {pageContent.items.contactPrompt}
          </div>

          <Button
            className="group-hover:animate-bounce px-12 py-8 mt-5 text-md rounded-full font-semibold text-white bg-accentPurple-500 self-center"
            variant="flat"
            size="lg"
          >
            {pageContent.items.contactBtn}
          </Button>
        </div>
      </Section>

      <Section classOverrides="py-8 flex-col items-center">
        <div className="group section-card flex flex-col">
          <h2>{pageContent.donate.title}</h2>

          {listItems(pageContent.donate.list)}

          <div className="mt-12 text-primary-400 text-lg">
            {pageContent.donate.contactPrompt}
          </div>

          <Button
            className="group-hover:animate-bounce px-12 py-8 mt-5 text-md rounded-full font-semibold text-white bg-accentYellow-500 self-center"
            variant="flat"
            size="lg"
          >
            {pageContent.donate.contactBtn}
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default Help;
