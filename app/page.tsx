import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./api/auth/authOptions";

import coffee from "@/public/images/monika-borys-3zN4hy-IwVo-unsplash.jpg";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main>
      <Image src={coffee} alt="Coffee" />
    </main>
  );
}
