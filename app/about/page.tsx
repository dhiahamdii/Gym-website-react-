// app/about/page.tsx
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>About Us</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-4 md:mb-0">
              <Image
                src="/path/to/you/image.jpg" // Replace with your image path
                alt="About Us"
                width={500} // Adjust width as needed
                height={300} // Adjust height as needed
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <h2 className="text-xl font-semibold">Our Mission</h2>
              <p>
                We are dedicated to providing the best services and resources to
                our community. Our goal is to foster a supportive and inclusive
                environment for everyone.
              </p>
              <h2 className="text-xl font-semibold mt-4">Our Vision</h2>
              <p>
                To be a leader in our field, inspiring and empowering
                individuals to achieve their fitness and wellness goals.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
