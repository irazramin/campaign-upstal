import {NextResponse} from "next/server";

export async function GET(req: Request) {
    const request = await req;

    const url: any = new URL(request.url);
    const code: any = url.searchParams.get("code");
    const clientId: any = '860ia2isxmjjdj';
    const clientSecret: any = '3dmMnn1biMh2sqWa'
    const redirectUri: any = 'http://localhost:3000/api/oauth/callback&scope=profile%20email';

    const apiEndpoint = `https://www.linkedin.com/oauth/v2/accessToken?code=${code}&grant_type=authorization_code&client_id=${clientId}&client_secret=${clientSecret}&redirect_uri=${redirectUri}`;

    try {
        const res: any = await fetch(apiEndpoint);

        const data: any = await res.json();
        if (data.access_token) {
            const destinationUrl: any = new URL("/campaign", new URL(request.url).origin);
            const response: any = NextResponse.redirect(destinationUrl, {status: 302});

            response.cookies.set("access_token", data.access_token, {
                path: "/",
                httpOnly: true,
                maxAge: 60 * 60 * 24 * 7, //
            });

            return response;
        }

    } catch (error) {
        console.error('Axios request error:', error);
        return NextResponse.error('An error occurred while fetching user data.');
    }
}
