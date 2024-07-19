import Image from "next/image";
import { CustomSection } from "../layout/CustomSection";
import { Mosaic } from "./Mosaic";

export function OurTeam() {
  return (
    <CustomSection style="pt-[240px]">
      <div className="col-span-12 mb-[105px]">
        <p className="text-6xl">Our magic team</p>
      </div>
      <div className="col-span-12">
        <Mosaic />
      </div>
    </CustomSection>
  );
}
