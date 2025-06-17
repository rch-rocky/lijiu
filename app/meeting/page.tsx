import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MeetingActions } from './meeting-actions';

interface MeetingConfig {
  title: string;
  description: string;
  meetingUrl: string;
  startTime: string;
  topic: string;
}

async function getMeetingConfig(): Promise<MeetingConfig> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/meeting-config`, {
    cache: 'no-store' // Ensure fresh data on each request
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch config: ${response.statusText}`);
  }
  return response.json();
}

export default async function MeetingPage() {
  const config = await getMeetingConfig();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 pt-24 pb-4 px-4">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white text-center mb-6 leading-tight">{config.title}</h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 text-center mb-10 max-w-2xl">{config.description}</p>

      <Card className="w-full max-w-md bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden">
        <CardHeader className="bg-gray-100 dark:bg-gray-700 p-6 border-b border-gray-200 dark:border-gray-600">
          <CardTitle className="text-2xl font-semibold text-gray-800 dark:text-white">会议详情</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            以下是本次在线会议的详细信息，请准时参加。
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-5">
          <div className="space-y-5">
            <div className="flex items-center space-x-3">
              <span className="text-blue-500 dark:text-blue-400 text-xl align-top"><i className="ri-calendar-line"></i></span>
              <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-0">开始时间:</h3>
            </div>
            <p className="text-gray-900 dark:text-white text-lg mt-0">{config.startTime}</p>

            <div className="flex items-center space-x-3 mt-3">
              <span className="text-green-500 dark:text-green-400 text-xl align-top"><i className="ri-chat-1-line"></i></span>
              <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-0">会议主题:</h3>
            </div>
            <p className="text-gray-900 dark:text-white text-lg whitespace-pre-wrap mt-0">{config.topic}</p>

            <div className="flex items-center space-x-3 mt-3">
              <span className="text-purple-500 dark:text-purple-400 text-xl align-top"><i className="ri-link"></i></span>
              <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-0">会议链接:</h3>
            </div>
            <p className="break-all text-blue-600 dark:text-blue-400 hover:underline text-lg mt-0"><a href={config.meetingUrl} target="_blank" rel="noopener noreferrer">{config.meetingUrl}</a></p>
          </div>
        </CardContent>
      </Card>

      <MeetingActions meetingUrl={config.meetingUrl} />
    </div>
  );
}