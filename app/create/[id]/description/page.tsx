import { createRentaDescription } from "@/app/actions";
import { FromBottomBar } from "@/app/components/FromBottomBar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Description = ({ params }: { params: { id: string } }) => {
  return (
    <>
      <div className="w-3/5 mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors ">
          Please Decibr you rental product!
        </h2>
      </div>
      <form action={createRentaDescription}>
        <input type="hidden" name="decId" value={params.id} />
        <div className="mx-auto w-3/5 mt-10 flex flex-col gap-y-2 mb-36">
          <div className="flex flex-col gap-y-2 mb-5">
            <Label>Product Name</Label>
            <Input
              name="productName"
              type="text"
              required
              placeholder="Short and smiple"
            />
          </div>
          <div className="flex flex-col gap-y-2 mb-5">
            <Label>Specification</Label>
            <Textarea
              name="description"
              required
              placeholder="Item Details for your rental"
            />
          </div>
          <div className="flex flex-col gap-y-2 mb-5">
            <Label>Price</Label>
            <Input
              name="price"
              type="number"
              min={10}
              required
              placeholder="per day rental charge"
            />
          </div>
          <div className="flex flex-col gap-y-2 mb-5">
            <Label>Pitucres of ou prodcut</Label>
            <Input name="photo" type="file" />
          </div>
        </div>
        <FromBottomBar />
      </form>
    </>
  );
};

export default Description;
