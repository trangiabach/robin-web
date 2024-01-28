import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { email } = await request.json();

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['bachtran@seas.upenn.edu'],
      subject: 'Sombody is interest in Robin AI',
      html: `Sombody is interested in Robin AI: ${email}`
    });

    return NextResponse.json({ data })
  } catch (error) {
    return NextResponse.json({ error });
  }
}