import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Dumbbell, Clock, Zap } from "lucide-react";

export default function WorkoutsPage() {
  const workouts = [
    {
      title: "Full Body Blast",
      duration: "45 min",
      intensity: "High",
      icon: Dumbbell,
    },
    {
      title: "Core Crusher",
      duration: "30 min",
      intensity: "Medium",
      icon: Zap,
    },
    {
      title: "Cardio Kickstart",
      duration: "20 min",
      intensity: "Low",
      icon: Clock,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">
        AI-Powered Workout Recommendations
      </h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {workouts.map((workout, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                <workout.icon className="mr-2 h-6 w-6" />
                {workout.title}
              </CardTitle>
              <CardDescription>
                Personalized for your fitness level
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <Clock className="inline mr-2" /> Duration: {workout.duration}
              </p>
              <p>
                <Zap className="inline mr-2" /> Intensity: {workout.intensity}
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Start Workout</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
