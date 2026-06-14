import {
  Dialog,
  DialogPanel,
} from "@headlessui/react";

interface Props {
  open: boolean;
  setOpen: (
    value: boolean
  ) => void;
}

export default function CommandPalette({
  open,
  setOpen,
}: Props) {
  const commands = [
    "Analyze Repository",
    "Generate Report",
    "Compare Repositories",
    "Open Intelligence Hub",
    "View Trends",
  ];

  return (
    <Dialog
      open={open}
      onClose={() =>
        setOpen(false)
      }
      className="
      fixed
      inset-0

      z-[9999]
      "
    >
      <div
        className="
        fixed
        inset-0

        bg-black/40
        "
      />

      <div
        className="
        flex
        items-start
        justify-center

        pt-24
        "
      >
        <DialogPanel
          className="
          glass

          rounded-3xl

          w-[700px]

          shadow-2xl

          p-4
          "
        >
          <input
            placeholder="Search commands..."
            className="
            w-full

            p-4

            rounded-xl

            border

            mb-4
            "
          />

          <div className="space-y-2">
            {commands.map(
              (command) => (
                <button
                  key={command}
                  className="
                  w-full

                  text-left

                  p-4

                  rounded-xl

                  hover:bg-red-50
                  "
                >
                  {command}
                </button>
              )
            )}
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}