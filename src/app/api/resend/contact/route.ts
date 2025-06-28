import { NextResponse } from 'next/server';
import { Resend } from 'resend';
// import { render } from '@react-email/render';
import ContactEmail from '@/app/emails/ContactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, phone, referer, message } = await req.json();


  try {
    // const emailHtml = render(<ContactEmail name={name} email={email} message={message} />);

    await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: 'nnoromduncan@gmail.com',
        subject: 'New Contact Form Message',
        react: ContactEmail({ name: name, email: email, message: message}),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
