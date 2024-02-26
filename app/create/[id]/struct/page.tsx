"use client";
import { CategoryData } from "@/app/lib/CategoryData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React, { useState } from "react";

const AddMyRentalItem = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-color">
          Descibe your product for Rent...!
        </h2>
      </div>
      <form>
        <div className="grid grid-cols-2  w-3/5 mx-auto gap-8 mt-10 mb-36">
          {CategoryData.map((component) => (
            <Card
              className={` ${
                activeCard === component.id ? "border-primary" : ""
              } flex justify-center items-center p-3`}
              onClick={() => setActiveCard(component.id)}
            >
              {component.component(70)}
            </Card>
          ))}
        </div>
        <div className="fixed w-full bottom-0 z-10 bg-yellow-100 border-t h-24">
          <div className="flex items-center justify-between mx-auto px-5 lg:px-10 h-full">
            <Button variant="secondary" size="lg">
              Cancel
            </Button>
            <Button size="lg">Save</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddMyRentalItem;
