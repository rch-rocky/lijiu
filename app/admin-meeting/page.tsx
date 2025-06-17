'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';

interface MeetingConfig {
  title: string;
  description: string;
  meetingUrl: string;
  startTime: string;
  topic: string;
  buttonTextBrowser: string;
  buttonTextApp: string;
}

export default function AdminMeetingPage() {
  const [config, setConfig] = useState<MeetingConfig | null>(null);
  const [editStartTime, setEditStartTime] = useState('');
  const [editTopic, setEditTopic] = useState('');
  const [editMeetingUrl, setEditMeetingUrl] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch('/meeting.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: MeetingConfig = await response.json();
        setConfig(data);
        setEditStartTime(data.startTime);
        setEditTopic(data.topic);
        setEditMeetingUrl(data.meetingUrl);
      } catch (error) {
        console.error('Failed to fetch meeting config:', error);
        toast({
          title: '错误',
          description: '无法加载会议配置。',
          variant: 'destructive',
        });
      }
    };
    fetchConfig();
  }, [toast]);

  const handleLogin = () => {
    if (password === 'admin') { // 简单的硬编码密码
      setIsAuthenticated(true);
      toast({
        title: '成功',
        description: '登录成功。',
      });
    } else {
      toast({
        title: '错误',
        description: '密码不正确。',
        variant: 'destructive',
      });
    }
  };

  const handleSave = async () => {
    if (!config) return;

    const updatedConfig = {
      ...config,
      startTime: editStartTime,
      topic: editTopic,
      meetingUrl: editMeetingUrl,
    };

    try {
      const response = await fetch('/api/meeting-config', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedConfig),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setConfig(updatedConfig);
      toast({
        title: '成功',
        description: result.message,
      });
    } catch (error) {
      console.error('Failed to save meeting config:', error);
      toast({
        title: '错误',
        description: '保存会议配置失败。',
        variant: 'destructive',
      });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="container mx-auto pt-24 pb-10 px-4 flex flex-col items-center justify-center min-h-screen-nonav">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-2xl">管理员登录</CardTitle>
            <CardDescription>请输入密码以访问管理界面。</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="password">密码</Label>
              <Input 
                id="password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleLogin();
                  }
                }}
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" onClick={handleLogin}>登录</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  if (!config) {
    return <div className="container mx-auto pt-24 pb-10 px-4 text-center">加载中...</div>;
  }

  return (
    <div className="container mx-auto pt-24 pb-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-8">管理会议信息</h1>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>编辑会议信息</CardTitle>
          <CardDescription>
            在此处修改会议的开始时间和主题。
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="startTime">开始时间</Label>
              <Input 
                id="startTime" 
                value={editStartTime} 
                onChange={(e) => setEditStartTime(e.target.value)} 
                placeholder="例如: 2023年10月27日 10:00 AM"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="topic">会议主题</Label>
              <textarea 
                id="topic" 
                value={editTopic} 
                onChange={(e) => setEditTopic(e.target.value)} 
                placeholder="例如: 产品发布与技术交流"
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="meetingUrl">会议链接</Label>
              <Input 
                id="meetingUrl" 
                value={editMeetingUrl} 
                onChange={(e) => setEditMeetingUrl(e.target.value)} 
                placeholder="例如: https://meeting.tencent.com/xxxx"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button onClick={handleSave}>保存更改</Button>
        </CardFooter>
      </Card>
    </div>
  );
}