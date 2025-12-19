type TypeNavigation = {
  name: string;
  href: string;
  sublink?: { name: string; href: string }[];
};

type TypeCarousel = {
  image: string;
  title: string;
  description: string;
  buttonText: string;
};

type TypeDoctors = {
  sucursal: string;
  doctor: string;
  especialidad: string;
  image?: string;
};

interface TypeSection {
  title?: string;
  position?: "start" | "center" | "end";
  description?: string;
  children: React.ReactNode;
}
