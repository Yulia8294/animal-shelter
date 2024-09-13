import Section from "@/components/section";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Section>{children}</Section>;
}
