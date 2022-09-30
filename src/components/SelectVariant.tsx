import clsx from "clsx";

import Icon from "src/components/Icon";
import { useRouter } from "next/router";

type Variant = {
  name: string;
  icon: string;
  default?: boolean;
};

interface SelectVariantProps {
  variants: Variant[];
  variant: Variant;
  setVariant: Function;
  iconSetSlug: string;
}

const SelectVariant = ({
  variants,
  variant: currentVariant,
  setVariant,
  iconSetSlug,
}: SelectVariantProps) => {
  const router = useRouter();

  const goToVariant = (variant) => {
    const slug = variant.name === defaultVariant.name ? "" : `/${variant.slug}`;

    router.push(`/store/${iconSetSlug}${slug}`);
    setVariant(variant);
  };

  const [defaultVariant] = variants;

  return (
    <div className="inline-flex items-center gap-x-2 rounded-3xl bg-white p-1 text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400">
      {variants.map((variant) => (
        <div
          onClick={() => goToVariant(variant)}
          className={clsx(
            "inline-flex h-6 w-6 cursor-pointer items-center justify-center rounded-full  hover:bg-neutral-100 dark:hover:bg-neutral-800",
            {
              "bg-neutral-200 dark:bg-neutral-700":
                currentVariant?.name === variant.name ||
                (!currentVariant && variant.name === defaultVariant.name),
            }
          )}
        >
          <Icon icon={variant.icon} size={12} />
        </div>
      ))}
    </div>
  );
};

export default SelectVariant;
