import { useEffect } from "react";

export default function useSetLocalStorage(key, value) {
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  });
}
