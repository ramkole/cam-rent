import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import dUser from "@/public/dUser.png";
import { DropdownMenuIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";
import { createRentalItem } from "../actions";

const UserNav = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const createMyrenatlId = createRentalItem.bind(null, {
    userId: user?.id as string,
  });

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
          <Image
            src={user?.picture ? dUser : dUser}
            className="rounded-full h-8 w-8 hidden lg:block"
            alt="deafult user img"
          />
          {user?.given_name}
          <DropdownMenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        {user ? (
          <>
            <DropdownMenuItem>
              <form className="w-full" action={createMyrenatlId}>
                <button className="w-full flex font-semibold" type="submit">
                  Your Rentals
                </button>
              </form>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/my-rentals">My Rentals</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/favorites">My Favorites</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href="/bookings">My Booking</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogoutLink className="w-full">LogOut</LogoutLink>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem>
              <RegisterLink className="w-full">Register</RegisterLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LoginLink className="w-full">Login</LoginLink>
            </DropdownMenuItem>
          </>
        )}{" "}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNav;
