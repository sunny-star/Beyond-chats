import React from "react";

export default function Sidebar({ children }) {
    return (
        <aside
            className="
                hidden sm:flex sm:w-64
                bg-white border-r border-gray-200 flex flex-col
                min-h-0
            "
        >
            <div className="
                p-6
                text-xl
                font-bold text-blue-700 border-b border-gray-100
                text-center
                bg-white
                sticky top-0 z-10
            ">
                Your Inbox
            </div>
            <div className="flex-1 overflow-y-auto">{children}</div>
        </aside>
    );
}
