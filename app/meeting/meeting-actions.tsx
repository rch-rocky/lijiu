'use client';

import { Button } from '@/components/ui/button';
import { ExternalLink, Smartphone } from 'lucide-react';

interface MeetingActionsProps {
  meetingUrl: string;
}

export function MeetingActions({ meetingUrl }: MeetingActionsProps) {
  return (
    <div className="flex justify-center mt-8">
      <Button 
        onClick={() => window.open(meetingUrl, '_blank')}
        className="w-64 h-12 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
      >
        加入会议
      </Button>
    </div>
  );
}