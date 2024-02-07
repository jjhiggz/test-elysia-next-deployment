import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/authOptions";
import { SignInButton } from "./component/SigninButton";
import { SignOutButton } from "./component/SignoutButton";
import { treaty } from "../../treaty";
import { Dogs } from "./component/Dogs";

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
  const { data: dogs } = await treaty.api.elysia.dogs.get();
  console.log({ user, dogs });

  return (
    <html lang="en">
      <body className={inter.className}>
        <SignInButton />
        <SignOutButton />
        {user}
        <Dogs />
      </body>
    </html>
  );
}
