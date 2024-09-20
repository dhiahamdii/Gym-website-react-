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
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import { Input } from "@/app/components/ui/input";

export default function CommunityPage() {
  const posts = [
    {
      author: "Jane Doe",
      avatar: "JD",
      content:
        "Just completed my first 5K! Thanks to everyone for the support and motivation!",
    },
    {
      author: "John Smith",
      avatar: "JS",
      content:
        "Looking for a workout buddy for morning gym sessions. Anyone interested?",
    },
    {
      author: "Mike Johnson",
      avatar: "MJ",
      content: "New personal best on bench press today! Hard work pays off!",
    },
  ];

  return (
    // <div className="container mx-auto px-4 py-8">
    //   <h1 className="text-3xl font-bold mb-8">Community Forum</h1>
    <div className="container mx-auto px-4 py-8 dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold mb-8">Community Forum</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Create a Post</CardTitle>
          <CardDescription>
            Share your thoughts, achievements, or questions with the community
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Input placeholder="What's on your mind?" />
        </CardContent>
        <CardFooter>
          <Button>Post</Button>
        </CardFooter>
      </Card>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center">
                <Avatar className="mr-2">
                  <AvatarImage
                    src={`/placeholder.svg?height=40&width=40`}
                    alt={post.author}
                  />
                  <AvatarFallback>{post.avatar}</AvatarFallback>
                </Avatar>
                <CardTitle>{post.author}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p>{post.content}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="mr-2">
                Like
              </Button>
              <Button variant="outline">Comment</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
