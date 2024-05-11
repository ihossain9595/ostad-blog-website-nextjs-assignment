import Header from "../Header/Header";
import Footer from "@/components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const getData = async () => {
  const socials = (await (await fetch(`${process.env.HOST}/api/social`)).json())?.data;
  const categories = (await (await fetch(`${process.env.HOST}/api/category`)).json())?.data;

  return { socials, categories };
};

const MainLayout = async ({ children }) => {
  const { socials, categories } = await getData();

  return (
    <div>
      <Header socials={socials} categories={categories} />

      {children}

      <Toaster position="bottom-center" />

      <Footer socials={socials} categories={categories} />
    </div>
  );
};

export default MainLayout;
