import { CustomSection } from "../layout/CustomSection";

export function Statistics() {
  return (
    <CustomSection>
      <div className="col-span-8 col-start-3 flex justify-between w-full">
        <div className="flex flex-col items-center">
          <p className="text-6xl font-bold">5</p>
          <p className="text-md uppercase font-light">Active Projects</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-6xl font-bold">50</p>
          <p className="text-md uppercase font-light">Happy Clients</p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-6xl font-bold">40</p>
          <p className="text-md uppercase font-light">
            Years Collective Experience
          </p>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-6xl font-bold">3</p>
          <p className="text-md uppercase font-light">Awards and Accolades</p>
        </div>
      </div>
    </CustomSection>
  );
}
