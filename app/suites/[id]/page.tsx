import { notFound } from "next/navigation";
import SuiteDetailsClient from "./suite-details-client";

interface Suite {
  id: string;
  name: string;
  price: number;
  address: string;
  hours: {
    weekdays: string;
    weekend: string;
  };
  pricing: {
    weekdays: {
      fractional: number;
      daily: number;
      overnight: number;
    };
    weekend: {
      fractional: number;
      daily: number;
      overnight: number;
    };
  };
  amenities: string[];
  images: string[];
  description: string;
}

const suitesData: Record<string, Suite> = {
  nexx: {
    id: "nexx",
    name: "Suite Nexx",
    price: 55,
    address: "11102 Biscayne Blvd., North Miami, FL 33181",
    hours: {
      weekdays: "SUNDAY 11PM TO FRIDAY 7AM",
      weekend: "FRIDAY 7AM TO SUNDAY 11PM",
    },
    pricing: {
      weekdays: {
        fractional: 55,
        daily: 218,
        overnight: 109,
      },
      weekend: {
        fractional: 59,
        daily: 230,
        overnight: 115,
      },
    },
    amenities: ["TV", "RADIO", "SINGLE SHOWER", "MINI BAR"],
    images: ["/assets/motel-room-1.jpg", "/assets/room-1.jpg", "/assets/room-2.jpg"],
    description:
      "Experience comfort and style in our Suite Nexx. Perfect for a relaxing stay with all essential amenities.",
  },
  "nexx-plus": {
    id: "nexx-plus",
    name: "Suite Nexx Plus",
    price: 59,
    address: "11102 Biscayne Blvd., North Miami, FL 33181",
    hours: {
      weekdays: "SUNDAY 11PM TO FRIDAY 7AM",
      weekend: "FRIDAY 7AM TO SUNDAY 11PM",
    },
    pricing: {
      weekdays: {
        fractional: 59,
        daily: 230,
        overnight: 115,
      },
      weekend: {
        fractional: 63,
        daily: 245,
        overnight: 125,
      },
    },
    amenities: ["TV", "RADIO", "POLE", "MINI BAR", "DOUBLE SHOWER"],
    images: ["/assets/room-2.jpg", "/assets/motel-room-1.jpg", "/assets/room-3.jpg"],
    description:
      "Elevate your experience with Suite Nexx Plus. Featuring a pole and double shower for added luxury.",
  },
  jacuzzi: {
    id: "jacuzzi",
    name: "Suite Jacuzzi",
    price: 79,
    address: "11102 Biscayne Blvd., North Miami, FL 33181",
    hours: {
      weekdays: "SUNDAY 11PM TO FRIDAY 7AM",
      weekend: "FRIDAY 7AM TO SUNDAY 11PM",
    },
    pricing: {
      weekdays: {
        fractional: 79,
        daily: 280,
        overnight: 140,
      },
      weekend: {
        fractional: 85,
        daily: 295,
        overnight: 150,
      },
    },
    amenities: ["TV", "RADIO", "MINI BAR", "DOUBLE SHOWER", "POLE", "JACUZZI"],
    images: ["/assets/room-3.jpg", "/assets/motel-interior-1.jpg", "/assets/room-4.jpg"],
    description:
      "Indulge in ultimate relaxation with our Suite Jacuzzi. Complete with a luxurious jacuzzi and premium amenities.",
  },
  vip: {
    id: "vip",
    name: "Suite VIP",
    price: 125,
    address: "11102 Biscayne Blvd., North Miami, FL 33181",
    hours: {
      weekdays: "SUNDAY 11PM TO FRIDAY 7AM",
      weekend: "FRIDAY 7AM TO SUNDAY 11PM",
    },
    pricing: {
      weekdays: {
        fractional: 125,
        daily: 380,
        overnight: 190,
      },
      weekend: {
        fractional: 135,
        daily: 400,
        overnight: 200,
      },
    },
    amenities: ["TV", "RADIO", "MINI BAR", "DOUBLE CRYSTAL SHOWER", "POLE", "SPA BATHTUP"],
    images: ["/assets/room-4.jpg", "/assets/motel-exterior-1.jpg", "/assets/room-1.jpg"],
    description:
      "Experience the pinnacle of luxury in our Suite VIP. Featuring a spa bathtub, crystal shower, and exclusive amenities.",
  },
};

export default async function SuitePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const suite = suitesData[id];

  if (!suite) {
    notFound();
  }

  return <SuiteDetailsClient suite={suite} />;
}
