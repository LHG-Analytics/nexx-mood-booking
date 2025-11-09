"use client";
import { motion } from "framer-motion";
import { CheckCircle2, Users, DollarSign, Ban } from "lucide-react";

const ImportantInfo = () => {
  const info = [
    {
      icon: CheckCircle2,
      title: "Must be 18+ To Rent",
      description: "Valid ID required at check-in",
    },
    {
      icon: Users,
      title: "Suites for up to 02 people",
      description: "Maximum occupancy per room",
    },
    {
      icon: DollarSign,
      title: "Extra Person: +50%",
      description: "Additional charge of suite value",
    },
    {
      icon: Ban,
      title: "No Alcohol Sales",
      description: "Available at nearby locations",
    },
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
            Important Information
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Please review our policies before booking
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                className="rounded-2xl border border-border bg-card p-6 shadow-lg transition-all duration-300 hover:border-primary/30 hover:shadow-xl"
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
