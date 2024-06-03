/** @type {import('next').NextConfig} */

import path from 'path';

const nextConfig = {
    reactStrictMode: false,
    sassOptions: {
        includePaths: [path.join(process.cwd(), 'styles')],
    },
};

export default nextConfig;