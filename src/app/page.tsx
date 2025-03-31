import { V0Component } from "@/components/v0-component";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="w-full max-w-3xl space-y-8">
        <h1 className="text-3xl font-bold text-center">
          Witaj w projekcie Shadcn UI z v0.dev
        </h1>
        
        <div className="flex justify-center">
          <V0Component />
        </div>
        
        <p className="text-center text-sm text-muted-foreground">
          Komponent został zintegrowany z projektem. Po uzyskaniu dostępu do kodu z v0.dev, 
          zaktualizuj plik <code>src/components/v0-component.tsx</code>.
        </p>
      </div>
    </main>
  );
}