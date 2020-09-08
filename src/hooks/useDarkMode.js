import useLocalStorage from "./useLocalStorage";
function useDarkMode() {
  const [darkModeBool, setDarkModeBool] = useLocalStorage("darkmode");
  return [darkModeBool, setDarkModeBool];
}
export default useDarkMode;
