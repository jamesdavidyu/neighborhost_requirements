import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
} from "@clerk/nextjs";
// import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neighborhost Requirements",
  description: "Document to record the scope of the neighborhost app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <div>
              <h1>Requirements</h1>
            </div>
            <div>{children}</div>
          </SignedIn>
        </body>
      </html>
    </ClerkProvider>
  );
}
