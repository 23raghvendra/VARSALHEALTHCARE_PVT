"use client";

import { useState, Fragment } from "react";
import Image from "next/image";
import { products } from "@/constants/productsData";
import { ExternalLink, ShieldCheck, CircleHelp, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function ProductsList() {
  const [openDialogProductId, setOpenDialogProductId] = useState(null);

  return (
    <section className="bg-[#030712] text-white">
      <div className="snap-y snap-mandatory">
        {products.map((product, index) => (
          <Fragment key={product.id}>
            <article
              className="relative h-screen snap-start overflow-hidden"
            >
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority={index < 2}
              quality={75}
              sizes="100vw"
            />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(6,182,212,.35),transparent_42%),radial-gradient(circle_at_86%_78%,rgba(16,185,129,.28),transparent_40%),linear-gradient(120deg,rgba(2,6,23,.87)_0%,rgba(2,6,23,.58)_48%,rgba(2,6,23,.88)_100%)]" />

            <div className="relative z-10 flex h-full items-center px-4 py-8 md:px-8 lg:px-14">
              <div className="mx-auto grid w-full max-w-7xl items-center gap-6 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="order-2 rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md md:p-8 lg:order-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-100">
                    Segment {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-4xl font-black uppercase leading-[0.95] text-white md:text-6xl">
                    {product.name}
                  </h3>
                  <p className="mt-3 inline-flex rounded-full border border-cyan-200/40 bg-cyan-200/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-100">
                    {product.category}
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-slate-100 md:text-base">
                    {product.description}
                  </p>

                  <ul className="mt-6 grid gap-2 text-sm md:text-base">
                    {product.benefits
                      .slice(0, 3)
                      .map((benefit, benefitIndex) => (
                        <li
                          key={benefitIndex}
                          className="flex items-start gap-2 text-slate-100"
                        >
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                          {benefit}
                        </li>
                      ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {product.medicines.slice(0, 4).map((med, medIndex) => (
                      <span
                        key={medIndex}
                        className="rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-slate-100"
                      >
                        {med.name}
                      </span>
                    ))}
                  </div>

                  <Dialog
                    open={openDialogProductId === product.id}
                    onOpenChange={(open) => {
                      setOpenDialogProductId(open ? product.id : null);
                    }}
                  >
                    <DialogTrigger asChild>
                      <Button className="mt-7 w-full bg-white text-slate-900 hover:bg-cyan-100 md:w-auto">
                        View Available Medicines ({product.medicines.length})
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-h-[85vh] max-w-3xl overflow-hidden border-0 p-0">
                      <div className="bg-gradient-to-r from-slate-900 via-blue-800 to-slate-900 px-6 py-6 text-white md:px-8">
                        <DialogHeader>
                          <div className="mb-3 flex items-center justify-between gap-3">
                            <span className="inline-flex items-center rounded-full border border-white/35 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]">
                              {product.category}
                            </span>
                            <span className="inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-900">
                              {product.medicines.length} medicines
                            </span>
                          </div>
                          <DialogTitle className="text-2xl font-bold leading-tight text-white md:text-3xl">
                            {product.name} Medicines
                          </DialogTitle>
                          <DialogDescription className="pt-2 text-sm text-white/85 md:text-base">
                            Explore available formulations and open trusted
                            external references for detailed product
                            information.
                          </DialogDescription>
                        </DialogHeader>
                      </div>

                      <div className="px-6 py-5 md:px-8 md:py-6">
                        <div className="mb-4 flex items-start gap-3 rounded-xl border border-blue-100 bg-blue-50 p-4">
                          <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-700" />
                          <p className="text-sm leading-relaxed text-gray-700">
                            All links open in a new tab and point to third-party
                            sources for medicine details, usage, and
                            availability.
                          </p>
                        </div>

                        <div className="grid max-h-[46vh] gap-3 overflow-y-auto pr-1">
                          {product.medicines.map((med, medIndex) => (
                            <a
                              key={medIndex}
                              href={med.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-blue-300 hover:bg-blue-50 hover:shadow-sm"
                            >
                              <div className="flex items-center gap-3">
                                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-slate-900">
                                  {medIndex + 1}
                                </span>
                                <span className="font-medium text-gray-900 group-hover:text-blue-700">
                                  {med.name}
                                </span>
                              </div>
                              <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-500 group-hover:text-blue-700">
                                Open
                                <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                              </span>
                            </a>
                          ))}
                        </div>

                        <DialogFooter className="mt-5 flex items-center justify-between border-t border-gray-200 pt-4 sm:justify-between">
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <CircleHelp className="h-4 w-4" />
                            Verify dosage with a qualified healthcare
                            professional.
                          </div>
                          <DialogClose asChild>
                            <Button
                              type="button"
                              variant="outline"
                              className="border-slate-400 text-slate-800 hover:bg-slate-100"
                            >
                              Close
                            </Button>
                          </DialogClose>
                        </DialogFooter>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>
          </article>
          {index < products.length - 1 && (
            <div className="h-[10vh] w-full bg-white" />
          )}
        </Fragment>
        ))}
      </div>
    </section>
  );
}
