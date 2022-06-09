import { Popover } from "@headlessui/react";
import { ChatTeardropDots } from "phosphor-react";

export function Widget() {
  return (
    <Popover className="absolute right-5 bottom-5">
      <Popover.Panel>Hello world</Popover.Panel>

      <Popover.Button
        type="button"
        className="
          group
          flex
          items-center
          px-3
          h-12
          text-white
          bg-brand-500
          rounded-full
        "
      >
        <ChatTeardropDots className="w-6 h-6" />

        <span
          className="
            overflow-hidden
            max-w-0
            group-hover:max-w-xs
            transition-all
            duration-500
            ease-linear
          "
        >
          <span className="pl-2" />
          Feedback
        </span>
      </Popover.Button>
    </Popover>
  );
}
