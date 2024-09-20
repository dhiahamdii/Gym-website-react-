import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Calendar, Clock, Users } from "lucide-react";

export default function ClassesPage() {
  const classes = [
    {
      title: "Yoga Flow",
      time: "9:00 AM",
      duration: "60 min",
      instructor: "Jane Doe",
      spots: 5,
    },
    {
      title: "HIIT Blast",
      time: "11:00 AM",
      duration: "45 min",
      instructor: "John Smith",
      spots: 3,
    },
    {
      title: "Spin Class",
      time: "2:00 PM",
      duration: "50 min",
      instructor: "Mike Johnson",
      spots: 8,
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Class Schedule</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((classItem, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{classItem.title}</CardTitle>
              <CardDescription>{classItem.instructor}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <Calendar className="inline mr-2" /> Today, {classItem.time}
              </p>
              <p>
                <Clock className="inline mr-2" /> {classItem.duration}
              </p>
              <p>
                <Users className="inline mr-2" /> {classItem.spots} spots left
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Book Class</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
