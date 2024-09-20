import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Dumbbell } from "lucide-react";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        <Dumbbell className="h-6 w-6 mr-2" />
        <span className="font-bold text-xl">FitTech Gym</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/workouts"
        >
          Workouts
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/classes"
        >
          Classes
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/progress"
        >
          Progress
        </Link>
        <Link
          className="text-sm font-medium hover:underline underline-offset-4"
          href="/community"
        >
          Community
        </Link>
      </nav>
      <Link href="/login">
        <Button className="ml-4" variant="outline">
          Sign In
        </Button>
      </Link>
    </header>
  );
}
