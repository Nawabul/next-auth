import { EmailTemplate } from '@/components/eamil/mail_temp';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req:Request) {
  try {

	const {name,email} = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'Acme <test@softwarehook.in>',
      to: [email],
      subject: `${name} , it is testing`,
      react: EmailTemplate({ firstName: name }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}