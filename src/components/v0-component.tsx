"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// To jest komponent zastępczy - należy go zaktualizować kodem z v0.dev
export function V0Component() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Komponent z v0.dev</CardTitle>
          <CardDescription>
            To jest komponent zastępczy. Należy go zastąpić prawdziwym kodem z v0.dev.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            Tutaj powinien znaleźć się główny interfejs komponentu z v0.dev.
          </p>
          <div className="h-24 w-full bg-gray-100 rounded-md flex items-center justify-center">
            Miejsce na kod z v0.dev
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button 
            onClick={() => setLoading(!loading)} 
            variant="default"
            disabled={loading}
          >
            {loading ? "Ładowanie..." : "Załaduj dane"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}