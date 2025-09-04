import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, []);

  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="text-lg font-bold">
          BNE
        </Link>

        <div className="relative" ref={menuRef}>
          <button
            onClick={(e) => { e.stopPropagation(); setOpen(v => !v); }}
            className="rounded-xl bg-black px-4 py-2 font-medium text-white hover:opacity-90"
          >
            Ingresar o registrar
          </button>

          {open && (
            <div className="absolute right-0 z-10 mt-2 w-56 overflow-hidden rounded-xl border bg-white shadow-xl">
              <button
                className="block w-full px-4 py-2 text-left hover:bg-gray-50"
                onClick={() => { setOpen(false); navigate("/login"); }}
              >
                Ingresar (Login)
              </button>
              <button
                className="block w-full px-4 py-2 text-left hover:bg-gray-50"
                onClick={() => { setOpen(false); navigate("/register"); }}
              >
                Registrar (Crear cuenta)
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
