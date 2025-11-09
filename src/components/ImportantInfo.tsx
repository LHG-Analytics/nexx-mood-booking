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
    <section className="py-20 px-6" id="contact">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Important Information
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Please review our policies before booking
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
                className="bg-card rounded-2xl p-6 shadow-lg border border-border transition-all duration-300 hover:shadow-xl hover:border-primary/30"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-bold text-foreground mb-2 text-lg">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImportantInfo;
