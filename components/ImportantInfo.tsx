"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Users, DollarSign, Wine, CalendarClock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useMotel } from "@/contexts/MotelContext";
import type { ImportantInfoExtra } from "@/types/motel";

const extraIcons: Record<ImportantInfoExtra, typeof CalendarClock> = {
  flexibleRates: CalendarClock,
};

const ImportantInfo = () => {
  const { t } = useLanguage();
  const config = useMotel();

  const info = [
    {
      icon: CheckCircle2,
      title: t.importantInfo.ageRequirement.title,
      description: t.importantInfo.ageRequirement.description,
    },
    {
      icon: Users,
      title: t.importantInfo.occupancy.title,
      description: t.importantInfo.occupancy.description,
    },
    {
      icon: DollarSign,
      title: t.importantInfo.extraPerson.title,
      description: t.importantInfo.extraPerson.description,
    },
    {
      icon: Wine,
      title: t.importantInfo.alcohol.title,
      description: t.importantInfo.alcohol.description,
    },
    // Motel-specific cards (e.g. Nexx's daily/overnight rates)
    ...(config.importantInfoExtras ?? []).map((key) => ({
      icon: extraIcons[key],
      title: t.importantInfo[key].title,
      description: t.importantInfo[key].description,
    })),
  ];

  return (
    <section className="px-6 py-20" id="contact">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            {t.importantInfo.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t.importantInfo.subtitle}
          </p>
        </motion.div>

        {/* Flex-wrap (not grid) so motels with a 5th card get it centered on a
            second row instead of stranded in a 4-column track */}
        <div className="mx-auto flex max-w-6xl flex-wrap justify-center gap-6">
          {info.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="w-full rounded-2xl border border-border bg-card p-6 shadow-lg transition-all duration-300 hover:border-primary/30 hover:shadow-xl md:w-[calc(50%-0.75rem)] lg:w-[calc(25%-1.125rem)]"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImportantInfo;
