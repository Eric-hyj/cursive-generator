import Link from "next/link";

type BreadcrumbsProps = {
  items: { label: string; href?: string }[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="breadcrumbs">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`}>
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            item.label
          )}
          {index < items.length - 1 ? " / " : ""}
        </span>
      ))}
    </nav>
  );
}
