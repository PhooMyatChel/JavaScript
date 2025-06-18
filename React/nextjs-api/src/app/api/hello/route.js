import { NextResponse, nextResponse } from 'next/server';
export async function GET() {
    return NextResponse.json({ message: "Hello from API Route!" });
}