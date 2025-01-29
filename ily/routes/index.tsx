import { Head } from "$fresh/runtime.ts";
import LoveButtons from "../islands/LoveButtons.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yes/No Buttons</title>
        <style>
          {`
            @keyframes float {
              0% { transform: translateY(0); opacity: 1; }
              100% { transform: translateY(-100vh); opacity: 0; }
            }
            .animate-float {
              animation: float 5s linear infinite;
            }
          `}
        </style>
      </Head>
      <body class="flex items-center justify-center h-screen bg-gray-100 relative overflow-hidden">
        <LoveButtons />
      </body>
    </>
  );
}
