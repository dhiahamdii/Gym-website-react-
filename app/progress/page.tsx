"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Week 1", weight: 180, bodyFat: 20 },
  { name: "Week 2", weight: 178, bodyFat: 19.5 },
  { name: "Week 3", weight: 176, bodyFat: 19 },
  { name: "Week 4", weight: 174, bodyFat: 18.5 },
];

export default function ProgressPage() {
  const [activeTab, setActiveTab] = useState("weight");

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Progress</h1>
      <Card>
        <CardHeader>
          <CardTitle>Fitness Metrics</CardTitle>
          <CardDescription>
            Track your weight and body fat percentage over time
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              <TabsTrigger value="weight">Weight</TabsTrigger>
              <TabsTrigger value="bodyFat">Body Fat %</TabsTrigger>
            </TabsList>
            <TabsContent value="weight">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="weight" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="bodyFat">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="bodyFat" stroke="#82ca9d" />
                </LineChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter>
          <Button>Update Measurements</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
