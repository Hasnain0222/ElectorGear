
'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-6">
            <Avatar className="h-24 w-24">
              <AvatarFallback className="text-3xl">
                <User className="h-10 w-10" />
              </AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-headline text-3xl font-bold">Guest User</h1>
              <p className="text-lg text-muted-foreground">
                Please sign in to see your profile.
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="mt-6 text-center text-muted-foreground">
            <p>Profile functionality is disabled because the database is not connected.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
