"use client"

import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {

  const contact = [
    {
      title: "Company",
      className: "flex flex-col gap-2 justify-center",
      children: [
        { label: "about us", path: "about", icon: "", type: "section" },
        { label: "our service", path: "service", icon: "", type: "section" },
        { label: "privacy policy", path: "", icon: "", type: "section" },
        { label: "affiliate program", path: "", icon: "", type: "section" },
      ],
    },
    {
      title: "Get Help",
      className: "flex flex-col gap-2 justify-center",
      children: [
        { label: "FAQ", path: "", icon: "", type: "link" },
        { label: "shipping", path: "", icon: "", type: "link" },
        { label: "returns", path: "", icon: "", type: "link" },
        { label: "order status", path: "", icon: "", type: "link" },
        { label: "payment options", path: "", icon: "", type: "link" },
      ],
    },
    {
      title: "Follow Us",
      className: "grid grid-cols-4 gap-y-5 text-[2rem] items-center justify-center",
      children: [
        { label: "", path: "", icon: <FaFacebook />, type: "link" },
        { label: "", path: "", icon: <FaTwitter />, type: "link" },
        { label: "", path: "", icon: <FaInstagram />, type: "link" },
        { label: "", path: "", icon: <FaLinkedin />, type: "link" },
      ],
    }
  ];

  const handleToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div className="relative top-[80px] flex gap-10 justify-center items-center p-10 bg-dark">
      <div className="grid y-tablet:grid-cols-2 x-tablet:grid-cols-3 gap-10">
        {contact.map((header, index) => (
          <div key={index} className="min-w-[250px] smartphone:min-w-[300px] flex flex-col gap-8">
            <h1 className="relative after:w-full after:h-[3px] after:rounded-full after:-bottom-3 after:left-0 after:absolute after:bg-dark-green text-[1.2rem] text-white font-bold">{header.title}</h1>
            <div className={`${header.className} text-white-smoke text-[1.1rem]`}>
              {header.children && (
                header.children.map((body, index) => (
                  body.type === "link" ? (
                    <Link href={body.path} key={index}>
                      {body.label && <p className="hover:translate-x-2 hover:text-white duration-300">{body.label}</p>}
                      {body.icon && <p className="hover:text-white hover:text-[2.5rem] duration-300">{body.icon}</p>}
                    </Link>
                  ) : (
                    <div onClick={() => handleToSection(body.path)} key={index}>
                      {body.label && <p className="hover:translate-x-2 hover:text-white duration-300 cursor-pointer">{body.label}</p>}
                      {body.icon && <p className="hover:text-white hover:text-[2.5rem] duration-300">{body.icon}</p>}
                    </div>
                  )
                ))
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}