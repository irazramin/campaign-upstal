
import nodemailer from 'nodemailer';
import {NextResponse} from "next/server";

export async function POST(req: Request) {
    const body = await req.json()
    const { to, subject, text } = body;

    console.log('LOG FROM ROUTE', process.env.appPassword)

    const transporter = nodemailer.createTransport({
        service: process.env.service,
        auth: {
            user: process.env.userMail,
            pass: process.env.appPassword,
        },
    });

    try {
        await transporter.sendMail({
            from: 'irazramin@gmail.com',
            to,
            subject,
            text,
        });

        return NextResponse.json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        return NextResponse.json({ message: 'Email sending failed' });
    }
}
