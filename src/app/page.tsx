import { Edit } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <div className="my-6">
          <Edit className="h-32 w-32 mx-auto" />
        </div>
        <div className="text-center space-y-3">
          <div className="text-5xl">Welcome</div>
          <div>
            Start editing <code>/src/app/page.tsx</code>
          </div>
        </div>
      </div>
    </main>
  );
}
