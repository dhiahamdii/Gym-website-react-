import Link from "next/link";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import {
  Calendar,
  ChevronRight,
  Dumbbell,
  LineChart,
  PlayCircle,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Transform Your Fitness Journey with AI
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Experience personalized workouts, expert guidance, and
                cutting-edge technology to achieve your fitness goals.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild>
                <Link href="/register">Get Started</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            Key Features
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start">
            <div className="flex flex-col items-center text-center">
              <Dumbbell className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">AI Workout Plans</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Personalized routines tailored to your goals and progress.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Calendar className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Class Scheduling</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Easy booking for a variety of fitness classes.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <LineChart className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Progress Tracking</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Visualize your fitness journey with detailed analytics.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <PlayCircle className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">Virtual Trainer</h3>
              <p className="text-gray-500 dark:text-gray-400">
                AI-powered guidance for perfect form and motivation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
            What Our Members Say
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-start">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-4 border rounded-lg"
              >
                <Image
                  src={`/placeholder.svg?height=100&width=100`}
                  alt={`Member ${i}`}
                  className="rounded-full mb-4"
                  width={100}
                  height={100}
                />
                <p className="text-gray-500 dark:text-gray-400 mb-2">
                  The AI-powered workouts have completely transformed my fitness
                  routine. Ive never felt stronger!
                </p>
                <p className="font-bold">Member {i}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your Fitness Journey?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Join FitTech Gym today and experience the future of fitness.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit">
                  Sign Up
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                By signing up, you agree to our{" "}
                <Link className="underline underline-offset-2" href="/terms">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
