// components/categories/CategoryCard.tsx
"use client";
import Link from "next/link";
import Image from "next/image";

type Props = { title: string; href: string; image?: string };

export default function CategoryCard({ title, href, image }: Props) {
  return (
    <Link
      href={href}
      className="flex items-center gap-4 border bg-gray-50 rounded-xl py-2 px-6"
    >
      {image && (
        <div className="relative h-16 w-16">
          <Image
            src={image}
            alt={title}
            width={64} 
            height={64}
            className="object-cover"
          />
        </div>
      )}
      <div className="font-medium">{title}</div>
    </Link>
  );
}
