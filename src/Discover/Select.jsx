import { useState } from "react";

const Select = ({ options, onChange }) => {

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(options.values[0]);

    const handleSelect = (value) => {
        setSelected(value);
        onChange(value);
        setOpen(false);
    };

    return (
        <div className="relative w-fit">

            
            <button
                type="button"
                onClick={() => setOpen(!open)}
                className="border px-2 py-1 rounded-xl bg-gray-700 h-fit w-fit flex items-center gap-2"
            >
                {selected}
                <span className="text-sm">
                    {open ? "▲" : "▼"}
                </span>
            </button>


           
            <div
                className={`
                    absolute top-full left-0 mt-1
                    min-w-max
                    bg-gray-700 border border-gray-600
                    rounded-xl overflow-hidden z-50
                    transition-all duration-500 ease-in-out
                    origin-top
                    ${open
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                    }
                `}
            >
                {options.values.map((opt) => (
                    <button
                        type="button"
                        key={opt}
                        onClick={() => handleSelect(opt)}
                        className=" cursor-pointer
                            block w-full
                            text-left
                            px-3 py-2
                            hover:bg-yellow-500
                            hover:text-black
                            whitespace-nowrap
                        "
                    >
                        {opt}
                    </button>
                ))}
            </div>

        </div>
    );
};

export default Select;