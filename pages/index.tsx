import { Inter } from "next/font/google";
import pageAuth from "@/components/pageAuth";
import { Button } from "@mui/material";
import { signOut, userSelector } from "@/store/slices/userSlice";
import { useAppDispatch } from "@/store/store";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const Home = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const user = useSelector(userSelector);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 font-mono font-bold">
          {user?.displayName || user?.email}
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <Button
            size="large"
            onClick={async () => {
              dispatch(signOut(router));
            }}
            className="text-center"
            fullWidth
            style={{ backgroundColor: "black", color: "white" }}
          >
            Signout
          </Button>
        </div>
      </div>

      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
        <p className="text-xl font-bold">Index template original by Next.js</p>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
        <Link
          href="/gamexo"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            BACKEND TEST GAME XO{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            สร้าง Game XO ให้มี Bot แข่งกับตัวเอง ดังตัวอย่างในวีดีโอ
          </p>
        </Link>

        <Link
          href="/dashboard"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            FRONTEND TEST DASHBOARD{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            สร้าง web responsive ตามตัวอย่าง UX/UI ที่ไดรับให้เหมือนที่สุดโดยใช้
            nuxt js หรือ next js
          </p>
        </Link>

        <Link
          href="/place"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          rel="noopener noreferrer"
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            FRONTEND TEST PLACE{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            สร้างหน้าค้นหาข้อมูลร้านอาหาร โดยใช้ข้อมล API จาก Place search|Place
            API (by Google) ผลลพธ์ ที่ได้ต้องเปน JSON เท่านั้น
          </p>
        </Link>
      </div>
    </main>
  );
};

export default pageAuth(Home);
