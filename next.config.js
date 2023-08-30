/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        appPassword: process.env.APP_PASSWORD,
        userMail: process.env.USER,
        service: process.env.SERVICE,
        redirectUrl: process.env.REDIRECT_URL,
        supabasePublicKey: process.env.SUPABASE_PUBLIC_KEY,
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
