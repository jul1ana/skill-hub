import { Banner } from "@/shared/Banner";

export function Main() {
  return (
    <section className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24">
      <Banner
        banner="/img01.jpg"
        heading="Develop your skills without diligence"
        subheading="A good example of a paragraph contains a topic sentence, details and a conclusion. There are many different kinds of animals that live in China."
        title="Get Started"
      />
    </section>
  );
};
