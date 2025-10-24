// src/app/not-found.tsx
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        width: "100%",
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#1f2937",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
          flexWrap: "wrap",
        }}
      >
        {/* Left */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            overflow: "hidden",
            gap: "1rem",
            marginTop: "5rem"
          }}
        >
          <h1
            style={{
              width: "100%",
              fontWeight: "bold",
              color: "#d1d5db",
              fontSize: "10rem",
              lineHeight: 1,
              margin: 0,
            }}
          >
            404
          </h1>

          <p
            style={{
              color: "#6b7280",
              maxWidth: "25rem",
              fontSize: "1rem",
            }}
          >
            The page you are looking for was moved, removed, renamed, or might never have existed.
          </p>

          <Link
            href="/"
            style={{
              marginTop: "1rem",
              display: "inline-block",
              borderRadius: "9999px",
              backgroundColor: "#000",
              color: "#fff",
              padding: "0.5rem 1.5rem",
              fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Back to Home
          </Link>
        </div>

        {/* Right — Image */}
        <Image
          src="/images/banners/not-found.jpg"
          alt="404 - Not Found"
          width={500}
          height={400}
          priority
          style={{
            width: "600px",
            height: "auto",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      </div>
    </main>
  );
}
