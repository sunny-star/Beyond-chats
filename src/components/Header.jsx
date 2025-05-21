import React from "react";
import { BsThreeDots, BsMoonStarsFill } from "react-icons/bs";

export default function Header({ conversation }) {
    return (
        <header className="flex items-center px-3 sm:px-6 py-3 sm:py-4 bg-white border-b border-gray-200">
            {/* Avatar and Name */}
            <div className="flex items-center space-x-2 sm:space-x-3">
                <span className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                    {conversation.initials}
                </span>
                <span className="font-semibold text-base sm:text-lg text-gray-800 truncate">
                    {conversation.name}
                </span>
            </div>

            {/* Spacer to push the right-side content */}
            <div className="flex-1" />

            {/* Icons and Close Button */}
            <div className="flex items-center space-x-3 sm:space-x-4">
                <BsThreeDots size={18} color="black" title="More options" />
                <BsMoonStarsFill size={18} color="black" title="Toggle theme" />
                <button
                    className="bg-black text-white text-xs px-3 py-1 rounded hover:bg-gray-900 transition"
                    style={{ lineHeight: "1" }}
                >
                    Close
                </button>
            </div>
        </header>
    );
}
