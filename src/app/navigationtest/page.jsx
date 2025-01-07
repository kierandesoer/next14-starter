"use client";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const NavigationTestPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

//   Client Side navigation
  const q = searchParams.get("q");

  console.log(q);

  const handleClick = () => {
    console.log("clicked!");
    // router.push("/"); // performs a clientside navigation to the requested page
    //router.refresh("/"); will refresh the page, data etc, performs a rerender
    //router.back() // navigates to previous page in browser history
    //router.forward() // navigates to next page in browser history
    router.replace("/"); // does not add a new entry into the browser history stack
  };

  return (
    <div>
      <Link href="/" prefetch={false}>
        Click here
      </Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  );
};

export default NavigationTestPage;
