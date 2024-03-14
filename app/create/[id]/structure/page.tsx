"use client";
import { createRentalPage } from "@/app/actions";
import { FromBottomBar } from "@/app/components/FromBottomBar";
import { CategoryData } from "@/app/lib/CategoryData";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const AddMyRentalItem = ({ params }: { params: { id: string } }) => {
  const [activeCard, setActiveCard] = useState<string | undefined>(undefined);

  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-color">
          Descibe your product for Rental...!
        </h2>
      </div>
      <form action={createRentalPage}>
        <input type="hidden" name="rentalId" value={params.id} />
        <div className="grid grid-cols-2  w-3/5 mx-auto gap-8 mt-10 mb-36">
          <input
            type="hidden"
            name="rentalItemName"
            value={activeCard as string}
          />
          {CategoryData.map((component) => (
            <Card
              className={` ${
                activeCard === component.productTitle ? "border-primary" : ""
              } flex justify-center items-center p-3`}
              onClick={() => setActiveCard(component.productTitle)}
            >
              {component.component(70)}
            </Card>
          ))}
        </div>
        <FromBottomBar />
      </form>
    </>
  );
};

export default AddMyRentalItem;
