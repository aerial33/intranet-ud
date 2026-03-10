import Image from "next/image";

import { RpdadLogo } from "@/graphics/LogoRpdad/logo";
import UdccasLogo from "@/graphics/LogoUd/udccas.png";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <section className="from-brand via-brand relative mx-auto w-full overflow-hidden bg-gradient-to-br to-blue-800 p-10">
        <div className="mx-auto max-w-7xl">
          <div className="absolute inset-0 overflow-hidden">
            {/* Cercles décoratifs */}
            <div className="absolute -top-10 -right-10 size-40 rounded-full bg-white/10 blur-3xl"></div>
            <div className="absolute top-1/4 -left-20 size-60 rounded-full bg-blue-300/20 blur-2xl"></div>
            <div className="absolute right-1/4 bottom-1/4 size-32 rounded-full bg-white/15 blur-xl"></div>

            {/* Formes géométriques */}
            <div className="absolute top-20 right-20 size-8 rotate-45 bg-white/20"></div>
            <div className="absolute bottom-32 left-16 size-6 rotate-12 bg-blue-200/30"></div>
            <div className="absolute top-1/2 left-10 size-4 rotate-45 bg-white/25"></div>
          </div>

          <div className="relative z-10 mx-auto flex max-h-[800px] max-w-3xl flex-col justify-center space-y-12">
            {/* Section icône avec animation */}
            <div className="flex justify-center">
              <div className="group relative">
                <div className="absolute inset-0 rounded-full bg-white/20 blur-xl transition-all duration-300 group-hover:bg-white/30"></div>
              </div>
            </div>

            {/* Contenu textuel amélioré */}
            <div className="space-y-6 text-center text-white">
              <div className="space-y-3">
                <h1 className="text-3xl leading-tight font-bold lg:text-4xl">
                  Bienvenue sur la
                  <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    plateforme documentaire
                  </span>
                  <span className="block text-2xl font-semibold text-blue-100 lg:text-3xl">
                    RPDAD | UDCCAS
                  </span>
                </h1>
              </div>

              <div className="mx-auto h-1 w-20 bg-gradient-to-r from-transparent via-white to-transparent opacity-60"></div>

              <p className="text-lg leading-relaxed text-blue-100">
                Accédez prochainement à vos documents de manière
                <span className="font-medium text-white"> sécurisée</span> et
                <span className="font-medium text-white"> efficace</span>.
              </p>

              {/* Statistiques ou points forts */}
              <div className="grid grid-cols-3 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">100%</div>
                  <div className="text-sm text-blue-200">Sécurisé</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">24/7</div>
                  <div className="text-sm text-blue-200">Accessible</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">∞</div>
                  <div className="text-sm text-blue-200">Documents</div>
                </div>
              </div>
            </div>

            {/* Logo RPDAD avec effet */}
            <div className="border-border flex justify-center rounded-3xl border bg-white">
              <div className="group relative flex flex-col items-center justify-center space-x-10 p-10 md:flex-row">
                <div className="relative rounded-2xl bg-white/5 p-6 backdrop-blur-sm transition-all duration-300">
                  <RpdadLogo className="h-auto" width={280} height={280} />
                </div>
                <Image
                  src={UdccasLogo}
                  alt="UDCCAS logo"
                  width={280}
                  height={280}
                />
              </div>
            </div>
          </div>

          {/* Effet de particules subtil */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/3 left-1/4 size-1 animate-pulse rounded-full bg-white"></div>
            <div
              className="absolute top-1/2 right-1/3 size-1 animate-pulse rounded-full bg-white"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-1/3 left-1/3 size-1 animate-pulse rounded-full bg-white"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
}
