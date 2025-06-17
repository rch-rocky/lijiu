import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const filePath = path.join(process.cwd(), 'public', 'meeting.json');

export async function GET() {
  try {
    const fileContents = await fs.readFile(filePath, 'utf8');
    const config = JSON.parse(fileContents);
    return NextResponse.json(config);
  } catch (error) {
    console.error('Error reading meeting config:', error);
    return NextResponse.json({ message: 'Failed to load meeting config' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const updatedConfig = await request.json();
    await fs.writeFile(filePath, JSON.stringify(updatedConfig, null, 2), 'utf8');
    return NextResponse.json({ message: '会议配置保存成功！' });
  } catch (error) {
    console.error('Error writing meeting config:', error);
    return NextResponse.json({ message: 'Failed to update meeting config' }, { status: 500 });
  }
}