/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [], // Adicione aqui os domínios das suas imagens externas
    unoptimized: process.env.NODE_ENV === 'development',
  },
  eslint: {
    ignoreDuringBuilds: false, // Mantenha false para garantir código limpo
  },
  typescript: {
    ignoreBuildErrors: false, // Mantenha false para garantir tipagem correta
  },
}

module.exports = nextConfig
