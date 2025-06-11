"use client";
import { useState } from "react";
import { Crown, Gem, Badge, Link } from "lucide-react";

import { plans, Plan } from "../../../../config/Manage";
import { planStyles } from "../../../../config/style";

const Manage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("monthly");

  const filteredPlans: Plan[] = plans;

  return (
    <section id="services-section" className="py-20 lg:pb-44 bg-gray-50">
      <div className="container px-5 mx-auto max-w-7xl">
        <h3
          data-aos="fade-down"
          className="text-center text-4xl lg:text-65xl lg:leading-[80px] pt-5 font-bold text-blueprimary"
        >
          Kelola Semua Proyek Website Anda <br className="hidden md:block" />
          Dalam Satu Tempat.
        </h3>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 pt-14 lg:pt-20">
          {filteredPlans.map((plan, i) => {
            const discountedPrice =
              plan.originalPrice -
              (plan.originalPrice * plan.discountPercentage) / 100;

            const isPremium = plan.heading === "Premium";
            const isStandard = plan.heading === "Standard";
            const isBasic = plan.heading === "Basic";

            return (
              <div data-aos="fade-up" key={i} className="h-full">
                <div
                  className={`relative manageTabs text-center h-full p-10 rounded-xl shadow-md transition-transform duration-500 ease-in-out
                  ${
                    isPremium
                      ? planStyles.card.premium
                      : isStandard
                      ? planStyles.card.standard
                      : planStyles.card.basic
                  }
                  hover:scale-105`}
                >
                  {/* Label Diskon */}
                  {plan.discountPercentage > 0 && (
                    <div
                      className={`absolute top-3 right-3 text-sm sm:text-base font-bold px-3 py-1 rounded-full shadow-lg z-10 ${
                        isPremium
                          ? planStyles.discountLabel.premium
                          : planStyles.discountLabel.default
                      }`}
                    >
                      Hemat {plan.discountPercentage}%
                    </div>
                  )}

                  {/* Heading & Icon */}
                  <h2
                    className={`flex items-center justify-center gap-2 text-2xl font-extrabold mb-6 ${
                      isPremium
                        ? planStyles.heading.premium
                        : isStandard
                        ? planStyles.heading.standard
                        : planStyles.heading.default
                    }`}
                  >
                    {isPremium && <Crown className="w-6 h-6 text-yellow-400" />}
                    {isStandard && <Gem className="w-6 h-6 text-blue-500" />}
                    {isBasic && <Badge className="w-6 h-6 text-gray-500" />}
                    {plan.heading}
                  </h2>

                  {/* Harga */}
                  <div className="mb-1 text-sm font-semibold opacity-70">
                    Mulai dari
                  </div>
                  <div className="mb-6">
                    {plan.discountPercentage > 0 ? (
                      <>
                        <span className="block mb-1 text-lg line-through opacity-60">
                          Rp{plan.originalPrice.toLocaleString("id-ID")}
                        </span>
                        <span className="text-4xl font-bold text-red-500">
                          Rp{discountedPrice.toLocaleString("id-ID")}
                        </span>
                      </>
                    ) : (
                      <span className="text-4xl font-bold">
                        Rp{plan.originalPrice.toLocaleString("id-ID")}
                      </span>
                    )}
                  </div>

                  {/* Tombol CTA */}
                  <Link
                    href={plan.href}
                    target="_blank"
                    className={`inline-block text-sm font-bold rounded-full py-3 px-12 mb-8 transition-all duration-300 ${
                      isPremium
                        ? planStyles.button.premium
                        : isStandard
                        ? planStyles.button.standard
                        : planStyles.button.default
                    }`}
                  >
                    {plan.button}
                  </Link>

                  {/* Garis Batas */}
                  <hr
                    className={`border ${
                      isPremium ? planStyles.hr.premium : planStyles.hr.default
                    } mb-8`}
                  />

                  {/* Benefit */}
                  <div
                    className={`space-y-3 ${
                      isPremium
                        ? planStyles.textColor.premium
                        : planStyles.textColor.default
                    }`}
                  >
                    {plan.benefit.map((ben, index) => (
                      <p key={index}>{ben}</p>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Manage;
