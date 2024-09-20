// app/login/page.tsx
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";

export default function LoginPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h1 className="text-3xl font-bold mb-8">Login</h1>
      <form>
        <div className="mb-4">
          <Input type="email" placeholder="Email" required />
        </div>
        <div className="mb-4">
          <Input type="password" placeholder="Password" required />
        </div>
        <Button className="w-full">Login</Button>
      </form>
    </div>
  );
}
