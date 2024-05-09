import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";


export default function Home() {
  return (
    <>
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Your Marketplace for e-chassis{' '}
        <span className="text-red-600">goodies</span>
        .
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">Welcome to EKRacing. Where Quality meets Performance on Every drive.</p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link href="/products" className={buttonVariants()} >Browse Bestsellers</Link>
          <Button variant='ghost'>Browse Accessories &rarr;</Button>
        </div>
      </div>
    </MaxWidthWrapper>
    </>
  );
}
