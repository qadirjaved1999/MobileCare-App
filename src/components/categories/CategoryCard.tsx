"use client";
import Link from "next/link";
import Image from "next/image";

type Props = { title: string; href: string; image?: string };

// __________Category Card Component__________
export default function CategoryCard({ title, href, image }: Props) {
  console.log(image); // debug: show image path in console

  return (
    // __________Clickable category link__________
    <Link
      href={href}
      className="flex items-center gap-4 border bg-gray-50 rounded-xl py-2 px-6"
    >
      {/* __________Category image__________ */}
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

      {/* __________Category title__________ */}
      <div className="font-medium">{title}</div>
    </Link>
  );
}
