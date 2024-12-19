import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="absolute -rotate-90 left-[-225px] bottom-[174px]">
        <small className="text-[#a6adb5] text-[11px] selection:bg-[rgba(255,255,255,0.1)]">
          <p className="opacity-40">
            &copy; {new Date().getFullYear()} Copyright by{" "}
            <a href="https://github.com/shreenarayan1234" target="_blank" className="underline">
              Shreenarayan
            </a>
          </p>
        </small>
      </footer>
    </>
  );
};

export default Footer;
