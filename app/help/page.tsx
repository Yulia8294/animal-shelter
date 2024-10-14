import { PawIcon } from "@/components/icons";
import Section from "@/components/section";
import { AppText } from "@/content/texts";
import "./page.scss";

const Help = () => {
  const pageContent = AppText.HelpPage;

  const listItems = (items: string[]) => (
    <div className="flex flex-col gap-5">
      {items.map((i, idx) => (
        <li key={idx} className="app-list-item flex gap-2 list-none">
          <PawIcon className="flex-shrink-0 w-[15px]" />
          <div className="text-xl text-primary-500">{i}</div>
        </li>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col items-stretch">
      <Section classOverrides="py-8">
        <h1 className="page-title">{AppText.HelpPage.title}</h1>

        <div className="section-card flex flex-col">
          <h2>{pageContent.volunteer.title}</h2>
          {listItems(pageContent.volunteer.list)}

          <h3 className="mt-3 mb-2">
            {pageContent.volunteer.shiftDetails.title}
          </h3>
          {listItems(pageContent.volunteer.shiftDetails.list)}
        </div>
      </Section>

      <Section classOverrides="py-8">
        <div className="section-card flex flex-col">
          <h2>{pageContent.items.title}</h2>
          <h4>{pageContent.items.subtitle}</h4>
          {listItems(pageContent.items.list)}
        </div>
      </Section>

      <Section classOverrides="py-8">
        <div className="section-card flex flex-col">
          <h2>{pageContent.donate.title}</h2>
          <p>добавить реквизиты</p>
        </div>
      </Section>
    </div>
  );
};

export default Help;
