import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Link from "next/link";

export default function Dropdown() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        Menu
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Item>
            <Link href="/">Home</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Link href="/profile">Profile</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
