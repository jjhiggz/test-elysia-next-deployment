import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/authOptions";
import { signIn } from "next-auth/react";
import { SignInButton } from "./component/SigninButton";
import { SignOutButton } from "./component/SignoutButton";
import { redirect } from "next/navigation";
import { treaty } from "../../treaty";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);

  const user = session?.user?.name;

  const { data: dogs, status } = await treaty.api.elysia.dogs.get();
  console.log({
    dogs,
    status,
  });
  return (
    <html lang="en">
      <body className={inter.className}>
        <SignInButton />
        <SignOutButton />
        {user}
        {dogs?.map?.((dog) => (
          <li key={dog}>{dog}</li>
        ))}
      </body>
    </html>
  );
}
