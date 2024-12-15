import HunzoInactiveDevelopment from "@/components/HunzoInactiveDevelopment";

const page = () => {
  return (
    <section className="w-full h-full">
      <div className="flex h-full gap-2">
        <div className="w-[80%]">
          <HunzoInactiveDevelopment />
        </div>
        <div className="bg-hunzo-text-grey w-1 h-full rounded-full" />
        <HunzoInactiveDevelopment />
      </div>
    </section>
  );
};

export default page;
