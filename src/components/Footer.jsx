import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Footer = () => {

    const links = [
        {
          id: 1,
          child: (
            <>
              LinkedIn <FaLinkedin size={30} />
            </>
          ),
          href: "https://www.linkedin.com/in/abhishek-lodha-27a8bb225?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        {
          id: 2,
          child: (
            <>
              GitHub <FaGithub size={30} />
            </>
          ),
          href: "https://github.com/Abhisheklodha01",
        },
        {
          id: 3,
          child: (
            <>
              Mail <HiOutlineMail size={30} />
            </>
          ),
          href: "mailto:abhisheklodha512@gmail.com",
        },
        {
          id: 4,
          child: (
            <>
              Resume <BsFillPersonLinesFill size={30} />
            </>
          ),
          href: "/resume.pdf",
          download: true,
        },
      ];

  return (
    <div className="bg-blue-950 sm:hidden">
      <ul className='flex flex-col items-center justify-around'>
        {links.map(({ id, child, href, download }) => (
          <li
            key={id}
            className="h-14 p-4"
              
          >
            <a
              href={href}
              download={download}
              className="flex justify-between items-center  text-white gap-[5px]"
              target="_blank"
              rel="noreferrer"
            >
             {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Footer