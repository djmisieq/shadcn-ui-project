import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-md space-y-8">
        <h1 className="text-3xl font-bold text-center">
          Witaj w projekcie Shadcn UI
        </h1>
        
        <Card>
          <CardHeader>
            <CardTitle>Przykładowa karta</CardTitle>
            <CardDescription>Opis przykładowej karty z shadcn/ui</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Ten projekt został utworzony z wykorzystaniem Next.js oraz komponentów shadcn/ui.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline">Anuluj</Button>
            <Button>Zapisz</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}