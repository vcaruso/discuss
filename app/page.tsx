import { Button } from "@nextui-org/react";
import * as actions from '@/actions';
import { auth } from '@/auth';
import Image from "next/image";
import Profile from "@/components/profile";

export default async function Home() {

  const session = await auth();

  return (
    <div>
      <form action={actions.signIn}>
          <Button type="submit">Sign In</Button>
      </form>
      <form action={actions.signOut}>
          <Button type="submit">Sig Out</Button>
      </form>
      {
          session?.user ? 
              <div>
                  {JSON.stringify(session.user)}
                  <Image alt="avatar" width={256} height={256} src={session?.user?.image!} />
              </div> : <div>Signed Out</div>
      }
      <Profile />
    </div>
   
  )
}
