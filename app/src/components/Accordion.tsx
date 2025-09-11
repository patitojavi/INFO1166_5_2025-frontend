import { useEffect, useRef, useState } from "react";

type ItemProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  open?: boolean;
  onToggle?: () => void;
};

export function AccordionItem({
  title,
  children,
  defaultOpen = false,
  open,
  onToggle,
}: ItemProps) {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = open ?? internalOpen;
  const toggle = onToggle ?? (() => setInternalOpen((v) => !v));

  const ref = useRef<HTMLDivElement>(null);
  const [maxH, setMaxH] = useState<number>(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (isOpen) {
      setMaxH(el.scrollHeight);
    } else {
      setMaxH(0);
    }
  }, [isOpen, children]);

  return (
    <div className="rounded-xl border bg-white">
      {/* Header */}
      <button
        type="button"
        onClick={toggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between rounded-xl bg-gradient-to-b from-gray-100 to-gray-200 px-4 py-3 text-gray-800"
      >
        <span className="mx-auto text-center text-[17px] font-semibold leading-none">
          {title}
        </span>

        <span className="ml-3 inline-flex h-7 w-7 items-center justify-center rounded-full border-2 border-blue-500 text-blue-600">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* Content */}
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: maxH }}
      >
        <div ref={ref} className="px-4 pb-4 pt-3">
          {children}
        </div>
      </div>
    </div>
  );
}

export function Accordion({ children }: { children: React.ReactNode }) {
  return <div className="space-y-3">{children}</div>;
}
