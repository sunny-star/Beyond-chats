import React, { useState } from "react";
import { FaPause, FaListUl } from "react-icons/fa";

export default function Composer({ onSend }) {
    const [text, setText] = useState("");

    return (
        <form
            className="flex items-center p-2 sm:p-3 md:p-4 bg-white border-t border-gray-200"
            onSubmit={e => {
                e.preventDefault();
                if (onSend && text.trim()) onSend(text);
                setText("");
            }}
        >
            {/* Icons on the left */}
            <span className="flex items-center space-x-2 mr-2 sm:mr-3">
                <button type="button" className="p-1 hover:bg-gray-100 rounded" title="Pause">
                    <FaPause size={16} className="text-gray-600 sm:w-5 sm:h-5" />
                </button>
                <button type="button" className="p-1 hover:bg-gray-100 rounded" title="List">
                    <FaListUl size={16} className="text-gray-600 sm:w-5 sm:h-5" />
                </button>
            </span>

            {/* Message input */}
            <input
                className="flex-1 px-2 sm:px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                type="text"
                placeholder="Type your message…"
                value={text}
                onChange={e => setText(e.target.value)}
                aria-label="Type your message"
            />

            {/* Send button */}
            <button
                type="submit"
                className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition text-sm sm:text-base ml-2"
            >
                Send
            </button>
        </form>
    );
}
