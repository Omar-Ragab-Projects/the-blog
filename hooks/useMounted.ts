"use client";
import { useEffect, useState } from "react";

function useMounted() {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return { mounted };
}

export default useMounted;
