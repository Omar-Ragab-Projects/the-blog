import React from "react";

function PageHeader({ title }: { title: string }) {
  return (
    <>
      <span className="w-full h-[2px] bg-foreground block mt-[20px]"></span>
      <h1
        className="animate-initHeader select-none font-bold leading-[100%] text-center my-2 lg:my-[30px] flex flex-col gap-4 "
        style={{ fontSize: "clamp(2rem, 17vw, 270px)" }}
      >
        {title}
      </h1>
      <span className="w-full h-[2px] bg-foreground block mb-[20px]"></span>
    </>
  );
}

export default PageHeader;
